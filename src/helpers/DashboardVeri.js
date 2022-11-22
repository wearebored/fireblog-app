import { getDatabase, ref, onValue } from "firebase/database";

function DashboardVeri(setData) {
  const db = getDatabase();
  const starCountRef = ref(db, "veriler/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setData(data);
  });
}

export default DashboardVeri;
