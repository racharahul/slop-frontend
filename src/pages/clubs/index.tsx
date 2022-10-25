import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import CodeX from "../../../assets/CodeX.png";
import kala from "../../../assets/kala.png";
import gusac from "../../../assets/gusac.png";
import gstudio from "../../../assets/gstudio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";

function Clubs() {
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
              Clubs
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

      {/* Body start */}

      <style jsx>{`
        .card {
          width: 18rem;
          height: 30rem;
        }
      `}</style>

      <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
        {/* CodeX Card */}
        <div className="col">
          <div className="card">
            <Image className="card-img-top" src={CodeX} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CodeX</h5>
              <p className="card-text">
                This Club reveals and supports your passion for coding. It
                builds up your strength about expressing yourself through it.
              </p>
              <a href="#" className="btn btn-light">
                More
              </a>
            </div>
          </div>
        </div>
        {/* Kalakrithi Card */}
        <div className="col">
          <div className="card">
            <Image className="card-img-top" src={kala} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Kalakrithi</h5>
              <p className="card-text">
                Arts & entertainment Cultural club GITAM Bengaluru 🖤 | Dance |
                Music |
              </p>
              <a href="#" className="btn btn-light">
                More
              </a>
            </div>
          </div>
        </div>
        {/* Gusac Card */}
        <div className="col">
          <div className="card">
            <Image className="card-img-top" src={gusac} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Gusac</h5>
              <p className="card-text">“तमसो मा ज्योतिर्गमय"</p>
              <a href="#" className="btn btn-light">
                More
              </a>
            </div>
          </div>
        </div>
        {/* Gstudio Card */}
        <div className="col">
          <div className="card">
            <Image
              className="card-img-top"
              src={gstudio}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Gstudio</h5>
              <p className="card-text">
                We decide the vibe of photography, much more than just media 😌
              </p>
              <Link href="/clubs/codex">
                <a href="#" className="btn btn-light">
                  More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

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

export default Clubs;
