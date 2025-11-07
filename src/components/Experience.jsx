export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Company",
      period: "2021 – Sekarang",
      bullets: [
        "Merancang dan membangun microservices menggunakan NestJS dan Golang, di-deploy dalam Docker.",
        "Mengoptimalkan query dan indexing pada MySQL & MongoDB yang menurunkan p95 latency hingga 40%.",
        "Mengimplementasikan Redis untuk caching dan queue, meningkatkan throughput event-driven pipeline.",
      ],
    },
    {
      role: "Backend Engineer",
      company: "Digital Product House",
      period: "2018 – 2021",
      bullets: [
        "Membangun API Laravel berskala besar dengan arsitektur modular dan pengujian menyeluruh.",
        "Mendesain skema database dan migrasi untuk aplikasi transaksi bertrafik tinggi.",
        "Membuat pipeline CI/CD dan containerization untuk staging & production.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6">
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Pengalaman Kerja</h2>
        <div className="mt-5 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                </div>
                <p className="text-sm text-zinc-500">{exp.period}</p>
              </div>
              <ul className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-disc list-inside">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
