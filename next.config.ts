import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No config needed to protect ANTHROPIC_API_KEY — in App Router, any env var
  // without a NEXT_PUBLIC_ prefix is automatically excluded from client bundles.
};

export default nextConfig;
