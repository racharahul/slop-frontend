import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import CodeX from "../../../assets/CodeX.png";
import kala from "../../../assets/kala.png";
import gusac from "../../../assets/gusac.png";
import gstudio from "../../../assets/gstudio.png";
import FakeApiCall, {Club} from "../../util/racha";
import React, {useEffect, useState} from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import Header from "../../components/layout/header";
import Head from "next/head";

function Clubs() {

  const widget = (
    <div className="root" style={{ margin: "100px" }}>
      <Head>
        <title>Clubs</title>
      </Head>
      <Header pageName={"Clubs"} />
      {/* Body start */}

      <style jsx>{`
        .card {
          width: 18rem;
          height: 30rem;
        }
      `}</style>

      <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
        {/*{club.map((item))}*/}
        <div className="col">
          <div className="card">
            <Image className="card-img-top" src={CodeX} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">CodeX</h5>
              <p className="card-text">
                This Club reveals and supports your passion for coding. It
                builds up your strength about expressing yourself through it.
              </p>
              <Link href="/clubs/CodeX">
                <a className="btn btn-light">More</a>
              </Link>
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
              <Link href="/clubs/Kalakrithi">
                <a className="btn btn-light">More</a>
              </Link>
            </div>
          </div>
        </div>
        {/* Gusac Card */}
        <div className="col">
          <div className="card">
            <Image className="card-img-top" src={gusac} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Gusac</h5>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="card-text">“तमसो मा ज्योतिर्गमय"</p>
              <Link href="/clubs/Gusac">
                <a className="btn btn-light">More</a>
              </Link>
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
              <Link href="/clubs/Gstudio">
                <a className="btn btn-light">More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Clubs;
