/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import  { PostListContext } from "../store/post-list-store";

export default function Post({ postList }) {

  const { deletePost } = useContext(PostListContext)

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {postList.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(postList.id)} >
          <MdDelete />
          </span>
        </h5>
        <p className="card-text">{postList.body}</p>
        {postList.tags.map((tag) => (
          <span className="badge rounded-pill text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {postList.reactions} people.
        </div>
      </div>
    </div>
  );
}
