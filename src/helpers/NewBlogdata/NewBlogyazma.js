import { getDatabase, ref, set } from "firebase/database";
function NewBlogyazma(data) {
  const db = getDatabase();
  const id = Date.now();
  const date = new Date().toISOString();
  set(ref(db, `blogdata/${id}`), {
    ...data,
    like: { likesayac: 0 },
    yorum: { yorumsayac: 0 },
    date: date,
  });
}

export default NewBlogyazma;
