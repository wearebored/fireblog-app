import { getDatabase, ref, set } from "firebase/database";
function Profileyazma({ uid, data }) {
  const db = getDatabase();
  Object.keys(data).forEach((e) => {
    data[e] && set(ref(db, `kullanici/${uid}/${e}`), data[e]);
  });
}

export default Profileyazma;
