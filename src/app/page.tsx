import { getAllPosts } from '@/lib/api-requests'
import Header from '@/components/ui/Header';
import PostItem from '@/components/post/PostItem';
import { Post } from '@/types/Post';


export default async function Home() {
  const data = await getAllPosts();
  return (
    <>
      <Header />
      <div className='mt-[2rem]'>
        {data && (
          <ul>
            {data.map((post: Post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
