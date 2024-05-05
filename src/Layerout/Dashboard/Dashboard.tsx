import Analytics from "./Analytics";
import Header from "./Header";
import Timetable from "./Timetable";

export default function Main() {
  return (
    <main className="w-4/5 h-screen overflow-y-hidden p-2 ">
      <div className="h-64 mb-4">
        <Header />
        <Timetable />
      </div>
      <Analytics />
    </main>
  );
}
