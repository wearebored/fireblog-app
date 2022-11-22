import { getDatabase, ref, child, get } from "firebase/database";

async function NewBlogVeriokuma(container, userId, setCounter) {
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `${container}/data`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setCounter(snapshot.val().length - 1);
        // console.log(snapshot.val());
      } else {
        setCounter(0);
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default NewBlogVeriokuma;
