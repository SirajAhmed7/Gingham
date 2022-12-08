import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content container">
        <div>
          <h1 className="main-title">Go beyond</h1>
          <h1 className="main-title fashion">fashion</h1>
        </div>
        <div className="hero-text">
          Designed to make you look and feel your best. Outfits that match your
          personality.
        </div>
      </div>
    </section>
  );
}
