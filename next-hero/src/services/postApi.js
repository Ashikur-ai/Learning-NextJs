export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await res.json();
  return data;
}