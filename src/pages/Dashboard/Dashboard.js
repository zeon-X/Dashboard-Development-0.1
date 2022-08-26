import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../pages/Loading/Loading";
import { signOut } from "firebase/auth";

const Dashboard = ({ children }) => {
  const logout = () => {
    signOut(auth);
  };
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  return (
    <div>
      <div className="_db_container shadow-lg">
        <div className="navbar bg-base-100">
          {/* TOGGLE BUTTON  */}
          <div className="flex-none">
            <label
              for="my-drawer-2"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* LOGO OF THE ADMIN DB  */}
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">
              Seller-Dashboard
            </a>
          </div>

          {/* SEARCH & NOTIFICATION BTN  */}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>

          {/* PROFILE */}
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828833.png"
                    alt=""
                  />
                )}
              </div>
            </label>
            {user ? (
              <ul
                tabindex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            ) : (
              <ul
                tabindex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    onClick={() => {
                      navigate("/login");
                    }}
                    className=""
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* NAVBAR end---------------------- */}

      {/* DRAWER start--------------------- */}
      <div className="drawer drawer-mobile">
        {/* BTN FOR DRAWER  */}

        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {/* <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}

          {/* ALL THE PAGES WILL RENDER HERE  !!!!!!!!!!!!!!!!*/}
          <div className="children_container ">{children}</div>
        </div>

        {/* LINKS  */}
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content db_ul">
            {/* <!-- Sidebar content here --> */}

            {/* PRODUCT  */}
            <div className="flex items-center ">
              <p className="font-bold text-xl ml-4 mb-2">Product</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>

            <li>
              <NavLink to="/product-add">Add New Product</NavLink>
            </li>
            <li className="mb-5">
              <NavLink to="/product-show">Show All Product</NavLink>
            </li>

            {/* ORDER  */}
            <div className="flex items-center ">
              <p className="font-bold text-xl ml-4 mb-2">Orders</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>

            <li>
              <NavLink to="/orders-pending">Pending Orders</NavLink>
            </li>
            <li className="mb-5">
              <NavLink to="/orders-show">Show All Orders</NavLink>
            </li>
            {/* <li className="mb-5">
              <NavLink to="/orders-create">Create New Order</NavLink>
            </li> */}

            {/* User  */}
            <div className="flex items-center ">
              <p className="font-bold text-xl ml-4 mb-2">Users</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <li>
              <NavLink to="/users-show">Show All Users</NavLink>
            </li>
            <li>
              <NavLink to="/admins-create">Show All Admins</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
