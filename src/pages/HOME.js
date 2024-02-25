import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import AboutUs from "../components/AboutUs";

const HOME = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[57px_0px] bg-cover bg-no-repeat bg-[top] tracking-[normal] mq725:gap-[57px_0px]">
      <section className="w-[1450px] absolute !m-[0] top-[243px] left-[-10px] rounded-[50%] bg-black [filter:blur(300px)] h-[1341px]" />
      <section className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full text-left text-base text-white font-manrope">
        <div className="flex-1 flex flex-col items-center justify-center gap-[228px_0px] max-w-full z-[1] mq450:gap-[228px_0px] mq725:gap-[228px_0px]">
          <FrameComponent1 />
          <div className="w-[944px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[31px_0px] max-w-full mq725:gap-[31px_0px]">
            <div className="relative">DEV DESIGN INTERNSHLP</div>
            <div className="self-stretch h-64 relative text-45xl font-beyonders text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0),_#fff_70%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block mq450:text-19xl mq1000:text-32xl">
              beyonders academy
            </div>
            <div className="rounded-[50px] flex flex-row items-center justify-center py-2.5 px-[37px] whitespace-nowrap border-[1px] border-solid border-white">
              <div className="relative capitalize">apply now</div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </section>
      <AboutUs />
    </div>
  );
};

export default HOME;
