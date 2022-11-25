import { getDatabase, ref, set } from "firebase/database";
function Likeveri({ id, email, like, keyler, likesayac }) {
  const db = getDatabase();
  const uid = Date.now();
  if (!like) {
    set(ref(db, `blogdata/${id}/like/likes/${uid}`), email);
    set(ref(db, `blogdata/${id}/like/likesayac`), ++likesayac);
  } else {
    set(ref(db, `blogdata/${id}/like/likes/${keyler}`), null);
    set(ref(db, `blogdata/${id}/like/likesayac`), --likesayac);
  }
}

export default Likeveri;
