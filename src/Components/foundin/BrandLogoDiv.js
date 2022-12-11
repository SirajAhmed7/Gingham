export default function BrandLogoDiv(props) {
  return (
    <div
      className={`logo-box an-up-brand ${props.bottom ? ' bottom' : ' top'}`}
    >
      <img src={`./img/${props.name}`} alt={props.altText} />
    </div>
  );
}
