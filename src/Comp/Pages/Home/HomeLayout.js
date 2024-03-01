import React from "react";
import { Link } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <div className="flex justify-center">
        <Link to="/games">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Games</button>
        </Link>
      </div>
    </div>
  );
}
