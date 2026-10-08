"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER_SOURCE = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SOURCE = `precision highp float;

uniform float uTime;
uniform float uScroll;
uniform vec2 uResolution;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uStrength;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 ramp(float t) {
  float tri = 1.0 - abs(fract(t) * 2.0 - 1.0);
  return tri < 0.5 ? mix(uColorA, uColorB, tri * 2.0) : mix(uColorB, uColorC, (tri - 0.5) * 2.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float right = step(0.5, uv.x);
  float side = min(uv.x, 1.0 - uv.x) * 2.0;
  
  // Wave pattern with simplex noise
  float wave = snoise(vec2(uv.y * 1.4 + uTime * 0.06, uTime * 0.18 + right * 7.3));
  float reach = 0.42 + 0.16 * wave;
  float curtain = smoothstep(reach, 0.0, side);
  
  // Top ambient glow so the top of the hero header also bathes in aurora light
  float topGlow = smoothstep(0.45, 1.0, uv.y) * 0.45;
  
  float streak = 0.55 + 0.45 * snoise(vec2(side * 4.0 + right * 3.1, uv.y * 2.2 - uTime * 0.12));
  float alpha = clamp((curtain + topGlow) * streak, 0.0, 1.0) * uStrength;
  
  vec3 color = ramp(uv.y * 0.35 + uScroll * 0.9 + right * 0.08);
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

const DARK_THEME = {
  colors: [
    [0.9, 0.66, 0.22], // Monad Gold / Amber
    [0.5, 0.34, 1.0],  // Monad Royal Violet
    [0.86, 0.3, 0.72], // Magenta Accent
  ],
  strength: 0.9,
};

const LIGHT_THEME = {
  colors: [
    [1.0, 0.8, 0.42],  // Warm Gold
    [0.72, 0.62, 1.0], // Soft Lilac
    [1.0, 0.62, 0.86], // Rose Pink
  ],
  strength: 0.65,
};

export function AuroraBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
    });

    if (!gl) {
      // Fallback: WebGL not supported
      return () => {
        canvas.remove();
      };
    }

    // Helper: Compile Shader
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen triangle covering [-1, -1] to [3, 3]
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uScrollLoc = gl.getUniformLocation(program, "uScroll");
    const uResLoc = gl.getUniformLocation(program, "uResolution");
    const uColorALoc = gl.getUniformLocation(program, "uColorA");
    const uColorBLoc = gl.getUniformLocation(program, "uColorB");
    const uColorCLoc = gl.getUniformLocation(program, "uColorC");
    const uStrengthLoc = gl.getUniformLocation(program, "uStrength");

    const updateThemeUniforms = () => {
      const isLight =
        document.documentElement.getAttribute("data-theme") === "light" ||
        (!document.documentElement.classList.contains("dark") &&
          document.documentElement.getAttribute("data-theme") !== "dark");
      const config = isLight ? LIGHT_THEME : DARK_THEME;

      gl.useProgram(program);
      gl.uniform3fv(uColorALoc, config.colors[0]);
      gl.uniform3fv(uColorBLoc, config.colors[1]);
      gl.uniform3fv(uColorCLoc, config.colors[2]);
      gl.uniform1f(uStrengthLoc, config.strength);
    };

    updateThemeUniforms();

    // Resize handler (dpr 0.5 for silky 60fps performance)
    const handleResize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      const dpr = 0.5;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => updateThemeUniforms());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    let animationFrameId: number;
    let scrollProgress = 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = (time: number) => {
      const doc = document.scrollingElement || document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const targetScroll = maxScroll > 0 ? doc.scrollTop / maxScroll : 0;
      scrollProgress += (targetScroll - scrollProgress) * 0.06;

      gl.useProgram(program);
      gl.uniform1f(uTimeLoc, time * 0.001);
      gl.uniform1f(uScrollLoc, scrollProgress);

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      canvas.remove();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="aurora-backdrop" />;
}
