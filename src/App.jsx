import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Food from "./pages/Food";
import Culturals from "./pages/Culturals";
import Fixtures from "./pages/Fixtures";

import logo from "../src/assets/logo.png";

function App() {
  return (
    <>
      <div className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          <img
            src={logo}
            alt="Sanskrithi Logo"
            className="h-20 object-contain mb-2"
          />

          <h1 className="text-3xl font-bold text-gray-800">
            Sanskrithi Youth Fest 2K26
          </h1>

        </div>
      </div>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/sports" element={<Sports />} />

          <Route path="/sports/:game" element={<Fixtures />} />

          <Route path="/food" element={<Food />} />

          <Route path="/culturals" element={<Culturals />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;