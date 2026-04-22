import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shourya Khanna" },
      { name: "description", content: "Get in touch with Shourya Khanna for collaborations, projects, and opportunities." },
      { property: "og:title", content: "Contact — Shourya Khanna" },
      { property: "og:description", content: "Let's connect — collaborations, projects, and opportunities." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@shourya.dev", href: "mailto:hello@shourya.dev", desc: "Get in touch via email" },
  { icon: Linkedin, label: "LinkedIn", value: "shourya-khanna", href: "https://linkedin.com", desc: "Connect with me professionally" },
  { icon: Github, label: "GitHub", value: "shouryakhanna", href: "https://github.com", desc: "Check out my code on GitHub" },
];

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Say hello</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">Let's connect.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          I'm always interested in hearing about new projects and opportunities.
          Drop a line — I'll get back to you within a day or two.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group p-7 rounded-3xl bg-card border border-border/60 hover:border-foreground/40 transition shadow-[var(--shadow-card)]"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{c.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-4 text-foreground font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {c.value} <ArrowRight className="h-4 w-4" />
              </p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}