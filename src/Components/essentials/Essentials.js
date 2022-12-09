import HeadingH2 from "../HeadingH2";
import LearnMore from "../LearnMore";

export default function Essentials() {
  return (
    <section className="essentials-section">
      <div className="essentials-box">
        <div className="essentials-imgbox">
          <img src="./img/mid-section-min.jpg" alt="Image" />
        </div>
        <div className="essentials-content">
          <HeadingH2 text="For all your style essentials" />
          <p className="section-text">
            High quality material and premium designs. Find all your style needs
            in one place. Superior fashion choices that will make you stand out
            from the croud.
          </p>
          <LearnMore target="#" text="About us" />
        </div>
      </div>
      <img
        src="./img/pattern-svg.svg"
        className="pattern pattern-essentials"
        draggable="false"
      />
    </section>
  );
}
