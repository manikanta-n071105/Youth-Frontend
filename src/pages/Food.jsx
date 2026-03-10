import { Link } from "react-router-dom";
import { FaUtensils, FaHamburger, FaIceCream } from "react-icons/fa";

import traditional from "../assets/traditional.jpg";
import fastfood from "../assets/fastfood.jpg";
import desserts from "../assets/desserts.jpg";

function Food() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 flex justify-center items-center gap-3">
          <FaUtensils className="text-green-600"/> Food Stalls
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={traditional} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaUtensils className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Traditional</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={fastfood} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaHamburger className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Fast Food</h2>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={desserts} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <FaIceCream className="text-2xl mb-2"/>
              <h2 className="text-xl font-bold">Desserts</h2>
            </div>
          </div>

        </div>

        <div className="text-center mt-14">
          <a
            href="https://forms.gle/jEXxNjQqHS3AQoFD9"
            target="_blank"
            className="bg-green-600 text-white px-10 py-3 rounded-full shadow-lg hover:bg-green-700 transition text-lg"
          >
            Register Food Stall
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

export default Food;