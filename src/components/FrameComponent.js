const FrameComponent = () => {
  return (
    <div className="w-[1440px] bg-gray-100 [backdrop-filter:blur(80px)] overflow-x-auto flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full text-left text-base text-white font-manrope">
      <div className="w-[360px] box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-10 gap-[20px_0px] max-w-full border-r-[1px] border-solid border-white">
        <div className="h-[22px] relative capitalize inline-block">
          location
        </div>
        <div className="relative capitalize">kigali/rwanda</div>
      </div>
      <textarea
        className="[border:none] bg-[transparent] h-[124px] w-[360px] [outline:none] box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-10 font-manrope text-base text-white max-w-full border-r-[1px] border-solid border-white border-l-[1px]"
        placeholder="duration"
        rows={6}
        cols={18}
      />
      <textarea
        className="[border:none] bg-[transparent] h-[124px] w-[360px] [outline:none] box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-10 font-manrope text-base text-white max-w-full border-r-[1px] border-solid border-white border-l-[1px]"
        placeholder="mentors"
        rows={6}
        cols={18}
      />
      <textarea
        className="[border:none] bg-[transparent] h-[124px] w-[360px] [outline:none] box-border shrink-0 flex flex-col items-start justify-start py-[30px] px-10 font-manrope text-base text-white max-w-full border-l-[1px] border-solid border-white"
        placeholder="courses"
        rows={6}
        cols={18}
      />
    </div>
  );
};

export default FrameComponent;
