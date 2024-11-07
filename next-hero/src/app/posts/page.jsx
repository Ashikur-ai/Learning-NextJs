import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';





const page = async() => {

  const postsData = await getPosts();

  return (
    <div>
      <h4>All posts </h4>
      <div className="grid grid-cols-4 gap-6">
        {
          postsData?.map(({ title, body, id }) => (
            <div key={id} className="border-2 p-6">
              <h6>Title: {title}</h6>
              <h5>Description: {body}</h5>
              <button><Link href={`/posts/${id}`}>See Details</Link></button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default page;