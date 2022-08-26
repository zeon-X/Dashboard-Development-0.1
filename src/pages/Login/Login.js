import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { config_access_token } from "../../Utilities/access_token";
import Loading from "../Loading/Loading";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [flag, setFlag] = useState(true);
  const [cngBtn, setCngBtn] = useState(true);

  const logout = () => {
    signOut(auth);
    setCngBtn(true);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const handleSignIn = () => {
    signInWithGoogle();
    setCngBtn(false);
    if (user) {
      // setFlag(true);
      // console.log(user.user.email);
      if (flag) {
        let loginData = {
          user: {
            username: user?.user?.email,
          },
        };
        // console.log(loginData);
        axios
          .post("http://localhost:5000/api/user/login", loginData)
          .then((res) => {
            console.log(res);
            localStorage.setItem("access_token", res.data);
          });

        axios
          .post(
            "http://localhost:5000/api/user/verifyToken",
            {},
            config_access_token
          )
          .then((res) => {
            if (res.status === 200) localStorage.setItem("role", "admin");
            else localStorage.setItem("role", "notadmin");
          });

        setFlag(false);
      }
    }
  };

  console.log(cngBtn);

  return (
    <div className="flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl modal-box">
        {cngBtn ? (
          <div class="card-body items-center text-center">
            <h2 class="card-title">Login</h2>

            <p className="mb-3">To continue Please Login</p>
            <div class="card-actions">
              <button onClick={handleSignIn} class="btn btn-wide btn-secondary">
                Login Using Google!
              </button>
            </div>
          </div>
        ) : (
          <div class="card-body items-center text-center">
            <h2 class="card-title">Login</h2>

            <p className="mb-3">
              You are alradey logged in. Click here to Logout
            </p>
            <div class="card-actions">
              <button onClick={logout} class="btn btn-wide btn-secondary">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
