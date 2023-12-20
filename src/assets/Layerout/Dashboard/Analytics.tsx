import AnalyticsBoard from "./AnalyticsBoard";
import NoticeBoard from "./NoticeBoard";

export default function Analytics() {
  return (
    <div className="analytics h-full w-full flex">
      <AnalyticsBoard />
      <NoticeBoard />
    </div>
  );
}
