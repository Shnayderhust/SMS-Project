export default function NoticeBoard() {
  return (
    <div className="w-4/12 h-full border-2 border-indigo-400 rounded-lg ml-2 mr-5 ">
      <div className="flex h-8 bg-gray-300 w-full border-b rounded-t-lg items-center pl-4 border-b-black">
        <p>Tasks & Events</p>
      </div>

      <div className="w-full h-56 border-b border-b-black "></div>
      <div className="w-full h-6 p-2">
        <p className=" text-gray-500 text-sm ">12 November 2023</p>
      </div>

      <div className="h-3/5 -500 bg-white p-2">
        <div className="news-board flex flex-col h-full mb-10 mt-1 overflow-scroll bg-white">
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>

          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Algorithm</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">10:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">Lissa Rayn</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Data Science</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">14:00</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">Cassandra Joe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">System Management</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">7:20</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">Smayra Wick</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">Raven Right</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
          <div className="single-event h-14 w-full flex mb-4 border-b border-b-black">
            <div className="w-5/6  h-full">
              <div className="w-full h-1/2  flex items-center pl-1">
                <p className="font-bold">Probability</p>
              </div>
              <div className="w-full h-1/2  flex items-center pl-1">
                <div className="pr-4">
                  <p className="text-gray-500 font-bold">8:30</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold">John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="src/assets/svg/tick-circle-svgrepo-com.svg"
                className="h-5 w-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
