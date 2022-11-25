import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setLogin } from "../app/features/LoginSlice";
import { app } from "./firebase";
import { writeUserData } from "./LiveData";

function RegisterFireBase(email, password, data, setError, navigate, dispatch) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      writeUserData(data, user.uid, "kullanici");
      dispatch(setLogin({ uid: user.uid, email: user.email }));
      navigate("/");
    })
    .catch((error) => {
      setError(error.code);
    });
}

export default RegisterFireBase;
