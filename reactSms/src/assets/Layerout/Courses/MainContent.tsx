import AnalyticsBoard from "./Analytics";
import Events from "./Events";

export default function Analytics() {
  return (
    <div className="analytics h-full w-full mt-4 flex">
      <AnalyticsBoard />
      <Events />
    </div>
  );
}
