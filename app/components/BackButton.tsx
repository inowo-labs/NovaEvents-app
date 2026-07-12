"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 mb-8"
    >
      ← {label}
    </button>
  );
}
