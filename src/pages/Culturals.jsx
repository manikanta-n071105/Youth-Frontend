import { Link } from "react-router-dom";
import { 
  FaMusic, 
  FaUsers, 
  FaTheaterMasks, 
  FaVideo 
} from "react-icons/fa";

function Culturals() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Cultural Events
        </h1>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaMusic className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Solo Dance</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaUsers className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Group Dance</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaUsers className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Flash Mob</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaTheaterMasks className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Skit</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaVideo className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Reels</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaMusic className="text-3xl text-purple-600 mx-auto mb-3" />
            <h2 className="font-semibold">Singing</h2>
          </div>

        </div>

        {/* Register Button */}
        <div className="text-center mt-12">
          <a
            href="YOUR_CULTURALS_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Register for Culturals
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Culturals;