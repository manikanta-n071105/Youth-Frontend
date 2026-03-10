import { Link } from "react-router-dom";
import { FaTableTennis, FaChess, FaRunning, FaGamepad } from "react-icons/fa";

function Sports() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Sports Events
        </h1>

        {/* Sports Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaGamepad className="text-3xl text-blue-600 mx-auto mb-3" />
            <h2 className="font-semibold">Carroms</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaChess className="text-3xl text-blue-600 mx-auto mb-3" />
            <h2 className="font-semibold">Chess</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaRunning className="text-3xl text-blue-600 mx-auto mb-3" />
            <h2 className="font-semibold">Shuttle</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaTableTennis className="text-3xl text-blue-600 mx-auto mb-3" />
            <h2 className="font-semibold">Table Tennis</h2>
          </div>

        </div>

        {/* Register Button */}
        <div className="text-center mt-12">
          <a
            href="YOUR_SPORTS_GOOGLE_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Register for Sports
          </a>
        </div>

        {/* Back Button */}
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