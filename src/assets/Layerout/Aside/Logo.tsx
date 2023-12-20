import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo flex items-center pl-5 h-20">
      <img
        src="./src/assets/svg/uni-svgrepo-com.svg"
        alt="logo"
        className="w-10 h-10"
      />
      <Link to="/" className="pl-3 text-xl">
        STWORK
      </Link>
    </div>
  );
}
