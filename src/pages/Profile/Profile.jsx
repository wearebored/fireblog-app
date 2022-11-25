import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profilevericekme from "../../helpers/Profileveri/Profilevericekme";
import Profileyazma from "../../helpers/Profileveri/Profileyazma";
import {
  ImageUrl,
  InfoList,
  PhotoDiv,
  ProfileCon,
  ProfileInfo,
  UpdataProf,
} from "./Profile-styled";

function Profile() {
  const { uid } = useSelector((s) => s.login);
  // -----------------------------------
  const [userdata, setUserdata] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // -----------------------------
  const [güncelleme, setGüncelleme] = useState(false);
  const [update, setUpdate] = useState(false);
  const [image, setImage] = useState("images/loading.gif");
  const data = {
    fullname: name,
    gender,
    email,
    age,
    image,
  };
  useEffect(() => {
    Profilevericekme({ uid, setData: setUserdata });
    setName(userdata.fullname ? userdata.fullname : "");
    setAge(userdata.age ? userdata.age : "");
    setEmail(userdata.email ? userdata.email : "");
    setGender(userdata.gender ? userdata.gender : "");
  }, [uid, userdata.fullname, userdata.age, userdata.email, userdata.gender]);
  useEffect(() => {
    userdata && (userdata.image ? setImage(userdata.image) : setImage(""));
  }, [userdata.image, userdata]);

  return (
    <div>
      <ProfileCon>
        <PhotoDiv
          store={image === "" ? "https://picsum.photos/1600/900" : image}
        ></PhotoDiv>
        <ImageUrl>
          {update && (
            <input
              placeholder="Image Url"
              onChange={(e) => {
                setImage(e.target.value);
                setGüncelleme(true);
              }}
              value={image}
              type="text"
            />
          )}
        </ImageUrl>
        <ProfileInfo>
          <InfoList>
            <li>Name</li>
            <li>Gender</li>
            <li>Age</li>
            <li>Email </li>
          </InfoList>
          <InfoList>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={name}
                  placeholder="update your information..."
                  type="text"
                />
              ) : userdata.fullname ? (
                userdata.fullname
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <select
                  value={gender}
                  onChange={(e) => {
                    e.target.value === "Gender" || setGender(e.target.value);
                    e.target.value === "Gender" || setGüncelleme(true);
                  }}
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Famale">Famale</option>
                </select>
              ) : userdata.gender ? (
                userdata.gender
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={age}
                  placeholder="update your information..."
                  type="number"
                />
              ) : userdata.age ? (
                userdata.age
              ) : (
                <div>update your information...</div>
              )}
            </li>
            <li>
              {update ? (
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setGüncelleme(true);
                  }}
                  value={email}
                  placeholder="update your information..."
                  type="text"
                />
              ) : userdata.email ? (
                userdata.email
              ) : (
                <div>update your information...</div>
              )}
            </li>
          </InfoList>
        </ProfileInfo>
        <UpdataProf>
          <button
            onClick={() => {
              setUpdate(!update);
              güncelleme && Profileyazma({ uid, data });
              setGüncelleme(false);
            }}
          >
            {update ? "UPDATE" : "EDİT"}
          </button>
          {/* {update && (
            <button
              onClick={() => {
                setUpdate(!update);
              }}
            >
              CANCEL
            </button>
          )} */}
        </UpdataProf>
      </ProfileCon>
    </div>
  );
}

export default Profile;
