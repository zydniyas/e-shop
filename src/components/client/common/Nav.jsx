import React from "react";
("use client");

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Nav() {
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
      <div className="flex items-center  md:order-2 ">
        <Button
          onClick={() => navigate("login")}
          className="bg-white text-black"
          size="sm"
        >
          Log in
        </Button>
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
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
