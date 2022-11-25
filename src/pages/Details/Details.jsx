import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setModal } from "../../app/features/ModalSlice";
import {
  CardLike,
  EmailDiv,
  LikeIcon,
  Messagdiv,
  MessageIcon,
  UserIcon,
} from "../../components/Card/Card-styled";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import Modal from "../../components/Modal/Modal";
import Likeveri from "../../helpers/Cardveri/Likeveri";
import Detailsdelete from "../../helpers/Detailsdelete/Detailsdelete";
import Messageekleme from "../../helpers/Messageveri/Messageekleme";
import { HomeCon } from "../Dashboard/Dashboard-styled";
import { DetailsCom, DetailsInfo, Kapsayici } from "./Details-styled";

function Details() {
  const { state } = useLocation();
  const { email } = useSelector((s) => s.login);
  const { modal } = useSelector((s) => s.modal);
  //  -------------------------------
  const [data, setData] = useState("");
  const [keyler, setKeyler] = useState("");
  const [like, setLike] = useState(false);
  const [del, setDel] = useState(false);

  // -----------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ----------------------------------
  const likegüncel = useCallback(() => {
    if (data.like?.likes) {
      let sayac = 0;
      Object.keys(data.like?.likes).forEach((e) => {
        data.like?.likes[e].indexOf(email) > -1 && sayac++;
        data.like?.likes[e].indexOf(email) > -1 && setKeyler(e);
      });
      // console.log(sayac);
      sayac > 0 ? setLike(true) : setLike(false);
    } else {
      setLike(false);
    }
    email || setLike(false);
  }, [email, data.like?.likes]);
  // -----------------------------------------
  useEffect(() => {
    Messageekleme(state, setData);
  }, [state]);
  useEffect(() => {
    likegüncel();
  }, [likegüncel]);
  // Detailsdelete(state);
  // navigate("/");
  return (
    <HomeCon>
      {del && (
        <DeleteModal
          Detailsdelete={Detailsdelete}
          state={state}
          setDel={setDel}
        />
      )}
      {modal && <Modal />}
      <DetailsCom>
        <h2>Details</h2>
        <Kapsayici>
          <img src={data.url} alt={data.url} />
          <DetailsInfo>
            <h5>{data.title}</h5>
            <span>{data.date?.slice(0, 10)}</span>
            <p>{data.content}</p>
          </DetailsInfo>
          <CardLike>
            <EmailDiv>
              <UserIcon />
              <p>{data.email}</p>
            </EmailDiv>
            <Messagdiv>
              <LikeIcon
                onClick={() => {
                  email && setLike(!like);
                  email &&
                    Likeveri({
                      id: state,
                      email,
                      like,
                      keyler,
                      likesayac: data.like?.likesayac,
                    });
                }}
                state={like ? "#ff0000" : "#6e6e6e"}
              />
              <p>
                <sup>{data.like?.likesayac}</sup>
              </p>
              <MessageIcon
                onClick={() => {
                  modal || dispatch(setModal(state));
                }}
              />
              <p>
                <sup>{data.yorum?.yorumsayac}</sup>
              </p>
            </Messagdiv>
          </CardLike>
        </Kapsayici>
        {data.email === email ? (
          <div className="buttoncon">
            <button
              onClick={() => {
                navigate("/updateblog", { state: { state, data } });
              }}
            >
              UPDATE
            </button>
            <button
              className="delete"
              onClick={() => {
                setDel(true);
              }}
            >
              DELETE
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </DetailsCom>
    </HomeCon>
  );
}

export default Details;
