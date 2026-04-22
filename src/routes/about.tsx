import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portfolio/Layout";
import { Target, Code2, GraduationCap, Users } from "lucide-react";
import nehaPhoto from "@/assets/neha-photo.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neha Mary Pramod" },
      { name: "description", content: "Get to know Neha Mary Pramod — a passionate full-stack developer focused on intuitive, impactful digital experiences." },
      { property: "og:title", content: "About — Neha Mary Pramod" },
      { property: "og:description", content: "Get to know Neha Mary Pramod — passionate full-stack developer." },
    ],
  }),
  component: AboutPage,
});

const traits = [
  { icon: Target, title: "Problem Solver", desc: "Focused on building high-quality, scalable web applications." },
  { icon: Code2, title: "Full Stack Developer", desc: "Expert in modern frontend and backend development." },
  { icon: GraduationCap, title: "Continuous Learner", desc: "Always eager to learn new technologies and best practices." },
  { icon: Users, title: "Team Player", desc: "Love collaborating with teams to create amazing products." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">About</p>
        <h1 className="mt-2 text-5xl md:text-6xl font-display">Get to know me better.</h1>

        <div className="mt-12 grid md:grid-cols-[300px_1fr] gap-10 items-start">
          {/* ID Card */}
          <div className="relative mx-auto w-[280px]">
            {/* Lanyard */}
            <div className="mx-auto h-10 w-1.5 bg-foreground/70 rounded-b-sm" aria-hidden />
            <div className="mx-auto -mt-1 h-3 w-10 rounded-md bg-foreground/80 shadow-sm" aria-hidden />
            {/* Card body */}
            <div className="mt-2 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-soft)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-foreground text-background">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Portfolio · 2026</span>
                <span className="text-[10px] font-mono opacity-80">ID 026</span>
              </div>
              <div className="p-3">
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-secondary">
                  <img
                    src={nehaPhoto}
                    alt="Neha Mary Pramod portrait"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Name</p>
                  <p className="font-display text-lg leading-tight">Neha Mary Pramod</p>
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">Role</p>
                  <p className="text-sm">Full Stack Developer</p>
                </div>
                <div className="mt-3 mx-1 h-6 rounded bg-[repeating-linear-gradient(90deg,theme(colors.foreground)_0_2px,transparent_2px_5px)] opacity-80" aria-hidden />
              </div>
            </div>
          </div>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack web developer with a strong interest in
              creating intuitive and impactful digital experiences. I thrive on
              building applications that are not only visually appealing but also
              efficient and user-friendly.
            </p>
            <p>
              My journey in web development began with curiosity and has grown
              into a commitment to continuous learning. I stay updated with the
              latest technologies and best practices in the ever-evolving tech
              landscape.
            </p>
            <p>
              Beyond code, I'm driven by collaboration, knowledge sharing, and
              tackling challenges that push me to grow both technically and
              creatively.
            </p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traits.map((t) => (
            <div key={t.title} className="p-6 rounded-2xl bg-card border border-border/60 shadow-[var(--shadow-card)]">
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                <t.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-4 font-display text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}