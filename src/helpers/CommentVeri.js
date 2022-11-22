import { getDatabase, ref, set, child, get } from "firebase/database";

async function CommentVeri(comment, modalid, email) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `veriler/data/${Number(modalid)}/yorum`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const ver = snapshot.val();
        if (ver.yorumsayac > 0) {
          ver.yorums.push({ comment, email, id: ver.totalyorum + 1 });
          ver.yorumsayac++;
          ver.totalyorum++;
          // ----------------veri gönderme------------
          set(ref(db, `veriler/data/${modalid}/yorum`), {
            ...ver,
          });
        } else {
          ver.yorums = { comment, email, id: ver.totalyorum + 1 };
          ver.yorumsayac++;
          ver.totalyorum++;
          // ----------------veri gönderme------------
          set(ref(db, `veriler/data/${modalid}/yorum`), {
            yorumsayac: ver.yorumsayac,
            totalyorum: ver.totalyorum,
          });
          // ----------------veri gönderme------------
          set(ref(db, `veriler/data/${modalid}/yorum/yorums`), {
            1: ver.yorums,
          });
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default CommentVeri;
