/* page.tsx */
import Link from "next/link";
import { client } from "@/lib/contentful";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const getBlogEntries = async (): Promise<any> => {
    const entries = await client.getEntries({ content_type: "blogs" });
    return entries;
};

export default async function BlogPosts() {

    const blogEntries = await getBlogEntries();

    return (
        <main className="max-w-6xl w-full mx-auto py-6 px-4 flex flex-col min-h-screen">
            <h1 className="text-4xl font-semibold text-white mb-6">Blogs</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...blogEntries.items, ...blogEntries.items, ...blogEntries.items].map((singlePost: any) => {
                    const { slug, title, date, content, featuredImage } = singlePost.fields;

                    return (
                        <Card key={slug} className="bg-card border   shadow-md rounded-lg">
                            {featuredImage && (
                                <Image
                                    src={`https:${featuredImage.fields.file.url}`}
                                    width={500}
                                    height={300}
                                    alt={title}
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />
                            )}

                            <CardContent className="p-4">
                                <h5 className="text-xl font-semibold text-white">{title}</h5>
                                <p className="text-sm text-gray-300">{new Date(date).toDateString()}</p>
                                {/* <p className="text-gray-400 leading-normal mt-2 line-clamp-3">
                                    {content.substring(0, 120)}...
                                </p> */}
                            </CardContent>

                            <CardFooter className="p-4">
                                <Link href={`/blogs/${slug}`}>
                                    <button className="rounded-md bg-orange-500 py-2 px-4 w-full text-center text-sm text-white transition-all shadow-md hover:bg-white hover:text-black">
                                        Read more
                                    </button>
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}