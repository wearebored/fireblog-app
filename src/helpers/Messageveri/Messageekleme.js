import { getDatabase, ref, onValue } from "firebase/database";
function Messageekleme(id, setData) {
  const db = getDatabase();
  const starCountRef = ref(db, `blogdata/${id}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });
}

export default Messageekleme;
