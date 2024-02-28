import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import React from "react";
import "./Login.css";
import * as LoginActions from "./FirebaseLoginActions";

export default function LoginButton() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [createAccount, setCreateAccount] = React.useState(false);

  let loginMenuRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (!loginMenuRef.current.contains(e.target)) {
        setOpenLogin(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((results) => {
      // This logic is now handled by the onAuthStateChanged listener
    });
  };

  return (
    <div className="border-2 h-[3.5rem]">
      <div onClick={() => setOpenLogin(!openLogin)} className="h-[3.5rem] flex flex-row justify-end items-center">
        <p>Login</p>
      </div>
      <div ref={loginMenuRef}>
        <div
          className={"login-container border-2 border-red-600 w-[14rem] " + (openLogin ? "openLogin" : "closedLogin")}>
          <div>
            {createAccount === false ? (
              <div>
                <LoginSet />
                <button onClick={() => setCreateAccount(true)}>Create Account</button>
              </div>
            ) : (
              <div>
                <CreateAccountSet />
                <button onClick={() => setCreateAccount(false)}>Return to Login</button>
              </div>
            )}

            <br></br>
            <button onClick={handleLoginClick}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginSet = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    LoginActions.handleLogin(loginData);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col ">
      <input
        type="text"
        placeholder={loginData.email === "" ? "Email" : loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder={loginData.password === "" ? "Password" : loginData.password}
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

const CreateAccountSet = () => {
  const [createAccountData, setCreateAccountData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleCreateAccountWithPasswordChecking = (e) => {
    let createStatus;
    e.preventDefault();
    if (createAccountData.password !== createAccountData.confirmPassword) {
      setCreateAccountData({ ...createAccountData, password: "", confirmPassword: "" });
      console.log("Passwords do not match");
    } else {
      createStatus = LoginActions.handleCreateAccount(createAccountData);
    }
    console.log("Create Status", createStatus);
  };

  return (
    <form onSubmit={handleCreateAccountWithPasswordChecking} className="flex flex-col">
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setCreateAccountData({ ...createAccountData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setCreateAccountData({ ...createAccountData, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setCreateAccountData({ ...createAccountData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setCreateAccountData({ ...createAccountData, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setCreateAccountData({ ...createAccountData, confirmPassword: e.target.value })}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};
