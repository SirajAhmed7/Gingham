export default function HeadingH2(props) {
  return (
    <h2 className={`section-heading ${props.center && "text-center"}`}>
      {props.text}
    </h2>
  );
}
