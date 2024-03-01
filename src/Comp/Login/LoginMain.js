import React, { useEffect } from "react";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as LoginActions from "../../Redux/Slices/Login_Slices";
import LoginButton from "./LoginButton";
import MenuBar from "../Main/Nav/Menu/MenuBar";
// import MapsGameStore from "../Google/MapsGameStore";

export default function LoginMain() {
  const userData = useSelector((state) => state.data.Login_Slices.user);
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
        dispatch(LoginActions.UserData(userDataResults));
        localStorage.setItem("user", JSON.stringify(userDataResults));
      } else {
        dispatch(LoginActions.LogoutUser());
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  console.log("auth.currentUser", auth.currentUser);
  console.log("auth", auth.currentUser);
  console.log(userData);

  return (
    <div>
      {Object.keys(userData).length !== 0 ? (
        // THIS NEEDS TO LOOK AT THE REDUX FOR LOGIN
        <div>
          {/* <p>{userData.displayName}</p> */}
          <MenuBar />
          {/* <MapsGameStore /> */}
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
