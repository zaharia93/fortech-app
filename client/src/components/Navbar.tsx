import { NavLink, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="navbar  bg-stone-900">
        <div className="flex-1">
          <button
            onClick={handleClick}
            className="btn btn-ghost normal-case text-3xl text-lime-500 "
          >
            Watchlist
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0  text-lime-500">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-zinc-700 text-lime-300" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-zinc-700 text-lime-300" : ""
                }
                to="/movies"
              >
                Movie List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-zinc-700 text-lime-300" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
