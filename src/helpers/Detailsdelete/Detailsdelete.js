import { getDatabase, ref, set } from "firebase/database";
function Detailsdelete(id) {
  const db = getDatabase();
  set(ref(db, `blogdata/${id}`), null);
}

export default Detailsdelete;
