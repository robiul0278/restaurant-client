import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";
import {
  MdPayments,
  MdDateRange,
  MdReviews,
  MdBookmarks,
  MdMenu,
  MdShoppingBag,
  MdContactMail,
  MdOutlineFoodBank,
  MdMenuOpen,
  MdBook,
  MdManageAccounts
} from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu font-semibold p-4 w-80  bg-yellow-500 text-base-content">
          <div className="p-5 font-bold font-serif">
            <h1 className="text-3xl">BISTRO BOSS</h1>
            <h3 className="text-2xl">Restaurant</h3>
          </div>

          {
            isAdmin ?
              <>
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaHome />
                    ADMIN HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    {" "}
                    <MdOutlineFoodBank />
                    ADD ITEMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageitems">
                    {" "}
                    <MdMenuOpen />
                    MANAGE ITEMS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    {" "}
                    <MdBook />
                    MANAGE BOOKING
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    {" "}
                    <MdManageAccounts />
                    ALL USERS
                  </NavLink>
                </li>
                <hr className="border m-5" />
                {/* OR ============ */}
              </> :
              <>
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaHome />
                    USER HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    {" "}
                    <MdDateRange />
                    RESERVATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    {" "}
                    <MdPayments />
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    {" "}
                    <FaCartPlus />
                    MY CART
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    {" "}
                    <MdReviews />
                    ADD REVIEW
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    {" "}
                    <MdBookmarks />
                    MY BOOKING
                  </NavLink>
                </li>
                <hr className="border m-5" />
              </>
          }




          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              {" "}
              <MdMenu />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              {" "}
              <MdShoppingBag />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              {" "}
              <MdContactMail />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
