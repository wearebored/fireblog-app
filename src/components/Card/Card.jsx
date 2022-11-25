import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../app/features/ModalSlice";
import { setUyari } from "../../app/features/UyariSlice";
import Likeveri from "../../helpers/Cardveri/Likeveri";
import {
  CardCon,
  CardData,
  CardImage,
  CardLike,
  EmailDiv,
  LikeIcon,
  Messagdiv,
  MessageIcon,
  UserIcon,
} from "./Card-styled";

function Card({ id, veri }) {
  const { email } = useSelector((s) => s.login);
  const { modal } = useSelector((s) => s.modal);
  const [like, setLike] = useState(false);
  const [keyler, setKeyler] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likegüncel = useCallback(() => {
    if (veri.like?.likes) {
      let sayac = 0;
      Object.keys(veri.like?.likes).forEach((e) => {
        veri.like?.likes[e].indexOf(email) > -1 && sayac++;
        veri.like?.likes[e].indexOf(email) > -1 && setKeyler(e);
      });
      // console.log(sayac);
      sayac > 0 ? setLike(true) : setLike(false);
    } else {
      setLike(false);
    }
    email || setLike(false);
  }, [email, veri.like?.likes]);

  useEffect(() => {
    likegüncel();
  }, [likegüncel]);

  // console.log(id);
  // console.log(veri);

  return (
    <CardCon>
      <CardImage
        onClick={() => {
          navigate(`/details/${id}`, { state: id });
          modal && dispatch(setModal());
        }}
      >
        <img src={veri.url} alt={veri.title} />
      </CardImage>
      <CardData
        onClick={() => {
          navigate(`/details/${id}`, { state: id });
          modal && dispatch(setModal());
        }}
      >
        <h4>{veri.title}</h4>
        <span>{veri.date?.slice(0, 10)}</span>
        <p>{veri.content}</p>
      </CardData>
      <CardLike>
        <EmailDiv>
          <UserIcon />
          <p>{veri.email}</p>
        </EmailDiv>
        <Messagdiv>
          <LikeIcon
            onClick={() => {
              email && setLike(!like);
              email &&
                Likeveri({
                  id,
                  email,
                  like,
                  keyler,
                  likesayac: veri.like?.likesayac,
                });
              email || dispatch(setUyari("Login to like!"));
            }}
            state={like ? "#ff0000" : "#6e6e6e"}
          />
          <p>
            <sup>{veri.like?.likesayac}</sup>
          </p>
          <MessageIcon
            onClick={() => {
              email || dispatch(setUyari("Login to comment!"));
              modal || dispatch(setModal(id));
            }}
          />
          <p>
            <sup>{veri.yorum?.yorumsayac}</sup>
          </p>
        </Messagdiv>
      </CardLike>
    </CardCon>
  );
}

export default Card;
