export default function Box() {
  return (
    <div className="flex w-full h-28 justify-center px-4 mt-4">
      <div className="w-full h-full  border-t-2  border-slate-300 flex items-center">
        <img
          className="w-10 h-10 mr-2"
          src="src/assets/svg/profile-circle-svgrepo-com.svg"
          alt=""
        />
        <div className="text-sm mr-1">
          <p className="font-semibold">Shnayderhust</p>
          <p>Shnayderhust@gmail.com</p>
        </div>
        <img
          className="w-5 h-5"
          src="src/assets/svg/right-arrow-svgrepo-com.svg"
          alt=""
        />
      </div>
    </div>
  );
}
