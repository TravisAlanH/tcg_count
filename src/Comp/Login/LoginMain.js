import React, { useEffect } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";

import * as LoginActions from "../../Redux/Slices/Login_Slices";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
// import MapsGameStore from "../Google/MapsGameStore";

export default function LoginMain() {
  const [userData, setUserData] = React.useState({});
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.data.Login_Slices.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDataResults = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          emailVerified: user.emailVerified,
        };
        setUserData(userDataResults);
        dispatch(LoginActions.UserData(userDataResults));
        localStorage.setItem("user", JSON.stringify(userDataResults));
      } else {
        setUserData({});
        dispatch(LoginActions.LogoutUser());
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="flex flex-row justify-between px-4 py-2">
      <p className="text-2xl font-bold">LOGO</p>
      {auth.currentUser != null ? (
        <div>
          {/* <p>{userData.displayName}</p> */}
          <img className="rounded-full w-[4rem] h-[4rem]" src={userData.photoURL} alt="" />
          {/* <MapsGameStore /> */}
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
