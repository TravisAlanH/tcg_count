import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";

export const handleCreateAccount = async (user) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
    await updateProfile(auth.currentUser, {
      displayName: user.firstName + " " + user.lastName,
    });

    console.log("Account created successfully!");
    return { status: true, message: auth.currentUser };
  } catch (error) {
    console.error("Error creating account:", error.message);
    return { status: false, message: error.message };
  }
};

export const handleLogin = async (user) => {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
    console.log("Logged in successfully!");
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};
