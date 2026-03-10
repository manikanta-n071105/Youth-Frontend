import { Link } from "react-router-dom";
import { FaChess, FaTableTennis, FaCircle } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";

import carrom from "../assets/carrom.jpg";
import chess from "../assets/chess.jpg";
import badminton from "../assets/badminton.jpg";
import tabletennis from "../assets/tabletennis.jpg";

function Sports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 flex justify-center items-center gap-3">
          <FaTableTennis className="text-blue-600"/> Sports Events
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={carrom} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaCircle className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Carrom</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={chess} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaChess className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Chess</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={badminton} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <GiShuttlecock className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Shuttle</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={tabletennis} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaTableTennis className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Table Tennis</h2>
            </div>
          </div>

        </div>

        <div className="text-center mt-14">
          <a
            href="https://forms.gle/r3khm1mLDdwkKFhs8" 
            target="_blank"
            className="bg-indigo-600 text-white px-10 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition text-lg"
          >
            Register for Sports
          </a>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Sports;