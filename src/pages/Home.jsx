import { Link } from "react-router-dom";
import { FaFutbol, FaUtensils, FaTheaterMasks } from "react-icons/fa";

import sports from "../assets/sports.png";
import food from "../assets/foodstalls.png";
import culturals from "../assets/culturals.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Sanskrithi Youth Fest 2K26
        </h1>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Sports */}
          <Link to="/sports">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">

              <img
                src={sports}
                alt="Sports Events"
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <FaFutbol className="text-3xl mb-3"/>
                <h2 className="text-2xl font-bold">Sports</h2>
                <p className="text-sm mt-1">
                  Chess • Carrom • Table Tennis • Shuttle
                </p>
              </div>

            </div>
          </Link>

          {/* Food */}
          <Link to="/food">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">

              <img
                src={food}
                alt="Food Stalls"
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <FaUtensils className="text-3xl mb-3"/>
                <h2 className="text-2xl font-bold">Food Stalls</h2>
                <p className="text-sm mt-1">
                  Traditional • Fast Food • Desserts
                </p>
              </div>

            </div>
          </Link>

          {/* Culturals */}
          <Link to="/culturals">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">

              <img
                src={culturals}
                alt="Cultural Events"
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <FaTheaterMasks className="text-3xl mb-3"/>
                <h2 className="text-2xl font-bold">Culturals</h2>
                <p className="text-sm mt-1">
                  Dance • Singing • Skit • Flash Mob • Reels
                </p>
              </div>

            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;