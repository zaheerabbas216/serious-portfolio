import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
