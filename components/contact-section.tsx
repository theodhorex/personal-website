"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Check, Mail } from "lucide-react";
import { Reveal } from "./reveal";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Autonomous Agent Architecture",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#eeece7] py-20 sm:py-28 border-b border-[#d9d9dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <Reveal>
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-white px-3 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-3">
                COMMUNICATION CHANNEL // INGRESS
              </span>
              <h2 className="section-display text-3xl sm:text-5xl font-normal text-[#17171c]">
                Initiate a Technical Collaboration
              </h2>
              <p className="mt-3 text-base text-[#616161] font-sans max-w-xl mx-auto">
                Discussing autonomous agent runtimes, high-throughput web systems, or advisory engineering roles for 2026.
              </p>
            </div>
          </Reveal>

          {/* Form Card */}
          <Reveal delay={120}>
            <div className="bg-white rounded-[22px] p-8 sm:p-12 border border-[#d9d9dd] shadow-sm cohere-card-lift">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#edfce9] text-[#003c33] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-normal text-[#17171c]">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm text-[#616161] max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <span className="font-semibold text-black">{formData.name}</span>. Your brief regarding{" "}
                    <span className="font-mono text-xs text-[#003c33] bg-[#edfce9] px-1.5 py-0.5 rounded">{formData.category}</span> has been indexed. I will respond to{" "}
                    <span className="font-medium text-black">{formData.email}</span> within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", category: "Autonomous Agent Architecture", message: "" });
                      }}
                      className="text-xs font-mono text-[#1863dc] underline hover:text-[#17171c] transition-colors"
                    >
                      Transmit another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#75758a] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] border border-[#d9d9dd] text-sm text-[#212121] placeholder-[#93939f] focus:outline-none focus:border-[#9b60aa] bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#75758a] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@organization.io"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] border border-[#d9d9dd] text-sm text-[#212121] placeholder-[#93939f] focus:outline-none focus:border-[#9b60aa] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#75758a] uppercase tracking-wider mb-2">
                      Project Domain / Scope
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] border border-[#d9d9dd] text-sm text-[#212121] focus:outline-none focus:border-[#9b60aa] bg-white transition-colors"
                    >
                      <option value="Autonomous Agent Architecture">Autonomous Agent Architecture</option>
                      <option value="Next.js 16 Web Systems & Edge">Next.js 16 Web Systems &amp; Edge</option>
                      <option value="Vector Retrieval & Hybrid Search">Vector Retrieval &amp; Hybrid Search</option>
                      <option value="Engineering Advisory & Auditing">Engineering Advisory &amp; Auditing</option>
                      <option value="Other Technical Collaboration">Other Technical Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#75758a] uppercase tracking-wider mb-2">
                      Project Specification / Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide context regarding requirements, timeline, architecture goals, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] border border-[#d9d9dd] text-sm text-[#212121] placeholder-[#93939f] focus:outline-none focus:border-[#9b60aa] bg-white transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#616161] hover:text-black bg-[#eeece7] px-3 py-1.5 rounded-[4px] border border-[#d9d9dd] transition-all active:scale-95"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>theodhore.dev@gmail.com</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-3.5 h-3.5" />
                            <span>Direct: theodhore.dev@gmail.com</span>
                          </>
                        )}
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#17171c] hover:bg-black text-white text-sm font-medium px-8 py-3.5 rounded-[32px] transition-all shadow-none group active:scale-95"
                    >
                      <span>Transmit Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
