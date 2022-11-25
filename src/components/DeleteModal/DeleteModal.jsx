import { useNavigate } from "react-router-dom";
import { Modals } from "../Modal/Modal-styled";
import { DeleteModBut, Modaldiv2 } from "./DeleteModal-styled";

function DeleteModal({ en, setDel, state, Detailsdelete }) {
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
        <p style={{ fontSize: "2rem" }}>Are you sure you want to delete ?</p>
        <DeleteModBut>
          <button
            onClick={() => {
              Detailsdelete(state);
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
