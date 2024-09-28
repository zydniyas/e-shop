import React, { useContext } from "react";
("use client");

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/user-context/UserContext";

function Nav() {
  const { userDetails, signOut } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Navbar className="bg-blue-500 rounded-[0px]" fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="https://www.shutterstock.com/image-vector/letter-e-online-shop-logo-260nw-1540000625.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          e-shop
        </span>
      </Navbar.Brand>
      <div className="flex items-center  md:order-2 gap-5 ">
        <button
          type="button"
          className="text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </button>
        {userDetails.accessToken === null ? (
          <button
            onClick={() => navigate("login")}
            type="button"
            className="bg-white text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
          >
            Log in
            <svg
              className="w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        ) : (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={userDetails.image} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{userDetails.userName}</span>
              <span className="block truncate text-sm font-medium">
                {userDetails.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
          </Dropdown>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white" href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
