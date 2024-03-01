import React from "react";
import { useSelector } from "react-redux";
import "./MenuBar.css";
import LogoutButton from "../../../Login/LogoutButton";
import defaultUserImage from "../../../../Images/UserProfileImages/default_image.jpeg";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const [dropOpen, setDropOpen] = React.useState(false);
  let menuRef = React.useRef(null);

  React.useEffect(() => {
    let LoginHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", LoginHandler);

    return () => {
      document.removeEventListener("mousedown", LoginHandler);
    };
  });

  const userData = useSelector((state) => state.data.Login_Slices.user);
  return (
    <div id="MenuBar" className="menu-container border-2 w-[8rem] h-[3.5rem] z-50">
      <div
        className="menu-trigger h-full flex flex-row justify-end items-center"
        onClick={() => {
          setDropOpen(!dropOpen);
        }}>
        <img
          className="rounded-full w-[3rem] h-[3rem]"
          src={userData.payload.photoURL || defaultUserImage}
          referrerPolicy="no-referrer"
          alt=""
        />
      </div>
      <div
        ref={menuRef}
        className={"dropdown-menu border-2 border-red-800 px-4 py-2 " + (dropOpen ? "dropOpen" : "dropNotOpen")}>
        <p className="pb-5">Header</p>
        <ul className="flex flex-col gap-3">
          {/*  */}
          <li className="dropDownItem">
            <img src={""} alt="" />
            <Link to="/">Home</Link>
          </li>
          {/*  */}
          {/*  */}
          <li className="dropDownItem">
            <img src={""} alt="" />
            <Link to="/account">My Profile</Link>
          </li>
          {/*  */}
          {/*  */}
          <li className="dropDownItem">
            <img src={""} alt="" />
            <Link to="/settings">Settings</Link>
          </li>
          {/*  */}
          <LogoutButton />
        </ul>
      </div>
    </div>
  );
}
