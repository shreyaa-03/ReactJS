import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentValue, action) => {};

const PostListProvider = ({ children }) => {
  //useReducer(reducerFunction, initialValue)
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = (postId) => {
    console.log(`Delete post id: ${postId}`)
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Bangalore",
    body: "Hello guys! Going for my vacs. Hope to enjoy",
    reactions: 8,
    userId: "user-1",
    tags: ["vacs", "enjoy", "peace"],
  },
  {
    id: "2",
    title: "Pass hogaya bhai",
    body: "Bhai masti masti mein btech khatam hogaya,pata nhai chala",
    reactions: 18,
    userId: "user-2",
    tags: ["pass", "result"],
  },
];

export default PostListProvider;
