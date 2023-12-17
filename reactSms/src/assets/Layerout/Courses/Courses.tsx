import CourseMain from "./CourseMain/CourseMain";
import Events from "./Events";
import Header from "./Header";

export default function Courses() {
  return (
    <main className="w-4/5 h-screen  p-2 pt-0 overflow-y-scroll">
      <Header />
      <div className="mainContent h-screen w-full flex">
        <CourseMain />
        <Events />
      </div>
    </main>
  );
}
