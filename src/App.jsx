import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Food from "./pages/Food";
import Culturals from "./pages/Culturals";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/food" element={<Food />} />
        <Route path="/culturals" element={<Culturals />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;