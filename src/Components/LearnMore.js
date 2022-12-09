export default function LearnMore(props) {
  return (
    <a href={props.target} className="section-link">
      {props.text}
      <img src="./img/arrow.svg" />
    </a>
  );
}
