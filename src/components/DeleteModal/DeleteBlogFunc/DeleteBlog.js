import { getDatabase, ref, set, child, get } from "firebase/database";

async function DeleteBlog(e) {
  const db = getDatabase();
  const dbRef = ref(getDatabase());

  await get(child(dbRef, `veriler/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();

        // console.log(veri);
        let sayac = 0;
        for (let i of veri.data) {
          if (i?.id === e) {
            veri.data.splice(sayac, 1);

            break;
          } else {
            sayac++;
          }
        }
        veri.anlikblog.sayac--;
        // console.log(veri);

        // set(ref(db, `${container}/data/${veri.totalblog.sayac + 1}`), {
        //   ...data,
        //   userId,
        //   id: veri.totalblog.sayac + 1,
        //   date: date.toISOString(),
        //   like: {
        //     likesayac: 0,
        //     likes: [],
        //   },
        //   yorum: {
        //     totalyorum: 0,
        //     yorumsayac: 0,
        //     yorums: [],
        //   },
        //   email: email,
        // });

        set(ref(db, `veriler`), {
          ...veri,
        });
      } else {
        // set(ref(db, `${container}`), {
        //   data: [],
        //   totalblog: { sayac: 1 },
        // });
        // set(ref(db, `${container}/data/1`), {
        //   ...data,
        //   userId,
        //   id: 1,
        //   date: date.toISOString(),
        //   like: {
        //     likesayac: 0,
        //     likes: [],
        //   },
        //   yorum: {
        //     totalyorum: 0,
        //     yorumsayac: 0,
        //     yorums: [],
        //   },
        //   email: email,
        // });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default DeleteBlog;
