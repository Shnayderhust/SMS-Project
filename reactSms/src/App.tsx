import { Route, Routes } from "react-router-dom";
import Aside from "./assets/Layerout/Aside/Aside";
import Dashboard from "./assets/Layerout/Dashboard/Dashboard";
import Courses from "./assets/Layerout/Courses/Courses";
import Materials from "./assets/Layerout/Materials/Materials";

export default function App() {
  return (
    <>
      <Aside />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/materials" element={<Materials />}></Route>
      </Routes>
    </>
  );
}
