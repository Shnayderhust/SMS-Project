export default function NoticeBoard() {
  return (
    <div className="w-4/12 h-full border-2 border-gray-600 rounded-lg ml-2 ">
      <div className="flex h-8 bg-gray-200 w-full border-b rounded-t-lg items-center pl-4 border-b-black">
        <p>Events</p>
      </div>

      <div className="w-full h-56 border-b border-b-black bg-indigo-400"></div>
      <div className="w-full h-10 p-2 flex items-center justify-around border-b border-gray-400">
        <div className="flex w-20 h-6 items-center justify-between hover:border-b-4 hover:border-blue-700">
          <img
            src="src/assets/svg/pin-circle-svgrepo-com.svg"
            className="w-5 h-5"
            alt=""
          />
          <li className="list-none font-medium text-sm">Sessions</li>
        </div>
        <div className="flex w-20 h-6 items-center justify-between hover:border-b-4 hover:border-blue-700">
          <img
            src="src/assets/svg/ticket-svgrepo-com.svg"
            className="w-5 h-5"
            alt=""
          />
          <li className="list-none font-medium text-sm">Events</li>
        </div>
        <div className="flex w-20 h-6 items-center justify-between hover:border-b-4 hover:border-blue-700">
          <img
            src="src/assets/svg/gift-svgrepo-com.svg"
            className="w-4 h-4"
            alt=""
          />
          <li className="list-none font-medium text-sm">Holiday</li>
        </div>
      </div>

      <div className="event_h bg-white p-2 pb-0 pt-0">
        <div className="news-board flex flex-col h-full mb-8 mt-1 overflow-scroll bg-white">
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
