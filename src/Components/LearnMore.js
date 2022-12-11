export default function LearnMore(props) {
  return (
    <div className="an-up">
      <a href={props.target} className="section-link">
        {props.text}
        <img src="./img/arrow.svg" />
      </a>
    </div>
  );
}
