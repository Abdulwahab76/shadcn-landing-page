import { NextResponse } from "next/server";
import { client } from "@/lib/contentful";

const getBlogEntries = async (): Promise<any> => {
  const entries = await client.getEntries({ content_type: "blogs" });
  return entries;
};

export async function GET() {
  const blogs = await getBlogEntries();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogs.items
      .map(
        (post: any) => `
      <url>
        <loc>https://cyfertechsolutions.vercel.app/blogs/${post.fields.slug}</loc>
        <lastmod>${new Date(post.fields.date).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
