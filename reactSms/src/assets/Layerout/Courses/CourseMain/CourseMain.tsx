export default function CourseMain() {
  return (
    <div className="h-full w-8/12 flex flex-col justify-between">
      <div className="courseMainbranch w-full h-96 flex">
        <div className="w-1/2 h-full bg-indigo-100 mr-1 rounded-xl"></div>
        <div className="w-1/2 h-full bg-violet-500 ml-1 rounded-xl"></div>
      </div>
      <div className="courseMainbranch w-full flex">
        <div className="w-1/2 h-full bg-green-100 mr-1 rounded-xl"></div>
        <div className="w-1/2 h-full bg-blue-500 ml-1 rounded-xl"></div>
      </div>
    </div>
  );
}
