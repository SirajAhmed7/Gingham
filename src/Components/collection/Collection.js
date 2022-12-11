import CtaButton from '../CtaButton';
import HeadingH2 from '../HeadingH2';

export default function Collection() {
  return (
    <section className="collection-section">
      <div className="container">
        <div className="collection-box">
          <div className="collection-content">
            <HeadingH2 text="Collection" />
            <p className="section-text an-up">
              Chose your favourite clothes for every occasion. With a range of
              styles find the perfect match for your pesonality.
            </p>
            <CtaButton text="See full collection" />
          </div>
          <div className="collection-imgbox">
            <img src="./img/polaroids-min.webp" alt="Polaroids" />
          </div>
        </div>
      </div>
    </section>
  );
}
