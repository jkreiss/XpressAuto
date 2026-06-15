"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Script from "next/script";
import { FormEvent, useEffect, useRef, useState } from "react";

const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";

type ContactSectionProps = {
  variant?: "full" | "compact";
  background?: "default" | "tinted";
  heading?: string;
};

export function Contact({ variant = "full", background = "default", heading }: ContactSectionProps) {
  const compact = variant === "compact";
  const sectionBackgroundClass = background === "tinted" ? "bg-muted" : "bg-background";
  const contactHeading = heading ?? (compact ? "Need help with your vehicle?" : "Ready to schedule an appointment?");
  const formName = "contact";
  const configuredSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const [siteKey, setSiteKey] = useState(configuredSiteKey);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const [turnstileScriptError, setTurnstileScriptError] = useState(false);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const [turnstileRenderError, setTurnstileRenderError] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const currentHostname = window.location.hostname;
    const useLocalTestKey =
      currentHostname === "localhost" || currentHostname === "127.0.0.1" || currentHostname === "0.0.0.0";
    setSiteKey(useLocalTestKey ? TURNSTILE_TEST_SITE_KEY : configuredSiteKey);
  }, [configuredSiteKey]);

  useEffect(() => {
    if (!turnstileScriptReady || !siteKey || !turnstileContainerRef.current) {
      return;
    }

    let cancelled = false;
    let attempts = 0;
    let retryTimeout: number | null = null;

    const renderWidget = () => {
      if (cancelled) {
        return;
      }

      if (!window.turnstile?.render) {
        attempts += 1;
        if (attempts >= 20) {
          setTurnstileRenderError("[TS_WIDGET_API_MISSING] Turnstile API loaded but did not initialize.");
          return;
        }

        retryTimeout = window.setTimeout(renderWidget, 250);
        return;
      }

      if (turnstileWidgetIdRef.current && window.turnstile.remove) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }

      setTurnstileRenderError("");
      turnstileContainerRef.current!.innerHTML = "";

      try {
        const widgetId = window.turnstile.render(turnstileContainerRef.current!, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
            setTurnstileRenderError("");
            setSubmitState("idle");
            setSubmitMessage("");
          },
          "expired-callback": () => {
            setTurnstileToken("");
          },
          "error-callback": (errorCode?: string) => {
            setTurnstileToken("");
            const hostname = window.location.hostname;
            const localhostMessage =
              hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0"
                ? " Localhost is using Cloudflare test credentials automatically."
                : "";
            const codeMessage = errorCode ? ` [CF ${errorCode}]` : "";
            setTurnstileRenderError(
              `[TS_WIDGET_ERROR] Turnstile widget failed to initialize.${codeMessage}${localhostMessage}`,
            );
          },
        });

        if (!widgetId) {
          setTurnstileRenderError("[TS_WIDGET_ERROR] Turnstile did not return a widget id.");
          return;
        }

        turnstileWidgetIdRef.current = widgetId;
      } catch {
        setTurnstileToken("");
        setTurnstileRenderError("[TS_WIDGET_ERROR] Turnstile render threw before the widget mounted.");
      }
    };

    renderWidget();

    return () => {
      cancelled = true;
      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }
      if (turnstileWidgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [siteKey, turnstileScriptReady]);

  function resetTurnstile() {
    setTurnstileToken("");
    if (turnstileWidgetIdRef.current && window.turnstile?.reset) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get("bot-field");
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return;
    }

    const nextFieldErrors: Record<string, string> = {};
    if (!values.name) nextFieldErrors.name = "Please enter your full name.";
    if (!values.phone) nextFieldErrors.phone = "Please enter your phone number.";
    if (!values.email) nextFieldErrors.email = "Please enter your email address.";
    if (!values.message) nextFieldErrors.message = "Please enter your message.";

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setSubmitState("error");
      setSubmitMessage("Please fill out all required fields.");
      return;
    }

    setFieldErrors({});

    const tokenFromForm = String(formData.get("cf-turnstile-response") ?? "").trim();
    const token = tokenFromForm || turnstileToken;
    if (!siteKey) {
      setSubmitState("error");
      setSubmitMessage("[TS_SITEKEY_MISSING] NEXT_PUBLIC_TURNSTILE_SITE_KEY is missing in the client build.");
      return;
    }

    if (turnstileScriptError || !turnstileScriptReady) {
      setSubmitState("error");
      setSubmitMessage("[TS_SCRIPT_NOT_READY] Turnstile script did not load. Disable content blockers and retry.");
      return;
    }

    if (turnstileRenderError) {
      setSubmitState("error");
      setSubmitMessage(turnstileRenderError);
      return;
    }

    if (!token) {
      setSubmitState("error");
      setSubmitMessage("[TS_NO_TOKEN] Turnstile token missing. Complete the challenge before submitting.");
      return;
    }

    setSubmitState("submitting");
    setSubmitMessage("");

    let verifyResponse: Response;
    try {
      verifyResponse = await fetch("/api/contact/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
    } catch {
      setSubmitState("error");
      setSubmitMessage("[TS_VERIFY_FETCH_FAIL] Verify request failed before server (network/CSP/ad-block).");
      return;
    }

    if (!verifyResponse.ok) {
      resetTurnstile();
      const errorData = (await verifyResponse.json().catch(() => null)) as {
        error?: string;
        codes?: string[];
      } | null;
      const rawBody = errorData ? "" : await verifyResponse.text().catch(() => "");
      const errorCodes = errorData?.codes?.length ? ` (${errorData.codes.join(", ")})` : "";
      const errorReason = errorData?.error ? ` ${errorData.error}.` : "";
      const statusReason = ` [HTTP ${verifyResponse.status}]`;
      const bodyReason = rawBody ? ` ${rawBody.slice(0, 140)}.` : "";
      setSubmitState("error");
      setSubmitMessage(`[TS_VERIFY_REJECTED] Turnstile verify failed.${errorCodes}${errorReason}${statusReason}${bodyReason}`);
      return;
    }

    const payload = new URLSearchParams();
    payload.append("form-name", formName);
    payload.append("name", String(formData.get("name") ?? ""));
    payload.append("phone", String(formData.get("phone") ?? ""));
    payload.append("email", String(formData.get("email") ?? ""));
    payload.append("registration", String(formData.get("registration") ?? ""));
    payload.append("message", String(formData.get("message") ?? ""));
    payload.append("bot-field", String(formData.get("bot-field") ?? ""));

    const netlifyResponse = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
    });

    if (!netlifyResponse.ok) {
      resetTurnstile();
      setSubmitState("error");
      setSubmitMessage(`[NETLIFY_FORM_POST_FAIL] Form submit failed [HTTP ${netlifyResponse.status}].`);
      return;
    }

    setSubmitState("success");
    setSubmitMessage("");
    resetTurnstile();
    form.reset();
  }

  return (
    <section id="contact" className={`py-16 md:py-20 ${sectionBackgroundClass} relative overflow-hidden`}>
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => {
            setTurnstileScriptReady(true);
            setTurnstileScriptError(false);
          }}
          onError={() => {
            setTurnstileScriptReady(false);
            setTurnstileScriptError(true);
          }}
        />
      )}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-card to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="lg:hidden mb-8 md:mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Get In Touch</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 md:mb-8 leading-[1.1] break-words">
            {contactHeading}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Contact us today for a free quote or to book your next appointment.
            {!compact && " Only in town for a few days? We've got you covered."}
          </p>
        </div>

        <div className={`grid ${compact ? "lg:grid-cols-2" : "lg:grid-cols-2"} gap-8 sm:gap-10 md:gap-14 lg:gap-24`}>
          <div className="order-2 lg:order-1">
            <div className="hidden lg:flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-primary"></div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Get In Touch</h2>
            </div>
            <h3 className="hidden lg:block text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 md:mb-8 leading-[1.1] break-words">
              {contactHeading}
            </h3>
            <p className="hidden lg:block text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 font-medium leading-relaxed">
              Contact us today for a free quote or to book your next appointment.
              {!compact && " Only in town for a few days? We've got you covered."}
            </p>

            <div className={`grid ${compact ? "sm:grid-cols-1" : "sm:grid-cols-2"} gap-6 md:gap-8`}>
              <a
                href="tel:+64210774907"
                className="group flex min-w-0 items-start gap-4 rounded-xl p-2 -m-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary transition-all group-hover:bg-primary/15 group-hover:border-primary/40">
                  <Phone className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide transition-colors group-hover:text-primary">Phone</h4>
                  <span className="block text-lg font-medium transition-colors group-hover:text-primary">
                    0210 774 907
                  </span>
                </div>
              </a>

              <a
                href="mailto:xpress_autos@hotmail.com"
                className="group flex min-w-0 items-start gap-4 rounded-xl p-2 -m-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary transition-all group-hover:bg-primary/15 group-hover:border-primary/40">
                  <Mail className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide transition-colors group-hover:text-primary">Email</h4>
                  <span className="block text-base sm:text-lg font-medium transition-colors group-hover:text-primary">
                    xpress_autos@hotmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=9+Seddon+Street,+Raetihi+4632,+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-start gap-4 rounded-xl p-2 -m-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary transition-all group-hover:bg-primary/15 group-hover:border-primary/40">
                  <MapPin className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide transition-colors group-hover:text-primary">Location</h4>
                  <span className="block text-lg font-medium leading-relaxed transition-colors group-hover:text-primary">
                    9 Seddon Street
                    <br />
                    Raetihi 4632
                  </span>
                </div>
              </a>

              {!compact && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">Hours</h4>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                      Monday - Thursday:
                      <br />
                      7:30 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              )}
            </div>
            {!compact && (
              <div className="hidden lg:block mt-8 md:mt-10">
                <h3 className="text-2xl font-black text-foreground mb-4">Find Us in Raetihi</h3>
                <div className="w-full h-[320px] rounded-3xl border border-border bg-card/60 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.933513642349!2d175.2798419195626!3d-39.4271312675592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ae9ce9893be55%3A0x144abed91d20a33a!2sXpress%20Automotive!5e0!3m2!1sen!2snz!4v1774574421520!5m2!1sen!2snz"
                    width="800"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Xpress Automotive map"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="order-1 lg:order-2 bg-card p-5 sm:p-8 md:p-12 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(closest-side,var(--color-primary)_0%,transparent_100%)] opacity-10 -z-10 translate-x-1/3 -translate-y-1/3" />
            <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-6 sm:mb-8">
              {submitState === "success" ? "Message received" : "Send us a message"}
            </h3>

            {submitState === "success" ? (
              <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-60 text-center sm:px-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-black">
                  ✓
                </div>
                <p className="max-w-md text-base font-medium text-foreground sm:text-lg">
                  Thank you we have received your message and will get back to you as soon as we can
                </p>
              </div>
            ) : (
              <form
                className="space-y-6 relative z-10"
                name={formName}
                method="POST"
                action="/__forms.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="space-y-2">
                  <label htmlFor={`${variant}-name`} className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Full Name</label>
                  <input
                    type="text"
                    id={`${variant}-name`}
                    name="name"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && <p className="text-sm text-destructive">{fieldErrors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor={`${variant}-phone`} className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    id={`${variant}-phone`}
                    name="phone"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                    placeholder="021 123 4567"
                  />
                  {fieldErrors.phone && <p className="text-sm text-destructive">{fieldErrors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor={`${variant}-email`} className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Email Address</label>
                  <input
                    type="email"
                    id={`${variant}-email`}
                    name="email"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                  {fieldErrors.email && <p className="text-sm text-destructive">{fieldErrors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor={`${variant}-registration`} className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Registration Number</label>
                  <input
                    type="text"
                    id={`${variant}-registration`}
                    name="registration"
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                    placeholder="ABC123"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor={`${variant}-message`} className="text-sm font-bold tracking-wide text-foreground/80 uppercase">Message</label>
                  <textarea
                    id={`${variant}-message`}
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none shadow-inner"
                    placeholder="How can we help you?"
                  />
                  {fieldErrors.message && <p className="text-sm text-destructive">{fieldErrors.message}</p>}
                </div>

                {siteKey ? (
                  <>
                    <div ref={turnstileContainerRef} className="min-h-[70px]" />
                    {turnstileRenderError && <p className="text-sm text-destructive">{turnstileRenderError}</p>}
                  </>
                ) : (
                  <p className="text-sm text-destructive">[TS_SITEKEY_MISSING] Turnstile site key is missing.</p>
                )}

                {submitMessage && <p className="text-sm text-destructive">{submitMessage}</p>}

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full bg-primary text-primary-foreground font-black text-lg rounded-xl px-6 py-5 hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 mt-4"
                >
                  {submitState === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {!compact && (
          <div className="lg:hidden mt-8 md:mt-10">
            <h3 className="text-2xl font-black text-foreground mb-4">Find Us in Raetihi</h3>
            <div className="w-full h-[260px] sm:h-[320px] rounded-3xl border border-border bg-card/60 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1540.933513642349!2d175.2798419195626!3d-39.4271312675592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ae9ce9893be55%3A0x144abed91d20a33a!2sXpress%20Automotive!5e0!3m2!1sen!2snz!4v1774574421520!5m2!1sen!2snz"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Xpress Automotive map"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: (errorCode?: string) => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}
