import { Link } from "react-router-dom";
import myLogo from "../../assets/svg/uni-svgrepo-com.svg";

export default function Logo() {
  return (
    <div className="logo flex items-center pl-5 h-20">
      <img
        src={myLogo}
        alt="logo"
        className="w-10 h-10"
      />
      <Link to="/" className="pl-3 text-xl">
        STWORK
      </Link>
    </div>
  );
}
