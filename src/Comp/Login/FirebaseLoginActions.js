import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";

export const handleCreateAccount = async (user) => {
  console.log("INFO", user);
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(auth.currentUser, {
      displayName: user.firstName + " " + user.lastName,
    });
    console.log(auth.currentUser);

    console.log("Account created successfully!");
  } catch (error) {
    console.error("Error creating account:", error.message);
  }
};

export const handleLogin = async (user) => {
  console.log("LOGIN INFO", user);
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
    console.log("Logged in successfully!");
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
