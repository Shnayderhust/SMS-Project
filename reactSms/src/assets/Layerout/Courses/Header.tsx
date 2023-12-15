export default function Header() {
  return (
    <header className="w-full h-24 flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">Welcome, Assenga</p>
      </div>
      <div className="flex w-72 justify-normal items-center">
        <div className="flex">
          <img
            src="./src/assets/svg/search-alt-svgrepo-com.svg"
            alt="search"
            className="w-8 h-8"
          />
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
          <p className="ml-2 text-lg font-semibold">Hust</p>
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
