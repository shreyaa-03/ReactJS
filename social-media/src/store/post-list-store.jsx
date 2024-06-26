/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => { },
  addAllPosts:() =>{}
});

const postListReducer = (currentValue, action) => {
  let newPostList = currentValue;
  if (action.type === "DELETE") {
    newPostList = currentValue.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD") {
    newPostList = [action.payload, ...currentValue];
  }
  else if (action.type === "ADD_ALL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  //useReducer(reducerFunction, initialValue)
  const [postList, dispatchPostList] = useReducer(
    postListReducer,[]
  );

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        reactions,
        tags,
      },
    });
  };
  const addAllPosts = (posts) => {
    dispatchPostList({
      type: "ADD_ALL_POSTS",
      payload: {
       posts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost, addAllPosts }}>
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Bangalore",
//     body: "Hello guys! Going for my vacs. Hope to enjoy",
//     reactions: 8,
//     userId: "user-1",
//     tags: ["vacs", "enjoy", "peace"],
//   },
//   {
//     id: "2",
//     title: "Pass hogaya bhai",
//     body: "Bhai masti masti mein btech khatam hogaya,pata nhai chala",
//     reactions: 18,
//     userId: "user-2",
//     tags: ["pass", "result"],
//   },
// ];

export default PostListProvider;
