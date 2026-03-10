import { Link } from "react-router-dom";
import { FaMusic, FaUsers, FaTheaterMasks, FaVideo } from "react-icons/fa";

import solodance from "../assets/solodance.jpg";
import groupdance from "../assets/groupdance.jpg";
import flashmob from "../assets/flashmob.jpg";
import drama from "../assets/drama.jpg";
import reels from "../assets/reels.jpg";
import singing from "../assets/singing.jpg";

function Culturals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 flex justify-center items-center gap-3">
          <FaTheaterMasks className="text-purple-600"/> Cultural Events
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <EventCard img={solodance} icon={<FaMusic/>} title="Solo Dance"/>
          <EventCard img={groupdance} icon={<FaUsers/>} title="Group Dance"/>
          <EventCard img={flashmob} icon={<FaUsers/>} title="Flash Mob"/>
          <EventCard img={drama} icon={<FaTheaterMasks/>} title="Skit"/>
          <EventCard img={reels} icon={<FaVideo/>} title="Reels"/>
          <EventCard img={singing} icon={<FaMusic/>} title="Singing"/>

        </div>

        <div className="text-center mt-14">
          <a
            href="https://forms.gle/gLSepLWUuNMpLDNN9"
            target="_blank"
            className="bg-purple-600 text-white px-10 py-3 rounded-full shadow-lg hover:bg-purple-700 transition text-lg"
          >
            Register for Culturals
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

function EventCard({ img, icon, title }) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg">
      <img src={img} className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"/>
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <div className="text-2xl mb-2">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
}

export default Culturals;