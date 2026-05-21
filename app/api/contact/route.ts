import { NextRequest, NextResponse } from "next/server";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const registration = String(body?.registration ?? "").trim();
  const message = String(body?.message ?? "").trim();
  const turnstileToken = String(body?.turnstileToken ?? "").trim();

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { message: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!turnstileToken) {
    return NextResponse.json(
      { message: "Please complete the security check." },
      { status: 400 },
    );
  }

  const secretKey =
    process.env.TURNSTILE_SECRET_KEY || process.env.TUNRSTILE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { message: "Turnstile secret key is not configured on the server." },
      { status: 500 },
    );
  }

  const verifyBody = new URLSearchParams();
  verifyBody.append("secret", secretKey);
  verifyBody.append("response", turnstileToken);
  verifyBody.append("remoteip", request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "");

  let verification: TurnstileVerifyResponse;
  try {
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: verifyBody,
      cache: "no-store",
    });
    verification = (await verifyResponse.json()) as TurnstileVerifyResponse;
  } catch {
    return NextResponse.json(
      { message: "Security verification failed. Please try again." },
      { status: 502 },
    );
  }

  if (!verification.success) {
    return NextResponse.json(
      { message: "Security check failed. Please try again." },
      { status: 400 },
    );
  }

  const netlifyPayload = new URLSearchParams({
    "form-name": "contact",
    name,
    phone,
    email,
    registration,
    message,
  });

  const baseUrl =
    process.env.URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.nextUrl.origin;

  try {
    const netlifyResponse = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: netlifyPayload.toString(),
      cache: "no-store",
    });

    if (!netlifyResponse.ok) {
      return NextResponse.json(
        { message: "Message could not be recorded right now. Please try again." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Message could not be recorded right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
