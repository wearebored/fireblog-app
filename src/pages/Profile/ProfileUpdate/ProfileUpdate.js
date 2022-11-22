import { getDatabase, ref, set } from "firebase/database";
async function ProfileUpdate({ data }) {
  const db = getDatabase();

  await set(ref(db, `kullanici/${data.login}`), {
    age: data.age,
    email: data.email,
    fullname: data.name,
    gender: data.gender,
    image: data.image,
  });
}

export default ProfileUpdate;
