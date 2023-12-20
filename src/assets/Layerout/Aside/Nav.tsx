import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav h-1/2 flex flex-col justify-center">
      <Link
        to="/"
        className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
      >
        <img
          src="./src/assets/svg/dashboard-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Dashboard</p>
      </Link>
      <Link
        to="/courses"
        className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
      >
        <img
          src="./src/assets/svg/course-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Courses</p>
      </Link>
      <Link
        to="./materials"
        className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
      >
        <img
          src="./src/assets/svg/document-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Materials</p>
      </Link>
      <div className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4">
        <img
          src="./src/assets/svg/i-exam-qualification-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Result</p>
      </div>
      <div className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4">
        <img
          src="./src/assets/svg/request-added-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Request</p>
      </div>
    </div>
  );
}
