const AboutUs = () => {
  return (
    <section className="bg-gray-400 overflow-hidden flex flex-col items-center justify-start py-[69px] px-[38px] box-border gap-[101px_0px] max-w-full z-[1] text-left text-45xl text-white font-manrope mq450:gap-[101px_0px] mq725:gap-[101px_0px] mq725:pt-[29px] mq725:pb-[29px] mq725:box-border mq1050:pt-[45px] mq1050:pb-[45px] mq1050:box-border">
      <div className="flex flex-col items-center justify-start gap-[56px_0px] max-w-full mq725:gap-[56px_0px]">
        <img
          className="w-6 h-6 relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/star06.svg"
        />
        <div className="w-[201px] rounded-21xl bg-gray-200 flex flex-row items-center justify-between py-[5px] px-2.5 box-border gap-[7px]">
          <img
            className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
            alt=""
            src="/link01.svg"
          />
          <input
            className="w-[159px] [border:none] [outline:none] font-semibold font-manrope text-base bg-[transparent] h-[22px] relative capitalize text-white text-left inline-block"
            placeholder="learn more about us"
            type="text"
          />
        </div>
        <div className="h-[87px] relative capitalize font-semibold inline-block mq450:text-19xl mq1000:text-32xl">
          What's in it for you?
        </div>
        <div className="h-11 relative text-base capitalize font-semibold text-center inline-block max-w-full">
          <p className="m-0">
            Gain all the skills you nood to kick-start your profossbnol
          </p>
          <p className="m-0">
            path through m.ontorirg by industry professionals.
          </p>
        </div>
      </div>
      <div className="w-[1359px] h-[468px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border gap-[0px_20px] max-w-full text-center text-xl">
        <div className="self-stretch w-80 rounded-21xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-20 pl-10 box-border relative gap-[191px_0px]">
          <div className="h-[145px] flex flex-col items-start justify-start gap-[30px_0px]">
            <b className="relative capitalize mq450:text-base">
              Hands-on learning
            </b>
            <div className="flex-1 relative text-base capitalize text-left">
              <p className="m-0">Each course take you</p>
              <p className="m-0">through tho process ot</p>
              <p className="m-0">completing and testing a</p>
              <p className="m-0">project</p>
            </div>
          </div>
          <div className="w-[35px] h-11 absolute !m-[0] top-[379px] left-[240px] text-13xl capitalize font-semibold text-left inline-block mq450:text-lgi mq1000:text-7xl">
            01
          </div>
        </div>
        <div className="self-stretch w-80 rounded-21xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[30px] pl-10 box-border relative gap-[191px_0px] text-left">
          <div className="self-stretch h-[150px] flex flex-col items-start justify-start gap-[30px_0px]">
            <b className="w-[190px] h-[54px] relative capitalize inline-block mq450:text-base">
              <p className="m-0">Mentorship by our</p>
              <p className="m-0">experts</p>
            </b>
            <div className="self-stretch flex-1 relative text-base capitalize whitespace-pre-wrap">
              Take advantage of our mentorship exeprts and gain industry
              relevant feedback.
            </div>
          </div>
          <div className="h-11 absolute !m-[0] top-[379px] left-[240px] text-13xl capitalize font-semibold inline-block mq450:text-lgi mq1000:text-7xl">
            02
          </div>
        </div>
        <div className="self-stretch w-80 rounded-21xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[45px] pl-10 box-border relative gap-[191px_0px] text-left">
          <div className="self-stretch h-[172px] flex flex-col items-start justify-start gap-[30px_0px]">
            <b className="w-[184px] h-[54px] relative capitalize inline-block mq450:text-base">
              <p className="m-0">Widely applicable</p>
              <p className="m-0">skills</p>
            </b>
            <div className="self-stretch flex-1 relative text-base capitalize">
              <p className="m-0">Acadomv designed to</p>
              <p className="m-0">qivo vou o solid toundot;on ond</p>
              <p className="m-0">boost your qto•Mh,</p>
            </div>
          </div>
          <div className="h-11 absolute !m-[0] top-[379px] left-[240px] text-13xl capitalize font-semibold inline-block mq450:text-lgi mq1000:text-7xl">
            03
          </div>
        </div>
        <div className="self-stretch w-80 rounded-21xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[43px] pr-[25px] pl-10 box-border relative gap-[191px_0px]">
          <div className="self-stretch h-[145px] flex flex-col items-start justify-start gap-[30px_0px]">
            <b className="h-[27px] relative capitalize inline-block mq450:text-base">
              Street cred
            </b>
            <div className="self-stretch flex-1 relative text-base capitalize text-left">
              <p className="m-0">Upon comptetion you will</p>
              <p className="m-0">
                recieve a certificate verifying your new skills
              </p>
              <p className="m-0">new</p>
            </div>
          </div>
          <div className="h-11 absolute !m-[0] top-[379px] left-[240px] text-13xl capitalize font-semibold text-left inline-block mq450:text-lgi mq1000:text-7xl">
            04
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
