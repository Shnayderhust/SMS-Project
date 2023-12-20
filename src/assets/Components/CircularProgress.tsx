export default function CircularProgress() {
  return (
    <div className="relative w-4/5 h-4/5 flex items-center justify-center">
      <div className="outerdiv rounded-full shadow w-full h-full absolute  flex items-center justify-center">
        <div className="innerdiv h-3/4 w-3/4  rounded-full"></div>
      </div>
      <img
        src="src/assets/svg/duotone-circle-svgrepo-com.svg"
        className=" absolute left-0 top-0"
        alt=""
      />
    </div>
  );
}
