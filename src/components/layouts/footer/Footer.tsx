import Wrapper from "@/components/shared/Wrapper";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo-1.png";
const Footer = () => {
  return (
    <div className="border">
      <Wrapper>
        <div className="footerContainer">
          <div className="part-1 part">
            <div className="logo">
              <Image src={logo} alt="logo" />
              <h2>Automasters</h2>
            </div>
            <li>
              <Link href={"/"}>Automasters 2024</Link>
            </li>
            <li>
              <Link href={"/"}>All Rights Reserved@</Link>
            </li>
          </div>
          <div className="part-2 part">
            <h2>About</h2>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
          </div>
          <div className="part-3 part">
            <h2>Company</h2>
            <li>
              <Link href={"/"}>Company</Link>
            </li>
            <li>
              <Link href={"/"}>Company</Link>
            </li>
            <li>
              <Link href={"/"}>Company</Link>
            </li>
            <li>
              <Link href={"/"}>Company</Link>
            </li>
          </div>
          <div className="part-4 part">
            <h2>Socials</h2>
            <li>
              <Link href={"/"}>Socials</Link>
            </li>
            <li>
              <Link href={"/"}>Socials</Link>
            </li>
            <li>
              <Link href={"/"}>Socials</Link>
            </li>
            <li>
              <Link href={"/"}>Socials</Link>
            </li>
          </div>
        </div>
      </Wrapper>
      <div className="border">
        <Wrapper>
          <div className="footerEnd">
            <div className="endLeft">
              <h3>@2024 Automasters. All rights reserved</h3>
            </div>
            <div className="endRight">
              <h3>Privacy & Policy</h3>
              <h3>Terms & Conditions</h3>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
