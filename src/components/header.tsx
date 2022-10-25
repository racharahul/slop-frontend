import React from "react";
import Image from "next/image";
import { GitamLogo, StudentLifeLogo } from "../components/assets";
type Prop = {
  style: {
    readonly [key: string]: string;
  };
};
const Header: React.FC<Prop> = ({ style }) => {
  return (
    <div>
      <div className={style.gitam}>
        <Image
          src={GitamLogo}
          alt="gitam-logo"
          width={GitamLogo.width}
          height={GitamLogo.height}
        />
      </div>
      <div className={style.student}>
        <Image
          src={StudentLifeLogo}
          alt="student-life-logo"
          width={StudentLifeLogo.width}
          height={StudentLifeLogo.height}
        />
      </div>
    </div>
  );
};

export default Header;
