import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>CONTACT us</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaCartPlus />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link>
              {" "}
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-2xl mx-auto fixed py-5 z-10 bg-opacity-20 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-black font-bold rounded-box w-52"
            >
              {navitems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold font-serif text-4xl">
            RESTAURANT
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <Link className=" font-bold">SIGN OUT</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
