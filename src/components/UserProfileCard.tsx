import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import userprofile from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import style from "../../styles/profile.module.css";
import { AdminVerified, ClubVerified } from "./assets";
import React from "react";
import { AuthContext } from "./authProvider";
import User, { toUser } from "../data/User";
import api from "../util/api";
import { getImageLink } from "@/util/image";

const UserProfileCard: React.FC<{ user: User }> = ({ user }) => {
  const widget = (
    <div className="container card mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          {user.profilePicture ? (
            <Image
              src={getImageLink(user.profilePicture)}
              alt="user profile pic"
              height={500}
              width={500}
            />
          ) : (
            <FontAwesomeIcon
              className="displayimage p-5"
              icon={solid("user")}
              size="7x"
            />
          )}
        </div>
        <div className="col-md-8 mt-4">
          <div className="card-body">
            <div className="position-relative">
              <div className="position-absolute top-0 end-0">
                <Link href="../settings">
                  <a style={{ color: "black" }}>
                    <FontAwesomeIcon icon={solid("gear")} size="1x" />
                  </a>
                </Link>
              </div>
            </div>
            <p className="fs-3">
              {user.fullName}
              {user.userRole !== "USER" ? (
                <Image
                  src={user.userRole === "CLUB" ? ClubVerified : AdminVerified}
                  alt="verified"
                  height={20}
                  width={20}
                  color="blue"
                />
              ) : (
                <></>
              )}
            </p>
            <p className="card-title">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
  return widget;
};

export default UserProfileCard;
