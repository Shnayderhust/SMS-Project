import CourseAnalitics from "./CourseMain/CourseAnalitics";
import CourseList from "./CourseMain/CourseList";
import CourseQuote from "./CourseMain/CourseQuote";
import Events from "./Events";
import Header from "./Header";

export default function Courses() {
  return (
    <main className="w-4/5 h-screen overflow-y-auto p-4 pt-1">
      <Header />
      <div className="mainContent h-full w-full mt-4 flex">
        <div className="h-full w-8/12">
          <CourseQuote />
          <CourseList />
          <CourseAnalitics />
        </div>
        <Events />
      </div>
    </main>
  );
}
