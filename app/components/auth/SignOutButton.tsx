"use client";

import { useState } from "react";

export default function SignOutButton({ compact = false }: { compact?: boolean }) {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const buttonTone = compact
    ? "border-emerald-200 bg-white text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50"
    : "border-white/20 bg-white/[0.07] text-white/90 hover:border-white/35 hover:bg-white/[0.13]";

  async function signOut() {
    if (busy) return;
    setBusy(true);
    setFailed(false);

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "{}",
      });

      if (response.ok) {
        window.location.assign("/login");
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1.5">
      <button
        type="button"
        onClick={signOut}
        disabled={busy}
        className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition disabled:cursor-wait disabled:opacity-60 ${buttonTone} ${compact ? "w-full sm:w-auto" : ""}`}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
          <path d="M10 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H10M14 8l4 4-4 4m4-4H9" />
        </svg>
        {busy ? "Signing out…" : "Sign out"}
      </button>
      {failed ? (
        <span
          className={`text-[10px] font-medium ${compact ? "text-rose-700" : "text-rose-100"}`}
          role="alert"
        >
          Could not sign out. Please retry.
        </span>
      ) : null}
    </div>
  );
}
