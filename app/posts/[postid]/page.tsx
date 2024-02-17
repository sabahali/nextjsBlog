import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta ,getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import 'highlight.js/styles/github-dark.css'
export const revalidate = 86400 
type Props = {
    params:{
        postid : String
    }
}
export async function generateStaticParams(){
    const posts = await getPostsMeta()
    if(!posts) return []
    return posts.map((post)=>({postid:post.id}))
}
export async function generateMetadata({ params :{ postid } }: Props) {
    const post = await getPostByName(`${postid}.mdx`)
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}



export default async function Post({ params :{ postid } }: Props) {

    const post = await getPostByName(`${postid}.mdx`)
    if (!post) return notFound()

    const { meta,content } = post

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    const pubDate = getFormattedDate(meta.date)

    return (
        <div className=" text-slate-400 ">
            <h2 className="text-3xl text-slate-50 mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm text-slate-200">
                {pubDate}
            </p>
            <article className="">
                {content}
            </article>
            <section>
                <h3 className="text-slate-400">Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
        </div>
    )
}