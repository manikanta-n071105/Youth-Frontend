import { Link } from "react-router-dom";
import { FaRunning, FaUtensils, FaTheaterMasks } from "react-icons/fa";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      

      {/* Section Cards */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-6">

        {/* Sports */}
        <Link to="/sports">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 text-center">

            <FaRunning className="text-4xl text-blue-600 mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
              Sports
            </h2>

          </div>
        </Link>

        {/* Food */}
        <Link to="/food">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 text-center">

            <FaUtensils className="text-4xl text-green-600 mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
              Food Stalls
            </h2>

          </div>
        </Link>

        {/* Culturals */}
        <Link to="/culturals">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1 text-center">

            <FaTheaterMasks className="text-4xl text-purple-600 mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
              Culturals
            </h2>

          </div>
        </Link>

      </div>

    </div>
  );
}

export default Home;