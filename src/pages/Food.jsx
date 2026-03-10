import { Link } from "react-router-dom";
import { FaUtensils, FaHamburger, FaIceCream } from "react-icons/fa";

function Food() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Food Stalls
        </h1>

        {/* Food Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaUtensils className="text-3xl text-green-600 mx-auto mb-3" />
            <h2 className="text-lg font-semibold">Traditional</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaHamburger className="text-3xl text-green-600 mx-auto mb-3" />
            <h2 className="text-lg font-semibold">Fast Food</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <FaIceCream className="text-3xl text-green-600 mx-auto mb-3" />
            <h2 className="text-lg font-semibold">Desserts</h2>
          </div>

        </div>

        {/* Register Button */}
        <div className="text-center mt-12">
          <a
            href="YOUR_FOOD_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Register Food Stall
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

export default Food;