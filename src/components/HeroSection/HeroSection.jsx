import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-text">
          <p>
            عنوانك للاستمتاع بالنكهة السورية <br />
            الأصيلة من الشاورما للبروستد والسناك.
          </p>
        </div>
      </div>
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
