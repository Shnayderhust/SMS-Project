export default function AsideFooter() {
  return (
    <div>
      <div className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4 mt-5">
        <img
          src="./src/assets/svg/help-circle-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Help</p>
      </div>
      <div className="flex items-center ml-8 h-14 w-52 hover:bg-indigo-50 hover:border-2 hover:border-violet-300 hover:rounded-2xl pl-4">
        <img
          src="./src/assets/svg/settings-svgrepo-com.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <p className="pl-3 text-xl">Settings</p>
      </div>
    </div>
  );
}
