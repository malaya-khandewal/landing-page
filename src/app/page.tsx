"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const mandalaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mandalaRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      const depth = 30;
      mandalaRef.current.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-margin-desktop py-16 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="hero-gradient absolute inset-0"></div>
            {/* Primary Rotating Mandala Background Pattern */}
            <div
              ref={mandalaRef}
              className="relative w-[140vw] h-[140vw] max-w-[1600px] max-h-[1600px] mandala-rotate opacity-20 transition-transform duration-200 ease-out"
            >
              <img
                className="w-full h-full object-contain"
                alt="Intricate geometric mandala visualization merging traditional patterns with digital neural networks."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfgDZ3c51oRkOazLUv9FYlcOq-YnO6bXRvjezdscFkuMHO_aLDoSIjFzQBojx6oBrBkAXBFzUPMsL4DQWFHRO_4nr32EW7BnN47OjhXwfpdhfw2KugMw_fqvM1KtdGcejQ7MDvsK6jcjX6yobIgq6MNCQnpmRks9olllXP1Ke-xXZOWURFdK4RdJbdXHFlRxaxgS6YSFCOU9RaMcb3dwyShlgE-KhUIAgR1LdbcwSm2QJ7wXiykZpHfB8il0ZY_PyUZpAjCZWrHbv"
              />
            </div>
          </div>

          <div className="max-w-container-max mx-auto w-full z-10 text-center flex flex-col items-center">
            <div className="space-y-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed rounded-full text-primary font-label-sm mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                Empowering Enterprise with Intelligence
              </div>
              <h1 className="text-display-lg font-display-lg text-primary leading-[1.1] md:text-[64px]">
                Transforming Industries with <br />
                <span className="text-secondary">Intelligent AI</span> Solutions
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Bodha AI builds cutting-edge Artificial Intelligence systems that
                help organizations automate operations, enhance decision-making,
                and unlock growth.
              </p>
              <div className="flex flex-wrap gap-6 pt-4 justify-center">
                <a
                  href="#solutions"
                  className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-headline-md text-body-md hover:bg-on-secondary-fixed-variant transition-all flex items-center gap-2 group shadow-lg"
                >
                  Explore Solutions
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <button className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-headline-md text-body-md hover:bg-primary hover:text-on-primary transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Neural flow decoration */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <div className="neural-line opacity-20"></div>
            <div
              className="neural-line opacity-10"
              style={{ top: "10px", animationDelay: "1.5s" }}
            ></div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-24 px-margin-desktop bg-surface-container-low relative"
          id="about"
        >
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-headline-lg font-headline-lg text-primary">
                  Democratizing AI for Every Horizon
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Bodha AI is an innovation powerhouse dedicated to making
                  high-tier intelligence accessible. We bridge the gap between
                  complex research and practical application, ensuring that the
                  transformative power of AI is not just a privilege for the
                  few, but a catalyst for all.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    neurology
                  </span>
                  <h3 className="font-bold text-primary">Generative AI</h3>
                </div>
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_tree
                  </span>
                  <h3 className="font-bold text-primary">LLMs</h3>
                </div>
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    smart_toy
                  </span>
                  <h3 className="font-bold text-primary">Agentic Systems</h3>
                </div>
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    database
                  </span>
                  <h3 className="font-bold text-primary">RAG</h3>
                </div>
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    trending_up
                  </span>
                  <h3 className="font-bold text-primary">Predictive Analytics</h3>
                </div>
                <div className="glass-card p-6 rounded-xl space-y-3 hover:border-secondary">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    psychology
                  </span>
                  <h3 className="font-bold text-primary">Cognitive Services</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions Bento Grid */}
        <section className="py-24 px-margin-desktop" id="solutions">
          <div className="max-w-container-max mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-headline-lg font-headline-lg text-primary">
                Core Solutions
              </h2>
              <p className="text-on-surface-variant font-body-md">
                Tailored AI architectures designed to solve real-world
                complexities across diverse industry verticals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
              <div className="md:col-span-8 glass-card rounded-2xl overflow-hidden group relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                  alt="A modern educational setting featuring students interacting with holographic interfaces."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb4PvpP8MTPI3AlahIUaMPnjGML5NSTQ81M5_SHVrEihMTjazADGKqfMV33A-w4EkAEe3t7-R0EwJr-sbVi3fCeuldSkC4hsTeqSb0bDEqoIOgj2fmFlo-4-5M_LbgX4iJBYAcEdPF-JsW6KpNdD1hIXGADQrPyKa-lOLZUHkOvLGIW6cIF1exX4ZuzR0F-XIhsDc--w8yKFxEMW_S9HKETJ7TZIBBHzpTJNmYBOGY_a_aBacXLqNoEN3AmmjmcR8UYt0XM0OnD5i-"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
                  <span
                    className="material-symbols-outlined text-secondary mb-4 text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    school
                  </span>
                  <h3 className="text-headline-md font-headline-md text-primary">
                    AI for Education
                  </h3>
                  <p className="text-on-surface-variant max-w-md">
                    Next-gen platforms for universities, personalized JEE/NEET
                    assessment engines, and dedicated AI tutors for individual
                    growth.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    payments
                  </span>
                  <h3 className="text-headline-md font-headline-md">
                    Financial Markets
                  </h3>
                </div>
                <p className="text-surface-variant text-body-md">
                  High-frequency analytics, sentiment intelligence from news
                  cycles, and predictive market modeling for agile decisioning.
                </p>
              </div>
              <div className="md:col-span-4 glass-card rounded-2xl p-8 flex flex-col justify-between border-b-4 border-secondary">
                <div className="space-y-4">
                  <span
                    className="material-symbols-outlined text-secondary text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    record_voice_over
                  </span>
                  <h3 className="text-headline-md font-headline-md text-primary">
                    Conversational AI
                  </h3>
                </div>
                <p className="text-on-surface-variant text-body-md">
                  Human-like interactions across voice and text. Advanced voice
                  agents and multi-lingual speech analytics.
                </p>
              </div>
              <div className="md:col-span-8 glass-card rounded-2xl overflow-hidden group relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-500"
                  alt="Sophisticated corporate headquarters interior with digital overlays of data flow."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6xbxFlhJBWmQAtZvGvk4eeOKwiL0-7FnHRH_FAotiwP13j_PabY1iKfvGsTaqyI7t8z1fDJCcYMsbgJ1XJ0kgL_ykGWCoIVWgdMoBbjE1FCEgs51rGvb48fB0pmg4F1WksB3Aq5WpxDEhA7r3a-1baBrPd8-yiwaGuhnvoeSM82Gyi752gUKr55A4HEI0LKFWw1fyNqDs6DvfKCAC3gX7iNW6JSIOkmEeAoLRZEVZR1vJaEMK4gvWAYjJ-1kF_9m6hElfZK_bJ9nT"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
                  <span
                    className="material-symbols-outlined text-secondary mb-4 text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    business_center
                  </span>
                  <h3 className="text-headline-md font-headline-md text-primary">
                    Enterprise AI
                  </h3>
                  <p className="text-on-surface-variant max-w-md">
                    Operations automation, intelligent chatbots for BFSI, and
                    cognitive document processing for Healthcare compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="py-24 px-margin-desktop bg-primary relative overflow-hidden"
          id="why"
        >
          <div className="absolute inset-0 opacity-5 jaali-pattern"></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
              <div className="space-y-8">
                <h2 className="text-headline-lg font-headline-lg text-on-primary">
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary p-3 rounded-xl">
                      <span className="material-symbols-outlined text-on-secondary text-2xl">
                        architecture
                      </span>
                    </div>
                    <div>
                      <h4 className="text-on-primary font-bold text-lg">
                        Scalable Architecture
                      </h4>
                      <p className="text-surface-variant text-body-md mt-1">
                        Built to grow with your data, from pilot to production-grade
                        deployment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary p-3 rounded-xl">
                      <span className="material-symbols-outlined text-on-secondary text-2xl">
                        science
                      </span>
                    </div>
                    <div>
                      <h4 className="text-on-primary font-bold text-lg">
                        Research + Practicality
                      </h4>
                      <p className="text-surface-variant text-body-md mt-1">
                        We don&apos;t just innovate; we implement solutions that
                        deliver tangible ROI.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary p-3 rounded-xl">
                      <span className="material-symbols-outlined text-on-secondary text-2xl">
                        groups
                      </span>
                    </div>
                    <div>
                      <h4 className="text-on-primary font-bold text-lg">
                        Human-Centric AI
                      </h4>
                      <p className="text-surface-variant text-body-md mt-1">
                        Ethics-first approach, ensuring AI augments human
                        potential rather than replacing it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-secondary/10 rounded-3xl border border-white/10 p-12 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain drop-shadow-2xl"
                    alt="Artistic representation of an AI core as a brilliant multifaceted gemstone lotus."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmdZaY6hZQf6BWhIUwGxgQkIC6zoIJj0ShPF9_SPrYyTCt-PkO0agknJkFVMHqmNtRkNemvgxIqs_N-hHN5kPZCtokU4Osu4y9YXF6A-0vcJxaWR7G-wPAHJRy9MoBN0ujH-OsfnpRSiAcxVvD2PgSOsyfu8HSXHM6rCeXsZYJefv9QZPAR7_16Y6103J1Rz2uKwHE7R3uX6XapHgN8f1H42dn7YiucFxI9pXdtb_HvdROhMK5gSInj-8fI2karC1rn3E-n2G7PhwH"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Ticker */}
        <section className="py-16 px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto">
            <p className="text-center text-label-md text-on-surface-variant uppercase tracking-widest mb-12">
              Driven by World-Class Technology
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">code</span> Python
              </div>
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">api</span> PyTorch
              </div>
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">link</span> LangChain
              </div>
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">memory</span> Llama 3
              </div>
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">bolt</span> OpenAI
              </div>
              <div className="flex items-center gap-2 font-headline-md text-primary">
                <span className="material-symbols-outlined">cloud</span> AWS
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Final CTA */}
        <section className="py-24 px-margin-desktop text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/5 -skew-y-3 origin-right"></div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <div className="space-y-6">
              <span className="text-secondary font-label-md tracking-widest uppercase">
                Our Vision
              </span>
              <h2 className="text-display-lg font-display-lg text-primary leading-tight">
                &ldquo;To build intelligent AI systems that fundamentally improve how
                people learn, work, and communicate.&rdquo;
              </h2>
            </div>
            <div className="glass-card p-12 rounded-3xl border-2 border-secondary/20 shadow-2xl space-y-8">
              <h3 className="text-headline-lg font-headline-lg text-primary">
                Ready to Build with AI?
              </h3>
              <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
                Join pioneering organizations transforming their future with Bodha
                AI&apos;s intelligent solutions.
              </p>
              <button className="bg-primary text-on-primary px-12 py-5 rounded-xl font-headline-md hover:bg-secondary transition-all active:scale-95 cursor-pointer">
                Let&apos;s build the future together
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
