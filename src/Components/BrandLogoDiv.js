export default function BrandLogoDiv(props) {
  return (
    <div className={`logo-box ${props.bottom ? " bottom" : " top"}`}>
      <img src={`./img/${props.name}`} alt={props.altText} />
    </div>
  );
}
