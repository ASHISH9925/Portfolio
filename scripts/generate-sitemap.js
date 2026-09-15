import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import NAV_ITEMS from "../src/data/navigation.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOSTNAME = "https://ashishcodes.com";
const OUTPUT_PATH = resolve(__dirname, "../public/sitemap.xml");

async function generate() {
  try {
    const sitemap = new SitemapStream({ hostname: HOSTNAME });

    // Priorities and change frequencies per page
    const priorities = {
      home: 1.0,
      projects: 0.9,
      about: 0.8,
      certifications: 0.8,
      awards: 0.7,
      badges: 0.7,
      contact: 0.7,
    };

    NAV_ITEMS.forEach((item) => {
      sitemap.write({
        url: item.path,
        changefreq: item.key === "home" || item.key === "projects" ? "weekly" : "monthly",
        priority: priorities[item.key] ?? 0.7,
        lastmod: new Date().toISOString().split("T")[0],
      });
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);
    writeFileSync(OUTPUT_PATH, data.toString());
    console.log(`✅ Sitemap successfully generated at: ${OUTPUT_PATH}`);
  } catch (err) {
    console.error("❌ Failed to generate sitemap:", err);
    process.exit(1);
  }
}

generate();
