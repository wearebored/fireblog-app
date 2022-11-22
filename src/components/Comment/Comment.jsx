import { useState } from "react";
import { useSelector } from "react-redux";
import { UserIcon } from "../Card/Card-styled";
import CommentDelete from "./Comment-func/CommentDelete";
import CommentEdit from "./Comment-func/CommentEdit";
import {
  MeDiv,
  OptionContainer,
  OptionIcon,
  OptionListe,
  YorumCon,
  YorumEmail,
} from "./Comment-styled";

function Comment({ data }) {
  const [option, setOption] = useState(false);
  const { email } = useSelector((s) => s.login);
  const { modalid } = useSelector((s) => s.modal);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(data.comment);

  return (
    <YorumCon>
      <YorumEmail>
        <UserIcon />
        <p>{data.email}</p>
        {data.email == email ? (
          <OptionContainer
            onMouseOut={() => {
              setOption(false);
            }}
            onMouseOver={() => {
              setOption(true);
            }}
          >
            <OptionIcon />
            {option && (
              <OptionListe>
                <li
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </li>
                <li
                  onClick={() => {
                    CommentDelete({ dataid: data.id, modalid });
                    setEdit(false);
                  }}
                >
                  Delete
                </li>
              </OptionListe>
            )}
          </OptionContainer>
        ) : (
          <p></p>
        )}
      </YorumEmail>
      <MeDiv>
        {edit ? (
          <div>
            <textarea
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
              type="text"
            />
            <div className="buttons">
              <button
                onClick={() => {
                  setEdit(false);
                  CommentEdit({ comment, modalid, dataid: data.id });
                }}
              >
                SEND
              </button>
              <button
                className="cancel"
                onClick={() => {
                  setEdit(false);
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <p>{data.comment}</p>
        )}
      </MeDiv>
      {/* {data} */}
    </YorumCon>
  );
}

export default Comment;
