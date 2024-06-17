import { NavLink, Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="title">
          Digital Diary
        </Link>
        
        <div className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/post"}>Post</NavLink>
          <NavLink to={"/write"}>Write</NavLink>
          <NavLink to={"/auth?mode=login"}>Login</NavLink>
          <NavLink to={"/logout"}>Logout</NavLink>
        </div>
        <div className="search-bg">
          <div className="search-box">
            <button className="btn-search">
              <MagnifyingGlassIcon className="glass-icon"></MagnifyingGlassIcon>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Search here..."
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
