import { getDatabase, ref, set, child, get } from "firebase/database";
async function UpdateBlogFunc(data) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `veriler/data`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();

        let sayac = 0;
        for (let i of veri) {
          if (i?.id == data.state.id) {
            veri[sayac] = {
              ...veri[sayac],
              content: data.content,
              title: data.title,
              url: data.image,
            };

            break;
          } else {
            sayac++;
          }
        }

        // ----------------veri update----
        set(ref(db, `veriler/data/${sayac}`), {
          ...veri[sayac],
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default UpdateBlogFunc;
