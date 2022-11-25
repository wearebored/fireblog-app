import { useState } from "react";
import { useSelector } from "react-redux";
import Messagedüzenle from "../../helpers/Messageveri/Messagedüzenle";
import Messagesilme from "../../helpers/Messageveri/Messagesilme";
import { UserIcon } from "../Card/Card-styled";
import {
  MeDiv,
  OptionContainer,
  OptionIcon,
  OptionListe,
  YorumCon,
  YorumEmail,
} from "./Comment-styled";
function Comment({ veri, e }) {
  const { email } = useSelector((s) => s.login);
  const { modaldata } = useSelector((s) => s.modal);
  // ---------------
  const [option, setOption] = useState(false);
  const [edit, setEdit] = useState(false);
  const [commantedit, setCommantedit] = useState(veri.comment);

  // console.log(veri);
  return (
    <YorumCon>
      <YorumEmail>
        <UserIcon />
        <p>{veri.email}</p>

        {veri.email === email ? (
          <OptionContainer
            onMouseOut={() => {
              setOption(false);
            }}
            onMouseOver={() => {
              setOption(true);
            }}
          >
            <OptionIcon />

            <OptionListe state={!option ? "hidden" : "none"}>
              <li onClick={() => setEdit(true)}>Edit</li>
              <li
                onClick={() => {
                  Messagesilme({ modaldata, e });
                }}
              >
                Delete
              </li>
            </OptionListe>
          </OptionContainer>
        ) : (
          <div></div>
        )}
      </YorumEmail>
      <MeDiv>
        {edit ? (
          <div>
            <textarea
              onChange={(e) => setCommantedit(e.target.value)}
              value={commantedit}
              type="text"
            />
            <div className="buttons">
              <button
                onClick={() => {
                  Messagedüzenle({ modaldata, uid: e, commantedit });
                  setEdit(false);
                }}
              >
                SEND
              </button>
              <button className="cancel" onClick={() => setEdit(false)}>
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <p> {veri.comment} </p>
        )}
      </MeDiv>
    </YorumCon>
  );
}

export default Comment;
