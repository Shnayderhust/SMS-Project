import Analytics from "../Dashboard/Analytics";
import Header from "./Header";
import Timetable from "../Dashboard/Timetable";

export default function Courses() {
  return (
    <main className="w-4/5 h-screen overflow-y-auto p-4 pt-1">
      <Header />
      <Timetable />
      <Analytics />
    </main>
  );
}
