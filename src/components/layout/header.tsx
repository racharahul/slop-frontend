import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StudentLifeLogo, UserIcon } from "../assets";
import { AuthContext } from "../authProvider";
import User, { toUser } from "../../data/User";
import api from "../../util/api";

const Header: React.FC = () => {
  const authContext = React.useContext(AuthContext);

  return (
    <nav className="navbar bg-light p-0">
      <div className="container-fluid p-0">
        <Link href="#">
          <a>
            <Image
              src={StudentLifeLogo}
              alt="student"
              height="60"
              width="60"
            ></Image>
          </a>
        </Link>

        {/* Dropdown Menu */}
        <div className="btn-group">
          <button
            className="btn btn-light btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link href="../home">
                <a className="dropdown-item">Home</a>
              </Link>
            </li>
            <li>
              <Link href="../clubs">
                <a className="dropdown-item">Clubs</a>
              </Link>
            </li>
            <li>
              <Link href="../events">
                <a className="dropdown-item">Events</a>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link href="../profile">
                <a className="dropdown-item">Profile</a>
              </Link>
            </li>
            <li>
              <Link href="../settings">
                <a className="dropdown-item">Settings</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <form className="d-flex px-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="btn-group">
          <button
            className="btn btn-light btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src={UserIcon} alt="profile" width="30" height="30"></Image>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => {
                  authContext.setAuthState(undefined);
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
