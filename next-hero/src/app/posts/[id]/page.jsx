import React from 'react';
const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

const postDetailsPage = async({params}) => {
  const { title, body } = await getDetailsPost(params.id);

  return (
    <div>
      <h6>
        Title : {title}
      </h6>    
      <h5>
        Description: {body}
      </h5>
    </div>
  );
};

export default postDetailsPage;