import CourseMain from "./CourseMain/CourseMain";
import Events from "./Events";
import Header from "./Header";

export default function Courses() {
  return (
    <main className="w-4/5 h-screen p-2 py-0 overflow-y-scroll">
      <Header />
      <div className="mainContent main_h w-full flex p-2">
        <CourseMain />
        <Events />
      </div>
      {/* <div className="h-10" /> */}
    </main>
  );
}
