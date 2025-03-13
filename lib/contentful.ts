import { createClient, Entry, EntrySkeletonType } from 'contentful';

// Define the fields for your BlogPost content type
export interface BlogPostFields {
    title: string;
    slug: string;
    date: string;
    content: Document; // Rich Text field
    featuredImage?: {
        fields: {
            file: { url: string };
        };
    };
}
// BlogPost now extends Contentful's `EntrySkeletonType`
export interface BlogPost extends EntrySkeletonType {
    fields: BlogPostFields;
    contentTypeId: 'blogs';
}

export async function getBlogPost(slug: string) {
    const entries = await client.getEntries({
        content_type: 'blogs',
        'fields.slug': slug,
    });
    return entries.items[0];
}

// Create a Contentful client
export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
