import { useNavigate } from "react-router-dom";
import { Modals } from "../Modal/Modal-styled";
import DeleteBlog from "./DeleteBlogFunc/DeleteBlog";
import { DeleteModBut, Modaldiv2 } from "./DeleteModal-styled";

function DeleteModal({ en, setDel }) {
  // console.log(en);
  const navigate = useNavigate();

  return (
    <Modaldiv2
      onClick={(e) => {
        e.target.id === "modal" && setDel(false);
      }}
      id="modal"
    >
      <Modals>
        <p style={{ fontSize: "2rem" }}>
          Are you sure you want to delete the {en.title} ?
        </p>
        <DeleteModBut>
          <button
            onClick={() => {
              DeleteBlog(en.id);
              navigate("/");
            }}
          >
            YES
          </button>
          <button
            onClick={() => {
              setDel(false);
            }}
          >
            NO
          </button>
        </DeleteModBut>
      </Modals>
    </Modaldiv2>
  );
}

export default DeleteModal;
