import Analytics from "./Analytics";
import Header from "./Header";
// import Timetable from "./Timetable";

export default function Main() {
  return (
    <main className="w-4/5 h-full overflow-y-hidden p-4 py-0">
      <Header />
      {/* <Timetable /> */}
      <Analytics />
    </main>
  );
}
