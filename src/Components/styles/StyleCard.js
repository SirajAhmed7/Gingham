export default function StyleCard(props) {
  return (
    <a href="#" className={`style-card ${props.style}`}>
      <div className="style-card--text">
        {props.style}
        <img
          src="./img/style-hover-pattern.svg"
          className="style-card--pattern"
        />
      </div>
      <img
        src={`./img/${props.style}-min.jpg`}
        className="style-card--bg-img"
      />
    </a>
  );
}
