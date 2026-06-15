import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-violet-500 font-mono font-bold text-sm mb-4">404</p>
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-slate-400 mb-10 max-w-sm">
        This page doesn&apos;t exist or has moved. Head back to browse events.
      </p>
      <Link
        href="/"
        className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
