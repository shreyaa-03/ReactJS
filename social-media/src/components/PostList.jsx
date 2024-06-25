import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";
import { MdFamilyRestroom } from "react-icons/md";
import Loading from "./Loading";

export default function PostList() {
  const { postList, addAllPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(MdFamilyRestroom)

  // useEffect(() => {
  // setFetching(true)

  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addAllPosts(data.posts)
  //       setFetching(false)
  //     });
  // }, []);

  return (
    <>
      {fetching &&< Loading/>}
      {!fetching && postList.length === 0 && <Message></Message>}
      {!fetching && postList.map((post) => (
        <Post key={post.id} postList={post}></Post>
      ))}
    </>
  );
}
