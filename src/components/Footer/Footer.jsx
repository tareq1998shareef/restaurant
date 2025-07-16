import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Assets } from "../../Assets/Assets";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="content">
        <img src={Assets.logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>الرئيسية</li>
          <li>الأصناف الأكثر طلباً</li>
          <li>قائمة الطعام</li>
          <li>من نحن</li>
          <li>المقالات</li>
          <li>تواصل معنا</li>
        </ul>
        <div className="icons">
          <span>
            <TiSocialTwitter />
          </span>{" "}
          <span>
            <TiSocialFacebook />
          </span>
          <span>
            <TiSocialLinkedin />
          </span>
        </div>
      </div>
    </section>
  );
}
