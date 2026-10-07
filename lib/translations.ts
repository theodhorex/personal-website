export type Language = "en" | "id";

export const translations = {
  en: {
    // Header
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    available_status: "Available 2026",
    role_subtitle: "Web Developer & Web3 Enthusiast",

    // Hero
    hero_eyebrow_badge: "THEODHORE // INDONESIA (UTC+7)",
    hero_eyebrow_tag: "// WEB DEV & WEB3 ENTHUSIAST",
    hero_headline:
      "I build high-performance web applications, decentralized protocols, and developer tooling.",
    hero_lede:
      "Operating across Indonesia and collaborating with teams globally. Focused on modern web engineering, reactive Web3 dApps, and high-leverage developer tools built on Next.js 16, TypeScript, and EVM.",
    hero_cta_work: "Selected Work (05)",
    hero_cta_about: "About & Principles",
    hero_stat_1_title: "01 // WEB3 ARCHITECTURE",
    hero_stat_1_desc: "Sub-second RPC latency & verified smart contract state",
    hero_stat_2_title: "02 // EDGE WEB PERFORMANCE",
    hero_stat_2_desc: "<25ms global TTFB edge streaming on Next.js 16",
    hero_stat_3_title: "03 // DEV TOOLING RELIABILITY",
    hero_stat_3_desc: "Zero-config developer workflows & type-safe toolchains",

    // Work / Case Study Drawer
    work_section_title: "Selected Work",
    drawer_case_study: "CASE STUDY",
    drawer_context: "CONTEXT",
    drawer_role: "ROLE",
    drawer_timeline: "TIMELINE",
    drawer_constraint: "THE CONSTRAINT & CHALLENGE",
    drawer_decisions: "ARCHITECTURAL DECISIONS",
    drawer_outcomes: "VERIFIED OUTCOMES",
    drawer_tech: "TECHNOLOGY STACK",
    drawer_source_repo: "Source Repository",
    drawer_close: "Close (Esc)",

    // About
    about_section_title: "About",
    about_lede:
      "I’m a web developer and Web3 enthusiast building high-performance web applications, decentralized protocol frontends, and developer tooling.",
    about_body:
      "Operating across Indonesia (UTC+7) and collaborating with engineering teams globally. I focus on building resilient modern web applications, reactive Web3 interfaces with sub-second RPC latency, and zero-overhead developer tools that elevate engineering velocity.",
    about_capabilities_title: "CORE CAPABILITIES",
    about_recognition_title: "RECOGNITION & INVARIANTS",

    // Contact
    contact_section_title: "Contact",
    contact_cta: "Let’s build something extraordinary together.",
    contact_subtitle:
      "Available for modern web platforms, Web3 protocols, developer tooling, and select 2026 engineering roles.",
    contact_copied: "Copied!",

    // Footer
    footer_status: "ALL SYSTEMS OPERATIONAL",
    footer_top: "Top",
  },
  id: {
    // Header
    nav_work: "Proyek",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    available_status: "Tersedia 2026",
    role_subtitle: "Web Developer & Penggiat Web3",

    // Hero
    hero_eyebrow_badge: "THEODHORE // INDONESIA (UTC+7)",
    hero_eyebrow_tag: "// WEB DEV & PENGGIAT WEB3",
    hero_headline:
      "Saya membangun aplikasi web berkinerja tinggi, protokol terdesentralisasi, dan developer tooling.",
    hero_lede:
      "Beroperasi di Indonesia dan berkolaborasi dengan tim secara global. Berfokus pada rekayasa web modern, dApp Web3 reaktif, dan developer tools berdaya guna tinggi berbasis Next.js 16, TypeScript, dan EVM.",
    hero_cta_work: "Proyek Pilihan (05)",
    hero_cta_about: "Tentang & Prinsip",
    hero_stat_1_title: "01 // ARSITEKTUR WEB3",
    hero_stat_1_desc: "Latensi RPC sub-detik & verifikasi status smart contract",
    hero_stat_2_title: "02 // PERFORMA EDGE WEB",
    hero_stat_2_desc: "<25ms global TTFB edge streaming pada Next.js 16",
    hero_stat_3_title: "03 // KEANDALAN DEV TOOLING",
    hero_stat_3_desc: "Workflow developer zero-config & toolchain type-safe",

    // Work / Case Study Drawer
    work_section_title: "Proyek Pilihan",
    drawer_case_study: "STUDI KASUS",
    drawer_context: "KONTEKS",
    drawer_role: "PERAN",
    drawer_timeline: "WAKTU",
    drawer_constraint: "TANTANGAN & KENDALA TEKNIS",
    drawer_decisions: "KEPUTUSAN ARSITEKTUR",
    drawer_outcomes: "HASIL TERVERIFIKASI",
    drawer_tech: "TEKNOLOGI & TOOLS",
    drawer_source_repo: "Repositori Kode",
    drawer_close: "Tutup (Esc)",

    // About
    about_section_title: "Tentang",
    about_lede:
      "Saya adalah web developer dan penggiat Web3 yang membangun aplikasi web berkinerja tinggi, frontend protokol terdesentralisasi, dan developer tooling.",
    about_body:
      "Beroperasi di Indonesia (UTC+7) dan berkolaborasi dengan tim engineering global. Saya berfokus membangun aplikasi web modern yang tangguh, antarmuka Web3 reaktif dengan latensi RPC sub-detik, serta developer tools efisien untuk mempercepat proses pengembangan.",
    about_capabilities_title: "KEMAMPUAN UTAMA",
    about_recognition_title: "PENCAPAIAN & PRINSIP KERJA",

    // Contact
    contact_section_title: "Kontak",
    contact_cta: "Mari bangun sesuatu yang luar biasa bersama.",
    contact_subtitle:
      "Terbuka untuk platform web modern, protokol Web3, developer tooling, dan kolaborasi engineering di 2026.",
    contact_copied: "Tersalin!",

    // Footer
    footer_status: "SEMUA SISTEM BERJALAN NORMAL",
    footer_top: "Ke Atas",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
