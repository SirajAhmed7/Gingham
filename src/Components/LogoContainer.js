import BrandLogoDiv from "./BrandLogoDiv";

export default function LogoContainer() {
  return (
    <div className="logo-container container">
      <BrandLogoDiv name="Zara logo.svg" altText="Zara logo" />
      <BrandLogoDiv name="GAP logo.svg" altText="GAP logo" />
      <BrandLogoDiv name="HnM logo.svg" altText="H&M logo" />
      <BrandLogoDiv
        name="RL logo.svg"
        altText="Ralph Lauren logo"
        bottom={true}
      />
      <BrandLogoDiv
        name="CK logo.svg"
        altText="Calvin Klein logo"
        bottom={true}
      />
    </div>
  );
}
