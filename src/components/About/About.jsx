import { Assets } from "../../Assets/Assets";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about">
        <div className="about-image">
          <img src={Assets.about} alt="Chef" />
        </div>
        <div className="about-content">
          <h2>عن سندويشتي</h2>
          <p>
            اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف
            نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص اضف نص
          </p>
        </div>
      </div>
    </section>
  );
}
