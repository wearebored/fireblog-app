import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function LoginFireBase(
  email,
  password,
  setError,
  setLogin,
  dispatch,
  navigate
) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;

      dispatch(setLogin({ uid: user.uid, email: user.email }));

      navigate(-1);

      // ...
    })
    .catch((error) => {
      setError(error.code);
    });
}

export default LoginFireBase;
