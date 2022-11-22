import { getDatabase, ref, set } from "firebase/database";
async function LikeSilme(sil, e) {
  const db = getDatabase();

  await set(ref(db, `veriler/data/${e}/like`), {
    ...sil,
  });
}
export const LikeEkleme = async (ekle, e) => {
  const db = getDatabase();

  await set(ref(db, `veriler/data/${e}/like`), {
    ...ekle,
  });
};

export default LikeSilme;
