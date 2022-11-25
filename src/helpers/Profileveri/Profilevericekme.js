import { getDatabase, ref, onValue } from "firebase/database";

function Profilevericekme({ uid, setData }) {
  const db = getDatabase();
  const starCountRef = ref(db, `kullanici/${uid}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });
}

export default Profilevericekme;
