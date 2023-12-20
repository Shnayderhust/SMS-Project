export default function Header() {
  return (
    <header className="w-full h-01 flex justify-between items-center">
      <div className="searchbar">
        <div className="w-56 h-10  rounded-2xl border-gray-500 border flex items-center pl-2">
          <img
            src="./src/assets/svg/search-alt-svgrepo-com.svg"
            alt="search"
            className="w-8 h-8 pr-4"
          />
          <p>Search</p>
        </div>
      </div>
      <div className="flex w-72 justify-normal items-center">
        <div className="flex">
          <img
            src="./src/assets/svg/notification-6-svgrepo-com.svg"
            alt="notification"
            className="w-8 h-8"
          />
        </div>
        <div className="profile flex items-center">
          <img
            src="./src/assets/svg/profile-circle-svgrepo-com.svg"
            alt="profile"
            className="w-8 h-8 ml-2"
          />
          <p className="ml-2 text-lg font-semibold">Shnayder Hust</p>
          <img
            src="./src/assets/svg/dropdown-arrow-svgrepo-com.svg"
            alt="dropdown"
            className="w-8 h-8"
          />
        </div>
      </div>
    </header>
  );
}
