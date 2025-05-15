import Card from "./Card";
import CurveHeroText from "./CurveHeroText"; // import the curved text component

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center">
      <div className="h-[40vh] flex items-end">
        <CurveHeroText text="MOST BIDDED AUCTION" />
      </div>
      <div className="h-[60vh] w-full">
        <Card />
      </div>
    </div>
  );
};

export default Hero;
