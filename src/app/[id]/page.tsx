import { getAllPosts, getPost } from "@/lib/api-requests"
import { Post } from "@/types/Post"
import PostHeader from "@/components/ui/PostHeader"
import { Metadata, ResolvingMetadata } from "next";
import { calculatingDate } from "@/lib/utils";

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const data = await getAllPosts()
  const post = data?.find((item: Post) => item.id === +params.id);

  return {
    title: post.title,
    description: "A personal blog by Morteza Fathnia"
  }
}
export default async function PostPage({ params: { id } }: Props) {
  const post = await getPost(+id)
  const { title, body, id:postId } = post;
  return (
    <>
      <PostHeader />
      <section>
        <h1 data-testid='title' className="text-[40px] font-black leading-[44px] text-[--title] mb-1">
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
          {calculatingDate(postId)}
        </p>
        <p>
          {body}
        </p>
      </section>
    </>
  )
}