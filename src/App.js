import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Settings from "./pages/History";
import HomePage from "./pages/HomePage";
import History from "./pages/History";
import Charts from "./pages/Charts";

function App() {
  return (
    <div className="h-screen min-h-screen  bg-white">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/history" element={<History />} />
          <Route path="/allcharts" element={<Charts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
