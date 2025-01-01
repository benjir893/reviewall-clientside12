import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, signout } = useContext(AuthContext);

  const handleLogout = () => {
    signout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="navbar fixed z-10 max-w-6xl bg-base-100 opacity-35">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>OUR MENU</NavLink>
                <ul className="p-2">
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>CONTACT US</a>
              </li>
              <li>
                <a>DASHBOARD</a>
              </li>
              <li>
                <Link to={"/order/salad"}>ORDER</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <details>
                <summary>
                  <NavLink to={"/menu"}>OUR MENU</NavLink>
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
            <li>
              <a>DASHBOARD</a>
            </li>
            <li>
              <Link to={"/order"}>ORDER</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link>
                <button onClick={handleLogout} className="btn btn-ghost">
                  LOGOUT
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn">LOGIN</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
