import Analytics from "./Analytics";
import Header from "./Header";
import Timetable from "./Timetable";

export default function Main() {
  return (
    <aside className="w-4/5 h-screen overflow-y-auto p-4 pt-1">
      <Header />
      <Timetable />
      <Analytics />
    </aside>
  );
}
