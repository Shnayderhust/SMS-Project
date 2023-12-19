import CourseMain from "./CourseMain/CourseMain";
import Events from "./Events";
import Header from "./Header";

export default function Courses() {
  return (
    <main className="w-4/5 h-full p-2 py-0 overflow-y-scroll">
      <Header />
      <div className="mainContent h-auto w-full flex">
        <CourseMain />
        <Events />
      </div>
      {/* <div className="h-10" /> */}
    </main>
  );
}
