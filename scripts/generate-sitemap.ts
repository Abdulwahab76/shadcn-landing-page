import fs from "fs";
import path from "path";
import { client } from "@/lib/contentful";


const getBlogEntries = async (): Promise<any> => {
    const entries = await client.getEntries({ content_type: "blogs" });
    return entries;
};
const generateSitemap = async () => {
    const siteUrl = "https://cyfertechsolutions.vercel.app";
    const blogs = await getBlogEntries();

    const blogUrls = blogs.items
        .map((post: any) => `
      <url>
        <loc>${siteUrl}/blog/${post.fields.slug}</loc>
        <lastmod>${new Date(post.fields.date).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `)
        .join("");

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogUrls}
  </urlset>`;

    fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemapContent);
    console.log("✅ Dynamic Sitemap Generated!");
};

generateSitemap();
