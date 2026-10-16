"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

type FormMessage = { kind: "error" | "success"; text: string } | null;

interface ApiResponse {
  message?: string;
}

async function readApiResponse(response: Response): Promise<ApiResponse> {
  try {
    return (await response.json()) as ApiResponse;
  } catch {
    return {};
  }
}

export default function LoginPanel() {
  const [mode, setMode] = useState<"login" | "reset">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<FormMessage>(null);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await readApiResponse(response);

      if (!response.ok) {
        setMessage({
          kind: "error",
          text: result.message ?? "We could not sign you in. Please try again.",
        });
        return;
      }

      window.location.assign("/operations/service-agreement");
    } catch {
      setMessage({
        kind: "error",
        text: "Sign-in is temporarily unavailable. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  async function handlePasswordReset(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await readApiResponse(response);

      if (!response.ok) {
        setMessage({
          kind: "error",
          text: result.message ?? "We could not send the reset email. Please try again.",
        });
        return;
      }

      setMessage({
        kind: "success",
        text:
          result.message ??
          "If an account exists for that email, a password reset link is on its way.",
      });
    } catch {
      setMessage({
        kind: "error",
        text: "Password reset is temporarily unavailable. Please try again.",
      });
    } finally {
      setBusy(false);
    }
  }

  function openResetForm() {
    setMode("reset");
    setMessage(null);
  }

  function returnToLogin() {
    setMode("login");
    setMessage(null);
  }

  return (
    <main className="auth-screen">
      <div className="auth-frame">
        <section className="auth-form-panel" aria-labelledby="auth-title">
          <div className="auth-brand">
            <Image
              src="/Logo.png"
              alt="Restore Health Services"
              width={56}
              height={56}
              priority
              className="auth-brand-logo"
            />
            <div>
              <p className="auth-brand-name">Restore Health</p>
              <p className="auth-brand-caption">Services</p>
            </div>
          </div>

          <div className="auth-form-content">
            <div className="auth-security-label">
              <span className="auth-security-dot" aria-hidden="true" />
              Secure staff access
            </div>

            <div className="auth-heading-block">
              <p className="auth-eyebrow">
                {mode === "login" ? "Your workspace" : "Account recovery"}
              </p>
              <h1 id="auth-title">
                {mode === "login" ? "Welcome back" : "Reset your password"}
              </h1>
              <p className="auth-subheading">
                {mode === "login"
                  ? "Sign in to continue to your service agreement workspace."
                  : "Enter your work email and we’ll send a secure reset link."}
              </p>
            </div>

            <form
              className="auth-form"
              onSubmit={mode === "login" ? handleLogin : handlePasswordReset}
            >
              <label className="auth-field" htmlFor="auth-email">
                <span>Email address</span>
                <span className="auth-input-wrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="auth-input-icon"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                    <path d="m4.5 7 7.5 5.5L19.5 7" />
                  </svg>
                  <input
                    id="auth-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    maxLength={254}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </span>
              </label>

              {mode === "login" ? (
                <div className="auth-field">
                  <span className="auth-label-row">
                    <label htmlFor="auth-password">Password</label>
                    <button
                      className="auth-text-button"
                      type="button"
                      onClick={openResetForm}
                    >
                      Forgot password?
                    </button>
                  </span>
                  <span className="auth-input-wrap">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="auth-input-icon"
                    >
                      <rect x="4.5" y="10" width="15" height="10" rx="2.5" />
                      <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2" />
                    </svg>
                    <input
                      id="auth-password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      maxLength={4096}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                    <button
                      className="auth-password-toggle"
                      type="button"
                      onClick={() => setPasswordVisible((visible) => !visible)}
                      aria-label={passwordVisible ? "Hide password" : "Show password"}
                      aria-pressed={passwordVisible}
                    >
                      {passwordVisible ? (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                          <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5.2 0 8.8 5.1 9.5 6.3a1.3 1.3 0 0 1 0 1.4 15 15 0 0 1-3.1 3.6M6.2 6.2a16.2 16.2 0 0 0-3.7 5.1 1.3 1.3 0 0 0 0 1.4C3.2 14 6.8 19 12 19a9.8 9.8 0 0 0 3-.5" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                          <circle cx="12" cy="12" r="2.5" />
                        </svg>
                      )}
                    </button>
                  </span>
                </div>
              ) : null}

              {message ? (
                <div
                  className={`auth-message auth-message-${message.kind}`}
                  role={message.kind === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  <span className="auth-message-icon" aria-hidden="true">
                    {message.kind === "success" ? "✓" : "!"}
                  </span>
                  <span>{message.text}</span>
                </div>
              ) : null}

              <button className="auth-submit" type="submit" disabled={busy}>
                {busy ? (
                  <>
                    <span className="auth-spinner" aria-hidden="true" />
                    {mode === "login" ? "Signing in" : "Sending link"}
                  </>
                ) : (
                  <>
                    {mode === "login" ? "Sign in to workspace" : "Send reset link"}
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>

              {mode === "reset" ? (
                <button
                  className="auth-back-button"
                  type="button"
                  onClick={returnToLogin}
                  disabled={busy}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M19 12H5m6 6-6-6 6-6" />
                  </svg>
                  Back to sign in
                </button>
              ) : null}
            </form>

            {mode === "login" ? (
              <div className="auth-access-note">
                <span className="auth-note-lock" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7.5a4 4 0 1 1 8 0V10m-4 4v2" />
                  </svg>
                </span>
                <span>
                  Access is managed by your administrator. There is no public sign-up.
                </span>
              </div>
            ) : null}
          </div>

          <p className="auth-footer">Restore Health Services · Secure team workspace</p>
        </section>

        <aside className="auth-story-panel" aria-label="Workspace information">
          <div className="auth-story-orb auth-story-orb-one" aria-hidden="true" />
          <div className="auth-story-orb auth-story-orb-two" aria-hidden="true" />
          <div className="auth-story-topline">
            <span className="auth-story-emblem" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3 19 6v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <span>RHS · SECURE WORKSPACE</span>
          </div>

          <div className="auth-story-copy">
            <div className="auth-story-kicker">
              <span /> SERVICE AGREEMENT OPERATIONS
            </div>
            <h2>
              Clarity in every
              <br />
              <em>agreement.</em>
            </h2>
            <p>
              A considered, secure space for your team to prepare service agreements
              with care and confidence.
            </p>

            <div className="auth-feature-list">
              <div className="auth-feature-item">
                <span className="auth-feature-check" aria-hidden="true">✓</span>
                <span>Private access for your team</span>
              </div>
              <div className="auth-feature-item">
                <span className="auth-feature-check" aria-hidden="true">✓</span>
                <span>One clear workflow, from details to document</span>
              </div>
              <div className="auth-feature-item">
                <span className="auth-feature-check" aria-hidden="true">✓</span>
                <span>Validated before every export</span>
              </div>
            </div>
          </div>

          <div className="auth-preview-card" aria-hidden="true">
            <div className="auth-preview-paper">
              <div className="auth-preview-paper-head">
                <span className="auth-preview-paper-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M7 3.5h7l4.5 4.5v12.5H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
                    <path d="M14 3.5V9h4.5M8 13h8M8 16.5h5" />
                  </svg>
                </span>
                <span className="auth-preview-tag">READY TO REVIEW</span>
              </div>
              <div className="auth-preview-line auth-preview-line-strong" />
              <div className="auth-preview-line auth-preview-line-long" />
              <div className="auth-preview-line auth-preview-line-mid" />
              <div className="auth-preview-rule" />
              <div className="auth-preview-bottom">
                <span className="auth-preview-signature" />
                <span className="auth-preview-verified">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m6 12 4 4 8-8" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="auth-preview-caption">
              <span className="auth-caption-pulse" />
              <span>Every detail, in its right place</span>
              <span className="auth-caption-sparkle" aria-hidden="true">✳</span>
            </div>
          </div>

          <div className="auth-story-bottom">
            <span>TRUSTED CARE. CLEAR AGREEMENTS.</span>
            <span className="auth-story-stars" aria-hidden="true">✳ &nbsp; ✳ &nbsp; ✳</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
