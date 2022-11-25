import { getDatabase, ref, onValue } from "firebase/database";
function Yorumcekme({ setVeri, modaldata }) {
  const db = getDatabase();
  const starCountRef = ref(db, `blogdata/${modaldata}/yorum/yorums`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setVeri(data);
  });
}

export default Yorumcekme;
