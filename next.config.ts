import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY:
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
      process.env.TURNSTILE_SITE_KEY ??
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KE,
  },
};

export default nextConfig;
