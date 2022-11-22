import { getDatabase, ref, child, get } from "firebase/database";
async function VeriOkuma(container, userId, setUserdata, setImage) {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `${container}/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();
        if (veri.image) {
          setUserdata(veri);
          setImage(veri.image);
        } else {
          setImage("https://picsum.photos/1600/900");
          setUserdata(veri);
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default VeriOkuma;
