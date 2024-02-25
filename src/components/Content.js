const Content = () => {
  return (
    <footer className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-start justify-start py-20 px-16 box-border gap-[0px_80px] max-w-full text-left text-37xl text-gold-100 font-michelle lg:gap-[0px_80px] lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[0px_80px]">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[400px] max-w-full mq750:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit mq450:text-15xl mq450:leading-[40px] mq1050:text-26xl mq1050:leading-[54px]">
          Explore the Latest News and Stories
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[400px] top-[0] z-[99] sticky max-w-full text-lg font-text-regular-normal mq750:min-w-full">
        <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit mq750:hidden">
          Stay well-informed and up-to-date with our extensive and diverse range
          of news articles covering a wide array of topics and interests.
        </h3>
        <div className="w-[246px] flex flex-row items-start justify-start pt-4 px-0 pb-0 box-border gap-[0px_16px] mq450:hidden">
          <button className="cursor-pointer py-3 px-[23px] bg-gold-100 flex flex-row items-center justify-center border-[1px] border-solid border-gold-100 hover:bg-gold-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gold-200">
            <div className="relative text-base leading-[150%] font-text-regular-normal text-darkslateblue text-left">
              Explore
            </div>
          </button>
          <button className="cursor-pointer py-3 px-[21px] bg-[transparent] flex-1 flex flex-row items-center justify-center border-[1px] border-solid border-gold-100 hover:bg-gold-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gold-200">
            <div className="relative text-base leading-[150%] font-text-regular-normal text-gold-100 text-left whitespace-nowrap">
              Learn More
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Content;
