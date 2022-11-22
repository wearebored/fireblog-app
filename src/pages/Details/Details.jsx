import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import DashboardVeri from "../../helpers/DashboardVeri";
import LikeSilme, { LikeEkleme } from "../../helpers/LikeSilme";
import {
  DetailsCom,
  DetailsInfo,
  Kapsayici,
  ModalKapsa,
} from "./Details-styled";

function Details() {
  const { email } = useSelector((s) => s.login);
  const { state } = useLocation();
  const { en } = state;
  const e = useParams().id;
  const [likeler, setLikeler] = useState(false);
  const [data, setData] = useState();
  const ene = data?.data[e];
  const { modal } = useSelector((s) => s.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [del, setDel] = useState(false);

  // ----------------------
  useEffect(() => {
    
    DashboardVeri(setData);
    if (en.like.likes?.indexOf(email) > "-1") {
      setLikeler(true);
    }
  }, [email, en]);
  // -----------like silme--------
  const silme = () => {
    const veri = { ...ene.like };

    delete veri.likes[veri.likes?.indexOf(email)];
    veri.likesayac--;

    return veri;
  };

  // -----------like ekle-----------
  const ekle = () => {
    const veri = { ...ene.like };

    if (veri.likes) {
      veri.likes.push(email);
    } else {
      veri.likes = [email];
    }
    veri.likesayac++;

    return veri;
  };
  // --------------------------

  return (
    <ModalKapsa>
      {modal && <Modal en={data} />}
      {del && <DeleteModal en={en} setDel={setDel} />}
      <DetailsCom>
        <h2>Details</h2>
        <Kapsayici>
          <img src={ene?.url} alt={ene?.title} />
          <DetailsInfo>
            <h5>{ene?.title}</h5>
            <span>{ene?.date.slice(0, 10)}</span>
            <p>{ene?.content}</p>
          </DetailsInfo>
          <CardLike>
            <EmailDiv>
              <UserIcon />
              <p>{ene?.email}</p>
            </EmailDiv>
            <Messagdiv>
              <LikeIcon
                onClick={() => {
                  if (email) {
                    if (!likeler) {
                      LikeEkleme(ekle(), e);
                    } else {
                      LikeSilme(silme(), e);
                    }
                    setLikeler(!likeler);
                  }
                }}
                likeler={likeler ? "#ff0000" : "#727272"}
              />
              <p>
                <sup>{ene?.like?.likesayac}</sup>
              </p>
              <MessageIcon
                onClick={() => {
                  dispatch(setModal(e));
                }}
              />
              <p>
                <sup>{ene?.yorum?.yorumsayac}</sup>
              </p>
            </Messagdiv>
          </CardLike>
        </Kapsayici>
        {ene?.email === email && (
          <div className="buttoncon">
            <button
              onClick={() => {
                navigate("/updateblog", { state: { ene } });
              }}
            >
              UPDATE
            </button>
            <button
              onClick={() => {
                setDel(true);
              }}
              className="delete"
            >
              DELETE
            </button>
          </div>
        )}
      </DetailsCom>
    </ModalKapsa>
  );
}

export default Details;
