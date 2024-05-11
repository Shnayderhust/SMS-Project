import { Route, Routes } from "react-router-dom";
import Aside from "./Layerout/Aside/Aside";
import Dashboard from "./Layerout/Dashboard/Dashboard";
import Courses from "./Layerout/Courses/Courses";
import Materials from "./Layerout/Materials/Materials";
import AnalyticsMain from "./Layerout/Courses/CourseMain/Analytics/AnalyticsMain";
import MyCourses from "./Layerout/Courses/CourseMain/myCourses/MyCourses";

export default function App() {
  return (
    <>
      <Aside />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/materials" element={<Materials />}></Route>
        <Route path="/analytic" element={<AnalyticsMain />}></Route>
        <Route path="/myCourses" element={<MyCourses />}></Route>
      </Routes>
    </>
  );
}
