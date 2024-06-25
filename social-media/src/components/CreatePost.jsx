import { useContext, useRef, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const navigate = useNavigate();

  const { addPost } = useContext(PostListContext);

  const [postCreated, setPostCreated] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIDElement.current.value;
    const title = titleElement.current.value;
    const body = titleElement.current.body;
    const reactions = reactionsElement.current.body;
    const tags = tagsElement.current.value.split(" ");

    const postCreated = addPost(userId, title, body, reactions, tags);

    setPostCreated(true);

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          UserId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Please tell us your id"
          ref={userIDElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Wanna share something?"
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us how you feel"
          ref={bodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Total Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="Number of people reacted to this post??"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter different tags using space"
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
      {postCreated && (
        <div className="alert alert-success post-success" role="alert">
          New post created. Check it out!
        </div>
      )}
    </form>
  );
}
