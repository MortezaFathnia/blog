'use client';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Post } from '../../types/Post';
import { calculatingDate } from '@/lib/utils';


interface IProps {
  post: Post;
}

const PostItem: FunctionComponent<IProps> = (props) => {
  const { title, body, id } = props.post;
  return (
    <li>
      <h3 className='flex mb-2 justify-between'>
        <Link href={`/${id}`} className='flex'>{title}</Link>
      </h3>
      <small className='mb-1'>
        • {calculatingDate(id)}&nbsp; ☕️ {Math.ceil(body.length / 50)} min read
      </small>
      <p>{body}</p>
    </li>
  );
};
export default PostItem;
