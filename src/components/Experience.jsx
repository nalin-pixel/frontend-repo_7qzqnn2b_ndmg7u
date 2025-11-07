export default function Experience() {
  const experiences = [
    {
      role: "Programmer Senior",
      company: "Digitaloxi",
      period: "Januari 2025 – Sekarang",
      bullets: [
        "Pengembangan aplikasi Early Warning System (EWS) untuk monitoring sensor suhu pada R, S, dan T (Busbar & Terminating).",
        "Menyediakan pemantauan suhu real-time dan peringatan dini untuk mencegah gangguan/kegagalan sistem kelistrikan.",
        "Implementasi arsitektur terukur dengan integrasi ke infrastruktur PT. DECO INTERNUSA CERMELANG, saat ini digunakan oleh PT. PLN.",
      ],
    },
    {
      role: "Programmer Senior",
      company: "Masjidpedia Inovasi Bersama",
      period: "November 2023 – Sekarang",
      bullets: [
        "Pengembangan aplikasi Masjidpedia dengan fokus pada skalabilitas, stabilitas, dan pengalaman pengguna.",
        "Membangun service backend dan integrasi data untuk modul inti (jadwal, manajemen konten, donasi).",
      ],
    },
    {
      role: "Programmer Senior",
      company: "Riaukurir",
      period: "April 2022 – Oktober 2023",
      bullets: [
        "Membangun aplikasi Riaukurir berbasis web dan mobile untuk mendukung proses operasional pengiriman.",
        "Perancangan API dan integrasi sistem pelacakan, autentikasi, dan manajemen order.",
      ],
    },
    {
      role: "Magang",
      company: "Diskominfo",
      period: "Maret 2017 – Juli 2017",
      bullets: [
        "Membangun sistem portal berita beserta Content Management System (CMS) menggunakan PHP 5.6.",
        "Fitur meliputi manajemen artikel, kategori, dan pengguna, serta kontrol tampilan dan fungsionalitas portal.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6">
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Pengalaman Kerja</h2>
        <div className="mt-5 space-y-6">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
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
