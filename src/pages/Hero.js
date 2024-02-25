import Content from "../components/Content";
import Navabar from "../components/Navabar";

const Hero = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start tracking-[normal]">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/placeholder--video@2x.png"
      />
      <Content />
      <Navabar />
    </div>
  );
};

export default Hero;
