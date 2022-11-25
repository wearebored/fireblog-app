import { getDatabase, ref, set } from "firebase/database";

function Updateyazma({ url, id, content, title }) {
  const date = new Date().toISOString();
  const db = getDatabase();
  set(ref(db, `blogdata/${id}/content`), content);
  set(ref(db, `blogdata/${id}/url`), url);
  set(ref(db, `blogdata/${id}/title`), title);
  set(ref(db, `blogdata/${id}/date`), date);
}

export default Updateyazma;
