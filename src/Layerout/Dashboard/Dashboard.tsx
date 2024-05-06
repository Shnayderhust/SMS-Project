import Analytics from "./Analytics";
import Header from "./Header";
import Timetable from "./Timetable";

export default function Main() {
  return (
    <main className="w-4/5 h-screen overflow-y-hidden px-2 py-1 ">
      <Header />
      <Timetable />
      <Analytics />
    </main>
  );
}
