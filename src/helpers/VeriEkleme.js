import { getDatabase, ref, set, child, get } from "firebase/database";
export async function VeriEkleme(
  data,
  userId,
  container,
  navigate,
  counter,
  email
) {
  const db = getDatabase();
  const date = new Date();

  const dbRef = ref(getDatabase());
  await get(child(dbRef, `${container}/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const veri = snapshot.val();
        // console.log(snapshot.val());

        // if (veri.anlikblog.sayac > 1) {
        //   veri.anlikblog.sayac++;
        //   set(ref(db, `${container}/data/${veri.anlikblog.sayac}`), {
        //     ...data,
        //     userId,
        //     id: veri.totalblog.sayac + 1,
        //     date: date.toISOString(),
        //     like: {
        //       likesayac: 0,
        //       likes: [],
        //     },
        //     yorum: {
        //       totalyorum: 0,
        //       yorumsayac: 0,
        //       yorums: [],
        //     },
        //     email: email,
        //   });
        //   set(ref(db, `${container}/totalblog`), {
        //     sayac: veri.totalblog.sayac + 1,
        //   });
        // } else
        if (veri.anlikblog.sayac > 0) {
          veri.anlikblog.sayac++;
          veri.totalblog.sayac++;
          set(ref(db, `${container}`), {
            ...veri,
          });
          set(ref(db, `${container}/data/${veri.anlikblog.sayac}`), {
            ...data,
            userId,
            id: veri.totalblog.sayac,
            date: date.toISOString(),
            like: {
              likesayac: 0,
              likes: [],
            },
            yorum: {
              totalyorum: 0,
              yorumsayac: 0,
              yorums: [],
            },
            email: email,
          });
        } else {
          veri.totalblog.sayac++;
          set(ref(db, `${container}`), {
            data: [],
            anlikblog: { sayac: 1 },
            totalblog: { sayac: veri.totalblog.sayac },
          });
          set(ref(db, `${container}/data/1`), {
            ...data,
            userId,
            id: 1,
            date: date.toISOString(),
            like: {
              likesayac: 0,
              likes: [],
            },
            yorum: {
              totalyorum: 0,
              yorumsayac: 0,
              yorums: [],
            },
            email: email,
          });
        }
      } else {
        set(ref(db, `${container}`), {
          data: [],

          anlikblog: { sayac: 1 },
          totalblog: { sayac: 1 },
        });
        set(ref(db, `${container}/data/1`), {
          ...data,
          userId,
          id: 1,
          date: date.toISOString(),
          like: {
            likesayac: 0,
            likes: [],
          },
          yorum: {
            totalyorum: 0,
            yorumsayac: 0,
            yorums: [],
          },
          email: email,
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  // blogsayac: 0;
  // totalblog: 0;

  // await set(ref(db, `${container}/data/${counter + 1}`), {
  //   ...data,
  //   userId,
  //   id: counter + 1,
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

  navigate("/");
}
