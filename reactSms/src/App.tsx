import { Route, Routes } from "react-router-dom";
import Aside from "./assets/Layerout/Aside/Aside";
import Main from "./assets/Layerout/Dashboard/Main";
import Courses from "./assets/Layerout/Courses/Courses";

export default function App() {
  return (
    <>
      <Aside />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </>
  );
}
