import { client } from '@/lib/contentful';
import { MetadataRoute } from 'next'
const getBlogEntries = async (): Promise<any> => {
    const entries = await client.getEntries({ content_type: "blogs" });
    return entries;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogEntries = await getBlogEntries();
    const blogs: MetadataRoute.Sitemap = blogEntries.items.map((post: any, ind: number) => (
        {
            url: `https://cyfertechsolutions.netlify.app/blogs/${post.fields.slug}`,
            lastModified: post.fields.date,
        }
    ))

    return [
        {
            url: 'https://cyfertechsolutions.netlify.app/blogs',
            lastModified: new Date(),
        },
        {
            url: 'https://cyfertechsolutions.netlify.app/#about',
            lastModified: new Date(),
        },
        {
            url: 'https://cyfertechsolutions.netlify.app/#faqs',
            lastModified: new Date(),
        },
        {
            url: 'https://cyfertechsolutions.netlify.app/#contact',
            lastModified: new Date(),
        },
        ...blogs
    ]
}