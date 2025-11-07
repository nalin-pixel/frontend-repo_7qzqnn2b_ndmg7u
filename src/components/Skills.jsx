import { Server, Database, Boxes, Code } from "lucide-react";

const skills = [
  {
    title: "Backend & API",
    icon: Server,
    items: ["PHP • Laravel", "Node.js • NestJS", "Golang", "REST • GraphQL"],
  },
  {
    title: "Frontend",
    icon: Code,
    items: ["React.js • Next.js", "Vue.js • Nuxt.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data & Caching",
    icon: Database,
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: Boxes,
    items: ["Docker", "CI/CD", "Git", "Testing & Observability"],
  },
];

export default function Skills() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6">
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Keahlian Utama</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-indigo-500" />
                <h3 className="font-medium">{title}</h3>
              </div>
              <ul className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
