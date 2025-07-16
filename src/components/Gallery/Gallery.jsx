import { Assets } from "../../Assets/Assets";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">معرض الصور</h2>
      <div className="gallery-grid">
        <div className="item large">
          <img src={Assets.gallery1} alt="طعام" />
        </div>
        <div className="item">
          <img src={Assets.gallery2} alt="طعام" />
        </div>
        <div className="item tall">
          <img src={Assets.gallery4} alt="طعام" />
        </div>

        <div className="item">
          <img src={Assets.gallery6} alt="طعام" />
        </div>
        <div className="item">
          <img src={Assets.gallery5} alt="طعام" />
        </div>
        <div className="item">
          <img src={Assets.gallery3} alt="طعام" />
        </div>
      </div>
    </section>
  );
}
