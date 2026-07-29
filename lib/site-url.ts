const LOCAL_SITE_URL = "http://localhost:3000";
const PROD_FALLBACK_URL = "https://xpressautomotive.co.nz";

function normalizeSiteUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    process.env.VERCEL_URL;

  if (envUrl) {
    return normalizeSiteUrl(envUrl);
  }

  return process.env.NODE_ENV === "production" ? PROD_FALLBACK_URL : LOCAL_SITE_URL;
}
