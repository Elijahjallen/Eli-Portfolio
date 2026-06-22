import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuardianOps from "./pages/GuardianOps";
import RDAS from "./pages/RDAS";
import AllenInk from "./pages/AllenInk";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guardianops" element={<GuardianOps />} />
      <Route path="/rdas" element={<RDAS />} />
      <Route path="/allen-ink" element={<AllenInk />} />
    </Routes>
  );
}



export default App;