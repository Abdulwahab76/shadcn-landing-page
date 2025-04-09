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
            url: `https://cyfertechsolution.netlify.app/blogs/${post.fields.slug}`,
            lastModified: post.fields.date,
            changeFrequency: 'monthly',
            priority: 0.5

        }
    ))

    return [
        {
            url: 'https://cyfertechsolution.netlify.app/blogs',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://cyfertechsolution.netlify.app/#about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://cyfertechsolution.netlify.app/#faqs',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://cyfertechsolution.netlify.app/#contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        ...blogs
    ]
}