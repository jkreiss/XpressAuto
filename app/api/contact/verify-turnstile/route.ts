import { NextRequest, NextResponse } from "next/server";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  if (!token || typeof token !== "string") {
    return NextResponse.json({ ok: false, error: "Missing token" }, { status: 400 });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY ?? "";

  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Missing Turnstile secret (TURNSTILE_SECRET_KEY)" },
      { status: 500 },
    );
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  let verifyResponse: Response;
  try {
    verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach Cloudflare Turnstile verify endpoint" },
      { status: 502 },
    );
  }

  if (!verifyResponse.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: `Verification request failed with status ${verifyResponse.status}`,
      },
      { status: 502 },
    );
  }

  const result = (await verifyResponse.json()) as TurnstileResponse;
  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid Turnstile token",
        codes: result["error-codes"] ?? [],
      },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
