import { getDatabase, ref, set, child, get } from "firebase/database";
async function CommentDelete(data) {
  // console.log(data);
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `veriler/data/${Number(data.modalid)}/yorum`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();
        let sayac = 0;
        for (let i of veri.yorums) {
          if (i?.id == data.dataid) {
            veri.yorums.splice(sayac, 1);
            veri.yorumsayac--;
            break;
          } else {
            sayac++;
          }
        }

        // set(ref(db, `veriler/data/${Number(data.modalid)}/yorum/yorumsayac`), {
        //   ...veri.yorumsayac,
        // });
        // ----------------veri silme----
        set(ref(db, `veriler/data/${Number(data.modalid)}/yorum`), {
          ...veri,
        });

        // ----------------veri silme----

        // console.log(veri);
        // ----------------veri silme----
        //    set(
        //     ref(db, `veriler/data/${Number(data.modalid)}/yorum`),
        //     {

        //     }
        //   );
      } else {
        console.log("No data available");
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

export default CommentDelete;
