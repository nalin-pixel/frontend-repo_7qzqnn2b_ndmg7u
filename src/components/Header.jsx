import { User, MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-10 pb-6">
      <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-md">
            <User className="h-10 w-10" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Reynaldi Aznan
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Senior Software Engineer • PHP, JavaScript/TypeScript, Golang
            </p>
            <p className="mt-1 inline-flex items-center gap-1 text-sm text-zinc-500">
              <MapPin className="h-4 w-4" /> Open to remote & onsite opportunities
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
