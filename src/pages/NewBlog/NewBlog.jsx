import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewBlogyazma from "../../helpers/NewBlogdata/NewBlogyazma";
import { NewBlogCon } from "./Newblog-styled";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const { email } = useSelector((s) => s.login);
  const data = { title, url, content, email };

  const navigate = useNavigate();

  return (
    <NewBlogCon>
      <img src="images/blok.png" alt="" />
      <h2>New Blog</h2>
      <label htmlFor="title">Title</label>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        placeholder="Title"
        id="title"
        type="text"
      />
      <label htmlFor="url">Image URL</label>
      <input
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        value={url}
        placeholder="Image URL"
        id="url"
        type="text"
      />
      <label htmlFor="content">Content</label>
      <textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        placeholder="Content"
        name="content"
        id="content"
      ></textarea>
      <button
        disabled={url && content && title ? false : true}
        onClick={() => {
          NewBlogyazma(data);
          navigate("/");
        }}
      >
        SUBMIT
      </button>
    </NewBlogCon>
  );
}

export default NewBlog;
