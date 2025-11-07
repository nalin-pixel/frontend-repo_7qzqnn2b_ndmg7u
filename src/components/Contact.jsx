import { Linkedin, Mail, Globe, Github } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/reynaldi-aznan",
      value: "linkedin.com/in/reynaldi-aznan",
    },
    { label: "GitHub", icon: Github, href: "https://github.com/reynaldiaznan", value: "github.com/reynaldiaznan" },
    { label: "Website / Portofolio", icon: Globe, href: "https://reynaldi.dev", value: "reynaldi.dev" },
    { label: "Email", icon: Mail, href: "mailto:hello@reynaldi.dev", value: "hello@reynaldi.dev" },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 pb-16">
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Kontak & Media Sosial</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map(({ label, icon: Icon, href, value }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950 hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
