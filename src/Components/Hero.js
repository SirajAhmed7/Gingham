import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content container">
        <h1 className="main-title">
          Go beyond <br />
          <span className="fashion">fashion</span>
        </h1>
      </div>
    </section>
  );
}
