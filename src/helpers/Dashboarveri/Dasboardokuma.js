import { getDatabase, ref, onValue } from "firebase/database";
function Dasboardokuma(setData) {
const db = getDatabase();
const starCountRef = ref(db, `blogdata`);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  setData(data)
});

}

export default Dasboardokuma;
