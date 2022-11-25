import { getDatabase, ref, set } from "firebase/database";
function Yorumekle({ comment, modaldata, email, yorumsayac }) {
  const db = getDatabase();
  const uid = Date.now();

  set(ref(db, `blogdata/${modaldata}/yorum/yorums/${uid}`), {
    email,
    comment,
  });
  set(ref(db, `blogdata/${modaldata}/yorum/yorumsayac`), ++yorumsayac);
}

export default Yorumekle;
