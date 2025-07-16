import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ rectangle, map }) {
  return (
    <section id="contact" className="contact-section">
      <div
        className="rectangle"
        style={{
          height: rectangle && "589.41px",
          boxShadow: rectangle && "0px 8px 20px 0px #00000040",
          backgroundColor: rectangle  && "#fff"
        }}
      >
        <h2 className="contact-title">تواصل معنا</h2>
        <div className="contact-cards">
          <div className="contact-card marina">
            <h3>مارينا</h3>
            <div className="contact-info">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span> +971 4 243956</span>
            </div>
            <div className="contact-info">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span> +971 56 3773206</span>
            </div>
          </div>

          <div className="contact-card jumeirah">
            <h3>جميرة</h3>
            <div className="contact-info">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span> +971 4 3960610</span>
            </div>
            <div className="contact-info">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span> +971 50 4402850</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map" style={{ display: !map && "none" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.3561989372!2d36.36529785221521!3d33.50759136659905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2sus!4v1752451545436!5m2!1sar!2sus"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
