import { getDatabase, ref, set } from "firebase/database";

export async function writeUserData(data, userId, container) {
  const db = getDatabase();
  await set(ref(db, `${container}/` + userId), {
    ...data,
  });
}

function LiveData() {}

export default LiveData;
