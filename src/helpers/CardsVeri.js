import { getDatabase, ref, child, get } from "firebase/database";

async function CardsVeri(id, setData) {
  const dbRef = ref(getDatabase());
 await get(child(dbRef, `veriler/data/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default CardsVeri;
