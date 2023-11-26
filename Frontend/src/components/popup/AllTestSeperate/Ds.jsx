const DSRecording = () => {
    return (
      <div className="relative bg-gray-200 w-full h-[600px] text-center text-[32px] text-mediumaquamarine font-manrope">
        <div className="absolute top-[77px] left-[46px] w-[942.9px] h-[428px]">
          <div className="absolute top-[0px] left-[0px] w-[942.9px] h-[428px]">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[942.9px] h-[428px]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[345px] left-[391px] w-40 h-[54px]">
              <div className="absolute top-[0px] left-[0px] w-40 h-[54px]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-indianred shadow-[0px_10px_20px_rgba(36,_99,_15,_0.16)] w-40 h-[54px]" />
                <div className="absolute top-[14.6px] left-[62px] text-base font-semibold font-manrope text-white text-center inline-block w-[37px] h-[24.8px]">
                  Stop
                </div>
              </div>
            </button>
            <div className="absolute top-[133px] left-[0px] bg-gainsboro w-[943px] h-[163px]" >
                </div>
            <div className="absolute top-[43px] left-[395px] font-semibold">
              Listening
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DSRecording;
  