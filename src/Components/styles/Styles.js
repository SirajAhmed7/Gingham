import StyleCard from './StyleCard';

export default function Styles() {
  return (
    <section className="styles-section">
      <div className="styles-content">
        <StyleCard style="street" />
        <StyleCard style="winter" />
        <StyleCard style="summer" />
        <StyleCard style="casual" />
      </div>
    </section>
  );
}
