export default function HeadingH2(props) {
  return (
    <h2 className={`section-heading an-up ${props.center && 'text-center'}`}>
      {props.text}
    </h2>
  );
}
