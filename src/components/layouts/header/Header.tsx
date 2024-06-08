import "./style.scss";
import Image from "next/image";
import logo from "@/assets/logos/logo-1.png";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import AuthBtn from "./AuthBtn";

const Header = () => {
  return (
    <Wrapper>
      <div className="navContainer">
        <div className="left">
          <div className="image">
            <Image priority src={logo} height={0} width={0} alt="image" />
          </div>
          <span>
            {" "}
            <Link href={"/"}>Automasters</Link>
          </span>
        </div>
        <div className="right">
          <div className="login">
            <AuthBtn />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
