import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[var(--green)] font-mono text-lg mb-4">404</h1>
      <h2 className="text-4xl sm:text-5xl font-bold text-[var(--lightest-slate)] mb-4">
        Page Not Found
      </h2>
      <p className="text-[var(--slate)] mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--green)] text-[var(--green)] 
                 hover:bg-[var(--green)]/10 transition-colors duration-200 font-mono text-sm rounded-sm"
      >
        Go Home
      </Link>
    </main>
  );
}

