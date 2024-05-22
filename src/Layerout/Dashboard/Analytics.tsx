import AnalyticsBoard from "./AnalyticsBoard";
import NoticeBoard from "./NoticeBoard";

export default function Analytics() {
  return (
    <div className="analytics dashboard_h w-full flex">
      <AnalyticsBoard />
      <NoticeBoard />
    </div>
  );
}
