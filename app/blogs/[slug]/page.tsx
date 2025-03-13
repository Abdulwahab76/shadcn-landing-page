import { getBlogPost } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { documentToReactComponents as contentfulDocumentToReactComponents } from '@contentful/rich-text-react-renderer';



export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug);

    return {
        title: post.fields.title,
        description: post.fields.content,
    };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug);
    console.log(post, '===');

    if (!post) return notFound();


    const options = {
        renderNode: {
            'embedded-asset-block': (node: any) => {
                const { title, file } = node.data.target.fields;
                return (
                    <div className="relative w-full h-96 my-6">
                        <Image
                            src={`https:${file.url}`}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                );
            },
            'heading-1': (node: any, children: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
            'heading-2': (node: any, children: any) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
            'heading-3': (node: any, children: any) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
            'paragraph': (node: any, children: any) => <p className="text-lg leading-relaxed my-4">{children}</p>,
            'unordered-list': (node: any, children: any) => <ul className="list-disc pl-5 my-4">{children}</ul>,
            'ordered-list': (node: any, children: any) => <ol className="list-decimal pl-5 my-4">{children}</ol>,
            'list-item': (node: any, children: any) => <li className="mb-2 list-none">{children}</li>,
            'blockquote': (node: any, children: any) => (
                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">{children}</blockquote>
            ),
        },
    };

    function documentToReactComponents(content: any): import("react").ReactNode {
        if (typeof content === 'object' && content !== null) {
            return contentfulDocumentToReactComponents(content, options);
        }
        return null;
    }

    return (
        <div className="container  py-6 p-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{typeof post.fields.title === 'string' ? post.fields.title : ''}</h1>
            {post.fields.content && (
                documentToReactComponents(post.fields.content)
            )}
        </div>
    );
}
