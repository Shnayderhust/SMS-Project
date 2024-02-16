export default function CourseMain() {
  return (
    <div className="h-100 w-8/12 flex flex-col justify-around flex-grow">
      <div className="courseMainbranch w-full h-60 flex">
        <div className="analytics w-1/2 h-full border border-gray-400 mr-1 rounded-xl">
          <div className="h-16 rounded-t-xl flex items-center justify-between p-5 border-b border-gray-400">
            <div className="flex items-center">
              <img
                src="src/assets/svg/analytics-line-svgrepo-com.svg"
                className="w-8 h-8 mr-2"
                alt=""
              />
              <h1 className="text-xl">Analytics</h1>
            </div>
            <button className="w-20 h-8 rounded-lg bg-white border border-gray-400">
              See All
            </button>
          </div>
          <div className="h-2/5 bg-green-300"></div>
          <div className="h-2/5 bg-purple-300 rounded-b-xl pb-5"></div>
        </div>

        <div className="myCourses w-1/2 h-full border border-gray-400 mr-1 rounded-xl">
          <div className="h-16 rounded-t-xl flex items-center justify-between p-5 border-b border-gray-400">
            <div className="flex items-center">
              <img
                src="src/assets/svg/course-svgrepo-com.svg"
                className="w-8 h-8 mr-2"
                alt=""
              />
              <h1 className="text-xl">My Courses</h1>
            </div>
            <button className="w-20 h-8 rounded-lg bg-white border border-gray-400">
              See All
            </button>
          </div>
          <div className="h-4/5 bg-blue-700"></div>
        </div>
      </div>

      <div className="courseMainbranch w-full h-96 flex">
        <div className="Accomplishments w-1/2 h-full border border-gray-400 mr-1 rounded-xl">
          <div className="h-16 rounded-t-xl flex items-center justify-between p-5 border-b border-gray-400">
            <div className="flex items-center">
              <img
                src="src/assets/svg/win-svgrepo-com.svg"
                className="w-8 h-8 mr-2"
                alt=""
              />
              <h1 className="text-xl">Accomplishments</h1>
            </div>
            <button className="w-20 h-8 rounded-lg bg-white border border-gray-400">
              See All
            </button>
          </div>
          <div className="h-1/5 bg-blue-700"></div>
          <div className="h-3/5 bg-violet-500 rounded-b-xl pb-5"></div>
        </div>
        <div className="Tasks w-1/2 h-full border border-gray-400 mr-1 rounded-xl">
          <div className="h-16 rounded-t-xl flex items-center justify-between p-5 border-b border-gray-400">
            <div className="flex items-center">
              <img
                src="src/assets/svg/task-square-svgrepo-com.svg"
                className="w-8 h-8 mr-2"
                alt=""
              />
              <h1 className="text-xl">Tasks & Notes</h1>
            </div>
            <button className="w-20 h-8 rounded-lg bg-white border border-gray-400">
              See All
            </button>
          </div>
          <div className="h-4/5 bg-yellow-100"></div>
        </div>
      </div>
    </div>
  );
}
