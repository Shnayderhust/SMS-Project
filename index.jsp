<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/main.css" />
    <link
      rel="shortcut icon"
      href="./src/svg/uni-svgrepo-com.svg"
      type="image/svg+xml"
    />
    <title>Stwork</title>
  </head>
  <body class="w-full h-screen flex overflow-y-hidden">
    <aside class="h-screen w-1/5 border-r border-slate-950">
      <div class="logo flex items-center pl-5 h-20">
        <img src="./src/svg/uni-svgrepo-com.svg" alt="logo" class="w-10 h-10" />
        <p class="pl-3 text-xl">STWORK</p>
      </div>
      <div class="nav h-1/2 flex flex-col justify-center">
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/dashboard-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Dashboard</p>
        </div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/course-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Courses</p>
        </div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/document-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Materials</p>
        </div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/i-exam-qualification-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Result</p>
        </div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/request-added-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Request</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="w-56 h-24 rounded-2xl border-2 border-slate-300"></div>
      </div>
      <div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-purple-100 hover:rounded-2xl pl-4 mt-5"
        >
          <img
            src="./src/svg/help-circle-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Help</p>
        </div>
        <div
          class="flex items-center ml-8 h-14 w-52 hover:bg-purple-100 hover:rounded-2xl pl-4"
        >
          <img
            src="./src/svg/settings-svgrepo-com.svg"
            alt="logo"
            class="w-8 h-8"
          />
          <p class="pl-3 text-xl">Settings</p>
        </div>
      </div>
    </aside>
    <main class="w-4/5 h-screen overflow-y-auto p-4 pt-1">
      <header class="w-full h-24 flex justify-between items-center">
        <div>
          <p class="text-lg font-semibold">Welcome, Shnayderhust</p>
        </div>
        <div class="flex w-72 justify-normal items-center">
          <div class="flex">
            <img
              src="./src/svg/search-alt-svgrepo-com.svg"
              alt="search"
              class="w-8 h-8"
            />
            <img
              src="./src/svg/notification-6-svgrepo-com.svg"
              alt="notification"
              class="w-8 h-8"
            />
          </div>
          <div class="profile flex items-center">
            <img
              src="./src/svg/profile-circle-svgrepo-com.svg"
              alt="profile"
              class="w-8 h-8 ml-2"
            />
            <p class="ml-2 text-lg font-semibold">Shnayder Hust</p>
            <img
              src="./src/svg/dropdown-arrow-svgrepo-com.svg"
              alt="dropdown"
              class="w-8 h-8"
            />
          </div>
        </div>
      </header>
      <div class="timetable h-40 w-full">
        <p>Today's Timetable</p>
        <div class="w-full h-32">
          <div class="w-90 h-32">
            <div
              class="flex h-32 w-full overflow-y-hidden overflow-x-scroll items-end bg-red ml-4"
            >
              <div
                class="h-28 w-64 rounded-md border-2 border-violet-300 p-2 flex flex-col justify-between bg-indigo-50 mr-4"
              >
                <div class="time flex">
                  <p class="text-base font-bold text-blue-600">9:00 am</p>
                  <p class="time text-base font-thin text-blue-600">
                    -10:00 am
                  </p>
                </div>
                <div>
                  <p class="font-bold">Database Management</p>
                  <p class="font-thin">ERD and Normalization</p>
                </div>
              </div>

              <div
                class="w-64 h-28 rounded-md border-2 border-violet-300 p-2 flex flex-col justify-between bg-indigo-50 mr-4"
              >
                <div class="time flex">
                  <p class="text-base font-bold text-blue-600">9:00 am</p>
                  <p class="time text-base font-thin text-blue-600">
                    -10:00 am
                  </p>
                </div>
                <div>
                  <p class="font-bold">Database Management</p>
                  <p class="font-thin">ERD and Normalization</p>
                </div>
              </div>
              <div
                class="w-64 h-28 rounded-md border-2 border-violet-300 p-2 flex flex-col justify-between bg-indigo-50 mr-4"
              >
                <div class="time flex">
                  <p class="text-base font-bold text-blue-600">9:00 am</p>
                  <p class="time text-base font-thin text-blue-600">
                    -10:00 am
                  </p>
                </div>
                <div>
                  <p class="font-bold">Database Management</p>
                  <p class="font-thin">ERD and Normalization</p>
                </div>
              </div>
              <div
                class="w-64 h-28 rounded-md border-2 border-violet-300 p-2 flex flex-col justify-between bg-indigo-50 mr-4"
              >
                <div class="time flex">
                  <p class="text-base font-bold text-blue-600">9:00 am</p>
                  <p class="time text-base font-thin text-blue-600">
                    -10:00 am
                  </p>
                </div>
                <div>
                  <p class="font-bold">Database Management</p>
                  <p class="font-thin">ERD and Normalization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="analytics h-full w-full mt-4 flex">
        <div class="w-8/12 h-full mr-2">
          <div class="flex justify-between mb-10">
            <div
              class="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3"
            >
              <div>
                <p class="font-medium">Atendance</p>
                <p class="font-thin">This Semister</p>
              </div>
              <div class="flex justify-center">
                <div
                  class="progress-circle border-4 border-white rounded-full w-40 h-40 relative"
                >
                  <div
                    class="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"
                  ></div>

                  <div
                    class="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"
                  ></div>

                  <p
                    class="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl"
                  >
                    97%
                  </p>
                </div>
              </div>
              <div class="flex justify-evenly mt-3">
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
                  <p class="text-xs text-gray-500">Complete</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
                  <p class="text-xs text-gray-500">Pending</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
                  <p class="text-xs text-gray-500">Not Complete</p>
                </div>
              </div>
            </div>
            <div
              class="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3"
            >
              <div>
                <p class="font-medium">Atendance</p>
                <p class="font-thin">This Semister</p>
              </div>
              <div class="flex justify-center">
                <div
                  class="progress-circle border-4 border-white rounded-full w-40 h-40 relative"
                >
                  <div
                    class="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"
                  ></div>

                  <div
                    class="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"
                  ></div>

                  <p
                    class="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl"
                  >
                    97%
                  </p>
                </div>
              </div>
              <div class="flex justify-evenly mt-3">
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
                  <p class="text-xs text-gray-500">Complete</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
                  <p class="text-xs text-gray-500">Pending</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
                  <p class="text-xs text-gray-500">Not Complete</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mb-10">
            <div
              class="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3"
            >
              <div>
                <p class="font-medium">Atendance</p>
                <p class="font-thin">This Semister</p>
              </div>
              <div class="flex justify-center">
                <div
                  class="progress-circle border-4 border-white rounded-full w-40 h-40 relative"
                >
                  <div
                    class="border-4 border-purple-600 rounded-full w-full h-full absolute circular-clip"
                  ></div>

                  <div
                    class="border-4 border-yellow-300 rounded-full w-full h-full absolute circular-clip transform-circle"
                  ></div>

                  <p
                    class="absolute top-1/2 left-1/2 transform-text font-extrabold text-2xl"
                  >
                    97%
                  </p>
                </div>
              </div>
              <div class="flex justify-evenly mt-3">
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-purple-600 mr-1"></div>
                  <p class="text-xs text-gray-500">Complete</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-yellow-200 mr-1"></div>
                  <p class="text-xs text-gray-500">Pending</p>
                </div>
                <div class="flex items-center">
                  <div class="w-5 h-5 rounded-full bg-gray-300 mr-1"></div>
                  <p class="text-xs text-gray-500">Not Complete</p>
                </div>
              </div>
            </div>
            <div
              class="w-6/12 h-72 mr-4 border-2 border-indigo-400 rounded-lg p-3"
            >
              <div>
                <p class="font-medium">Pending Assignment</p>
                <p class="font-thin">This Semister</p>
              </div>

              <div
                class="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2"
              >
                <div>
                  <p class="text-sm text-purple-400 font-bold">
                    CP 212 Assignment No.02
                  </p>
                  <p class="text-xs text-gray-500 font-medium">
                    System Design Complexity
                  </p>
                </div>
                <p
                  class="Assignment-DueDate text-yellow-400 text-sm font-medium"
                >
                  Due Tommorow
                </p>
              </div>
              <div
                class="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2"
              >
                <div>
                  <p class="text-sm text-purple-400 font-bold">
                    CP 212 Assignment No.02
                  </p>
                  <p class="text-xs text-gray-500 font-medium">
                    System Design Complexity
                  </p>
                </div>
                <p
                  class="Assignment-DueDate text-yellow-400 text-sm font-medium"
                >
                  Due Tommorow
                </p>
              </div>
              <div
                class="assignment w-full h-16 bg-indigo-50 rounded-xl border-2 border-violet-300 flex p-2 justify-between mb-2"
              >
                <div>
                  <p class="text-sm text-purple-400 font-bold">
                    CP 212 Assignment No.02
                  </p>
                  <p class="text-xs text-gray-500 font-medium">
                    System Design Complexity
                  </p>
                </div>
                <p
                  class="Assignment-DueDate text-yellow-400 text-sm font-medium"
                >
                  Due Tommorow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-4/12 h-full border-2 border-indigo-400 rounded-lg ml-2 mr-5 p-2"
        >
          <div class="flex flex-col justify-between h-12">
            <p>Notice board</p>
            <p class="text-sm text-gray-500">12 November 2023</p>
          </div>

          <div class="h-90 -500 mt-4 bg-white">
            <div
              class="news-board flex flex-col h-full mb-10 mt-1 overflow-scroll bg-white"
            >
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
              <div class="single-news flex flex-col mb-4">
                <div class="flex items-baseline">
                  <p class="text-purple-600 font-semibold pr-1">
                    David Thompson
                  </p>
                  <p class="news-time font-semibold text-gray-400 text-xs">
                    25 minutes ago
                  </p>
                </div>
                <div>
                  <p class="news text-sm font-medium text-gray-600">
                    Donate your gently used books to the library.<br />Collection
                    box are available on the entrace. Lets<br />
                    Promotes a Love for reading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <script src="./src/js/main.js"></script>
  </body>
</html>
