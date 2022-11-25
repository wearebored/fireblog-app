import { getDatabase, ref, set, onValue } from "firebase/database";
function Messagesilme({ modaldata, e }) {
  const db = getDatabase();
  let data;
  const starCountRef = ref(db, `blogdata/${modaldata}/yorum/yorumsayac`);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });
  set(ref(db, `blogdata/${modaldata}/yorum/yorums/${e}`), null);
  set(ref(db, `blogdata/${modaldata}/yorum/yorumsayac`), --data);
}

export default Messagesilme;
