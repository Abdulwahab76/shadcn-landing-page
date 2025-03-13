import { GetServerSideProps } from "next";
import { client } from "@/lib/contentful";

const Sitemap = () => { };

const getBlogEntries = async (): Promise<any> => {
    const entries = await client.getEntries({ content_type: "blogs" });
    return entries;
};


export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const blogEntries = await getBlogEntries()


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogEntries.items
            .map(
                (post: any) => `
      <url>
        <loc>https://cyfertechsolutions.vercel.app/blog/${post.fields.slugs}</loc>
        <lastmod>${new Date(post.fields.date).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
            )
            .join("")}
  </urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default Sitemap;
