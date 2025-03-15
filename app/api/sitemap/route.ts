import { NextResponse } from "next/server";
import { client } from "@/lib/contentful";

const getBlogEntries = async (): Promise<any> => {
  const entries = await client.getEntries({ content_type: "blogs" });
  return entries;
};

export async function GET() {
  const blogs = await getBlogEntries();

  const staticPages = [
    { loc: 'https://cyfertechsolution.netlify.app/', priority: '1.0', changefreq: 'daily' },
    { loc: 'https://cyfertechsolution.netlify.app/#about', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://cyfertechsolution.netlify.app/#services', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://cyfertechsolution.netlify.app/#contact', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://cyfertechsolution.netlify.app/#faqs', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://cyfertechsolution.netlify.app/privacy-policy', priority: '0.8', changefreq: 'yearly' },
    { loc: 'https://cyfertechsolution.netlify.app/terms-of-service', priority: '0.8', changefreq: 'yearly' },
    { loc: 'https://cyfertechsolution.netlify.app/blogs', priority: '0.8', changefreq: 'weekly' },
  ];

  // Adding dynamic blog pages to the sitemap
  const blogUrls = blogs.items.map(
    (post: any) => ({
      loc: `https://cyfertechsolution.netlify.app/blogs/${post.fields.slug}`,
      lastmod: new Date(post.fields.date).toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    })
  );

  // Combine static pages and blog URLs
  const allUrls = [...staticPages, ...blogUrls];

  // Generate the sitemap XML string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url: any) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod || new Date().toISOString()}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
