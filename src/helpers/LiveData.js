import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(data, userId, container) {
  const db = getDatabase();
  set(ref(db, `${container}/` + userId), {
    ...data,
  });
}
