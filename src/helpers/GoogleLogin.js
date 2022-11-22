import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./firebase";
import { writeUserData } from "./LiveData";

function GoogleLogin(dispatch, navigate, setLogin) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const dbRef = ref(getDatabase());
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      const data = { email: user.email, fullname: user.displayName };
      dispatch(setLogin({ uid: user.uid, email: user.email }));
      // ---------------------------
      get(child(dbRef, `kullanici/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
          } else {
            writeUserData(data, user.uid, "kullanici");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // --------------------------------------
      // writeUserData(data, user.uid, "kullanici");
      // console.log(user);
      navigate(-1);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export default GoogleLogin;
