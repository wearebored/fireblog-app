import { getDatabase, ref, set } from "firebase/database";
function Messagedüzenle({ modaldata, uid, commantedit }) {
  const db = getDatabase();

  set(
    ref(db, `blogdata/${modaldata}/yorum/yorums/${uid}/comment`),
    commantedit
  );
}

export default Messagedüzenle;
