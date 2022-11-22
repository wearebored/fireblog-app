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
import { useEffect, useState } from "react";

import LikeSilme, { LikeEkleme } from "../../helpers/LikeSilme";
import CardsVeri from "../../helpers/CardsVeri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../app/features/ModalSlice";

function Card({ e, en }) {
  const dispatch = useDispatch();
  const login = useSelector((s) => s.login);

  const [likeler, setLikeler] = useState(false);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  // console.log(e);
  useEffect(() => {
    CardsVeri(e, setData);
    if (en.like.likes?.indexOf(login.email) > "-1") {
      setLikeler(true);
    }
  }, [e, en.like.likes, login.email]);
  useEffect(() => {
    login.login || setLikeler(false);
  }, [login.login]);

  // -----------like silme--------
  const silme = () => {
    const veri = { ...en.like };

    delete veri.likes[veri.likes.indexOf(login.email)];
    veri.likesayac--;

    return veri;
  };

  // -----------like ekle-----------
  const ekle = () => {
    const veri = { ...en.like };
    if (veri.likes) {
      veri.likes.push(login.email);
    } else {
      veri.likes = [login.email];
    }
    veri.likesayac++;

    return veri;
  };

  // ---------------------
  return (
    <CardCon>
      <CardImage
        onClick={() => {
          // console.log({e,en});
          login.login
            ? navigate(`/details/${e}`, { state: { e, en } })
            : navigate("/login");
        }}
      >
        <img src={data.url} alt={data.title} />
      </CardImage>
      <CardData
        onClick={() => {
          login.login
            ? navigate(`/details/${e}`, { state: { e, en } })
            : navigate("/login");
        }}
      >
        <h4>{data.title}</h4>
        <span>{data.date?.slice(0, 10)}</span>
        <p>{data.content}</p>
      </CardData>
      <CardLike>
        <EmailDiv>
          <UserIcon />
          <p>{data.email}</p>
        </EmailDiv>
        <Messagdiv>
          <LikeIcon
            likeler={likeler ? "#ff0000" : "#727272"}
            onClick={() => {
              if (login.login) {
                if (!likeler) {
                  LikeEkleme(ekle(), e);
                } else {
                  LikeSilme(silme(), e);
                }
                setLikeler(!likeler);
              }
            }}
          />
          <p>
            <sup>{en.like?.likesayac}</sup>
          </p>
          <MessageIcon
            onClick={() => {
              dispatch(setModal(e));
            }}
          />
          <p>
            <sup>{en.yorum?.yorumsayac}</sup>
          </p>
        </Messagdiv>
      </CardLike>
    </CardCon>
  );
}

export default Card;
