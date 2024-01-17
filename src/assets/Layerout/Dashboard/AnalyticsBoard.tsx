export default function AnalyticsBoard() {
  return (
    <div className="w-8/12 h-038 mr-2">
      <div className="flex justify-between mb-10">
        <div className="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3">
          <div>
            <p className="font-medium">Atendance</p>
            <p className="font-thin">This Semister</p>
          </div>
          <div className="flex justify-center">
            <div className="progress-circle border-4 border-white rounded-full w-40 h-40 relative">
              <div className="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"></div>

              <div className="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"></div>

              <p className="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl">
                97%
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-3">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
              <p className="text-xs text-gray-500">Not Complete</p>
            </div>
          </div>
        </div>
        <div className="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3">
          <div>
            <p className="font-medium">Atendance</p>
            <p className="font-thin">This Semister</p>
          </div>
          <div className="flex justify-center">
            <div className="progress-circle border-4 border-white rounded-full w-40 h-40 relative">
              <div className="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"></div>

              <div className="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"></div>

              <p className="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl">
                97%
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-3">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
              <p className="text-xs text-gray-500">Not Complete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-10">
        <div className="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3">
          <div>
            <p className="font-medium">Atendance</p>
            <p className="font-thin">This Semister</p>
          </div>
          <div className="flex justify-center">
            <div className="progress-circle border-4 border-white rounded-full w-40 h-40 relative">
              <div className="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"></div>

              <div className="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"></div>

              <p className="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl">
                97%
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-3">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
              <p className="text-xs text-gray-500">Not Complete</p>
            </div>
          </div>
        </div>
        <div className="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3 overflow-scroll">
          <div>
            <p className="font-medium">Pending Assignment</p>
            <p className="font-thin">This Semister</p>
          </div>

          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
          <div className="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2">
            <div>
              <p className="text-sm text-purple-400 font-bold">
                CP 212 Assignment No.02
              </p>
              <p className="text-xs text-gray-500 font-medium">
                System Design Complexity
              </p>
            </div>
            <p className="Assignment-DueDate text-yellow-400 text-sm font-medium">
              Due Tommorow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
