import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { setLogin } from "../../app/features/LoginSlice";
import GoogleLogin from "../../helpers/GoogleLogin";
import LoginFireBase from "../../helpers/LoginFireBase";
import { ImgDiv, LoginBloc, LoginCon, LoginInput } from "./login-stayled";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useSelector((store) => store.login);
  // console.log(login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (login) {
    return <Navigate to="/" />;
  } else {
    return (
      <LoginCon>
        <LoginBloc>
          <ImgDiv>
            <img src="images/blok.png" alt="" />
          </ImgDiv>
          <h3>Login</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <LoginInput>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              id="email"
              type="text"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              id="password"
              type="password"
            />
            <button
              onClick={() => {
                LoginFireBase(
                  email,
                  password,
                  setError,
                  setLogin,
                  dispatch,
                  navigate
                );
              }}
              disabled={!email ? true : password.length >= 6 ? false : true}
              id="google"
            >
              LOGIN
            </button>
            <button
              onClick={() => {
                GoogleLogin(dispatch, navigate, setLogin);
              }}
            >
              {"WITH"}
              <img src="images/google.png" alt="" />{" "}
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              REGISTER
            </button>
          </LoginInput>
        </LoginBloc>
      </LoginCon>
    );
  }
}

export default Login;
