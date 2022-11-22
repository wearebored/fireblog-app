import { getDatabase, ref, set, child, get } from "firebase/database";
async function CommentEdit(data) {
  // console.log(data);
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `veriler/data/${Number(data.modalid)}/yorum`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();
        // console.log(veri);
        let sayac = 0;
        for (let i of veri.yorums) {
          if (i?.id == data.dataid) {
            veri.yorums[sayac] = {
              ...veri.yorums[sayac],
              comment: data.comment,
            };

            break;
          } else {
            sayac++;
          }
        }
        // console.log(veri);
        // console.log(sayac);

        // ----------------veri silme----
        set(
          ref(db, `veriler/data/${Number(data.modalid)}/yorum/yorums/${sayac}`),
          {
            ...veri.yorums[sayac],
          }
        );
        // ----------------veri silme----

        // console.log(veri);

        //   } else {
        //     console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // ----------------veri silme----
  //   await set(
  //     ref(db, `veriler/data/${Number(data.modalid)}/yorum/yorums/${data.dataid}`),
  //     {}
  //   );
}

export default CommentEdit;
