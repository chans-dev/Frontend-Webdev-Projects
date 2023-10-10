import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-center">
      {" "}
      <nav className="flex bg-[rgba(134,131,215,0.2)] h-[10%] w-[99vw] rounded-2xl py-5 px-8 justify-between items-center fixed backdrop-blur-sm">
        <div className="text-white font-semibold text-3xl">LOGO</div>
        <ul className="flex text-white gap-8 justify-center items-center">
          <Link to={"/"} className="cursor-pointer">
            Home
          </Link>
          <Link to={"/about"} className="cursor-pointer">
            About Us
          </Link>
          <Link to={"/contact"} className="cursor-pointer">
            Contact Us
          </Link>
          <a
            href="https://github.com/Kartik8Dwivedi"
            target="_blank"
            className="cursor-pointer"
          >
            Github
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header