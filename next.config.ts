import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/service-agreement/generate-pdf": [
      "./templates/Service Agreement V10.docx",
    ],
    "/api/service-agreement/generate-docx": [
      "./templates/Service Agreement V10.docx",
    ],
  },
};

export default nextConfig;
