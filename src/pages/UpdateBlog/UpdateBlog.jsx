import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateCon } from "./update-styled";
import UpdateBlogFunc from "./UpdateBlogFunc/UpdateBlogFunc";

function UpdateBlog() {
  const { state } = useLocation();
  const [change, setChange] = useState(true);
  const [title, setTitle] = useState(state.ene.title);
  const [image, setImage] = useState(state.ene.url);
  const [content, setContent] = useState(state.ene.content);
  const navigate = useNavigate();

  const data = { title, image, content, state: state.ene };
  return (
    <UpdateCon>
      <img src={state.ene.url} alt="" />
      <h2>Update Blog</h2>
      <label htmlFor="title">Title</label>
      <input
        value={title}
        onChange={(e) => {
          setChange(false);
          setTitle(e.target.value);
        }}
        id="title"
        type="text"
      />
      <label htmlFor="url">Image URL</label>
      <input
        onChange={(e) => {
          setChange(false);
          setImage(e.target.value);
        }}
        value={image}
        id="url"
        type="text"
      />
      <label htmlFor="content">Content</label>
      <textarea
        onChange={(e) => {
          setChange(false);
          setContent(e.target.value);
        }}
        value={content}
        name="content"
        id="content"
      ></textarea>
      <button
        onClick={() => {
          UpdateBlogFunc(data);
          navigate(-1);
        }}
        disabled={change}
      >
        UPDATE
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        CANCEL
      </button>
    </UpdateCon>
  );
}

export default UpdateBlog;
