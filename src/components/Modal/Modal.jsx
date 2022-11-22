import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../app/features/ModalSlice";
import CommentVeri from "../../helpers/CommentVeri";
import {
  CardCon,
  CardData,
  CardImage,
  CardLike,
  EmailDiv,
  UserIcon,
} from "../Card/Card-styled";
import Comment from "../Comment/Comment";
import {
  ModalClose,
  ModalDiv,
  Modals,
  Yorumlar,
  YorumYaz,
} from "./Modal-styled";

function Modal({ en }) {
  const { modalid } = useSelector((s) => s.modal);
  const { email } = useSelector((s) => s.login);
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    setData(en.data[Number(modalid)]);
  }, [en.data, modalid]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <ModalDiv
      id="close"
      onClick={(e) => e.target.id === "close" && dispatch(setModal())}
    >
      <Modals>
        <ModalClose onClick={() => dispatch(setModal())}>X</ModalClose>
        <CardCon
          onClick={() => {
            // console.log({ en, modalid });
            navigate(`/details/${modalid}`, {
              state: { e: modalid, en: en.data[modalid] },
            });
            dispatch(setModal());
          }}
        >
          <CardImage>
            <img src={data.url} alt={data.title} />
          </CardImage>
          <CardData>
            <h4>{data.title}</h4>
            <span>{data.date?.slice(0, 10)}</span>
            <p>{data.content}</p>
          </CardData>
          <CardLike>
            <EmailDiv>
              <UserIcon />
              <p>{data.email}</p>
            </EmailDiv>
          </CardLike>
        </CardCon>
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
                CommentVeri(comment, modalid, email);
                setComment("");
              }}
            >
              SEND
            </button>
          </YorumYaz>
        )}
        <Yorumlar>
          {data.yorum?.yorumsayac > 0 &&
            data.yorum.yorums?.map((e, i) => <Comment key={i} data={e} />)}
        </Yorumlar>
      </Modals>
    </ModalDiv>
  );
}

export default Modal;
