const Navabar = () => {
  return (
    <header className="w-full !m-[0] absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] flex flex-row items-center justify-between py-5 px-10 box-border gap-[20px] max-w-full z-[1] text-left text-xl text-white font-manrope mq1050:flex-wrap">
      <div className="w-[640.5px] flex flex-row items-center justify-between max-w-full mq750:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[0px_10px]">
          <div className="flex flex-col items-center justify-center gap-[2.19px_0px]">
            <img
              className="w-[32.5px] h-[12.4px] relative"
              loading="eager"
              alt=""
              src="/vector-1-stroke.svg"
            />
            <img
              className="w-[31.7px] h-[12.4px] relative object-contain"
              loading="eager"
              alt=""
              src="/vector-2-stroke.svg"
            />
          </div>
          <h2 className="m-0 relative text-inherit capitalize font-normal font-inherit mq450:text-base">
            campeedia
          </h2>
        </div>
        <nav className="m-0 w-[390px] flex flex-row items-start justify-start gap-[0px_37px] max-w-full whitespace-nowrap text-left text-xs text-white font-manrope mq450:flex-wrap mq450:gap-[0px_37px]">
          <div className="relative">Home</div>
          <div className="flex-1 relative capitalize inline-block min-w-[45px]">
            latest news
          </div>
          <div className="flex-1 relative capitalize inline-block min-w-[40px]">
            categories
          </div>
          <div className="relative capitalize">blog</div>
          <div className="relative capitalize">our team</div>
        </nav>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_10px]">
        <button className="cursor-pointer py-2.5 pr-[38px] pl-10 bg-gold-700 rounded-[12.56px] flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-gold-500 hover:bg-gold-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gold-300">
          <div className="relative text-xs capitalize font-manrope text-darkslateblue text-left">
            log in
          </div>
        </button>
        <button className="cursor-pointer py-2.5 pr-[38px] pl-10 bg-[transparent] rounded-[12.56px] flex flex-row items-center justify-start whitespace-nowrap border-[1px] border-solid border-gold-700 hover:bg-gold-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gold-200">
          <div className="relative text-xs capitalize font-manrope text-gold-700 text-left">
            sign up
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navabar;
