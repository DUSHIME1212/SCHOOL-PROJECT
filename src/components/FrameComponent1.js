const FrameComponent1 = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-2.5 px-[100px] box-border gap-[20px] max-w-full text-left text-base text-white font-beyonders mq450:pl-5 mq450:pr-5 mq450:box-border mq725:hidden mq1000:pl-[50px] mq1000:pr-[50px] mq1000:box-border">
      <i className="h-8 w-[126px] relative inline-block">Profico.</i>
      <div className="w-[322px] flex flex-row items-start justify-start gap-[0px_40px] max-w-full font-manrope mq450:gap-[0px_40px]">
        <div className="h-[22px] relative capitalize inline-block">about</div>
        <div className="relative capitalize">courses</div>
        <div className="h-[22px] relative capitalize inline-block">process</div>
        <div className="h-[22px] relative capitalize inline-block">facs</div>
      </div>
      <button className="cursor-pointer py-2.5 px-[37px] bg-white rounded-21xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro">
        <div className="relative text-base capitalize font-manrope text-black text-left">
          apply now
        </div>
      </button>
    </header>
  );
};

export default FrameComponent1;
