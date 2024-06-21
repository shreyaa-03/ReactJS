import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";

export default function PostList() {
  const { postList, addAllPosts } = useContext(PostListContext);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => addAllPosts(data.posts));
  // }, []);

  return (
    <>
      {postList.length === 0 && <Message></Message>}
      {postList.map((post) => (
        <Post key={post.id} postList={post}></Post>
      ))}
    </>
  );
}
