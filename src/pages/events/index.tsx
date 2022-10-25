import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import AuthComponent from "../../components/layout/authComp";
import React from "react";
import { AuthContext } from "../../components/authProvider";

function Events() {
  const authContext = React.useContext(AuthContext);
  const widget = (
    <div className="root">
      <nav className="navbar bg-light p-0">
        <div className="container-fluid p-0">
          <Link href="#">
            <a>
              <Image src={student} alt="student" height="60" width="60"></Image>
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
              Events
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
              <Image src={user} alt="profile" width="30" height="30"></Image>
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

      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
        integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Events;
