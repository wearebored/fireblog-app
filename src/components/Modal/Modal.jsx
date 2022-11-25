import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../app/features/ModalSlice";
import Messageekleme from "../../helpers/Messageveri/Messageekleme";
import Yorumcekme from "../../helpers/Modalveri/Yorumcekme";
import Yorumekle from "../../helpers/Modalveri/Yorumekle";
import Card from "../Card/Card";
import Comment from "../Comment/Comment";
import {
  ModalClose,
  ModalDiv,
  Modals,
  Yorumlar,
  YorumYaz,
} from "./Modal-styled";

function Modal() {
  const { modaldata } = useSelector((s) => s.modal);
  const [data, setData] = useState("");
  const { email } = useSelector((s) => s.login);
  const [comment, setComment] = useState("");
  const [veri, setVeri] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    Messageekleme(modaldata, setData);
    Yorumcekme({ setVeri, modaldata });
  }, [modaldata]);

  return (
    <ModalDiv
      id="close"
      onClick={(e) => {
        e.target.id === "close" && dispatch(setModal());
      }}
    >
      <Modals>
        <Card id={modaldata} veri={data} />
        <ModalClose></ModalClose>
        <ModalClose onClick={() => dispatch(setModal())}>X</ModalClose>
        {email && (
          <YorumYaz>
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
              name="yorum"
              id="yorum"
              placeholder="Comment..."
            ></textarea>
            <button
              disabled={comment ? false : true}
              onClick={() => {
                Yorumekle({
                  comment,
                  modaldata,
                  email,
                  yorumsayac: data.yorum.yorumsayac,
                });
                setComment("");
              }}
            >
              SEND
            </button>
          </YorumYaz>
        )}
        <Yorumlar>
          {veri &&
            Object.keys(veri).map((e) => {
              return <Comment key={e} veri={veri[e]} e={e} />;
            })}
        </Yorumlar>
      </Modals>
    </ModalDiv>
  );
}

export default Modal;
