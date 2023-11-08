import React from "react";
import Header from '../../HeaderBar';

const EcgPopupFrame = (props) => {
    return (
    <div className="absolute bg-white top-0 left-0 right-0 bottom-0 mx-auto justify-center flex items-center w-[1024px] h-[600px]  text-left text-xs text-black font-manrope z-50">
  
        <div className="absolute top-[32px] left-[0px] bg-gray-200 w-[1024px] h-[75px]" />
        <Header rootClassName="header-root-class-name21"></Header>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[17px] w-[81px] h-[27px]" onClick={props.onExitClick }>
          <div className="absolute top-[1px] left-[0px] w-6 h-6">
            <div className="absolute top-[0px] left-[0px] w-6 h-6" />
            <img
              className="absolute top-[2.5px] left-[5.9px] w-[11.6px] h-[19px]"
              alt=""
              src={"/vector-1886.svg"}
            />
          </div>
          <div className="absolute top-[0px] left-[40px] text-xl font-semibold font-manrope text-darkslategray-300 text-left">
            ECG
          </div>
        </button>
        <b className="absolute top-[56px] left-[431px] text-xl text-darkslategray-300">
          12 Lead ECG Test
        </b>
        <div className="absolute top-[122px] left-[40px] w-[944px] h-[49.3px] text-center">
          <div className="absolute top-[0px] left-[127.8px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c2 ? props.c2 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[14.6px] flex items-center justify-center w-5 h-[21.3px]">
              V2
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c1 ? props.c1 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`}  />
            <div className="absolute top-[13.3px] left-[16px] font-semibold flex items-center justify-center w-[17.3px] h-[21.3px]">
              V1
            </div>
          </div>
          <div className="absolute top-[0px] left-[255.6px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c3? props.c3 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[14.6px] flex items-center justify-center w-[18.6px] h-[21.3px]">
              V3
            </div>
          </div>
          <div className="absolute top-[0px] left-[383.5px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c4 ? props.c4 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[14.6px] flex items-center justify-center w-[18.6px] h-[21.3px]">
              V4
            </div>
          </div>
          <div className="absolute top-[0px] left-[511.3px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c5 ? props.c5 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[14.6px] flex items-center justify-center w-5 h-[21.3px]">
              V5
            </div>
          </div>
          <div className="absolute top-[0px] left-[639.1px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c6 ? props.c6 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[14.6px] flex items-center justify-center w-5 h-[21.3px]">
              V6
            </div>
          </div>
          <div className="absolute top-[0px] left-[894.7px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c8 ? props.c8 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[22.6px] flex items-center justify-center w-1 h-[21.3px]">
              I
            </div>
          </div>
          <div className="absolute top-[0px] left-[766.9px] w-[49.3px] h-[49.3px]">
            <div className={`  absolute top-[0px] left-[0px] rounded-[50%] ${props.c7 ? props.c7 : 'bg-whitesmoke-200'} w-[49.3px] h-[49.3px]`} />
            <div className="absolute top-[13.3px] left-[20px] flex items-center justify-center w-2 h-[21.3px]">
              II
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[502px] left-[803px] w-[181px] h-[58px]"
          id="StartButton" onClick={props.onContinueClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[181px] h-[58px]">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-mediumaquamarine shadow-[0px_10px_20px_rgba(7,_46,_62,_0.16)] w-[181px] h-[58px]" />
            <b className="absolute top-[15px] left-[32px] text-xl flex font-manrope text-white text-center items-center justify-center w-[118px] h-7">{`Start test  >`}</b>
          </div>
        </button>
        <div className="absolute top-[215px] left-[73px] w-[99px] h-9 font-inter">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-gainsboro w-[99px] h-9" />
          <div className="absolute top-[7px] left-[16px] leading-[110%] font-medium flex items-center w-[71px] h-6 opacity-[0.5]">
            RIGHT SIDE
          </div>
        </div>
        <div className="absolute top-[215px] left-[487px] w-[99px] h-9 text-center font-inter">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-gainsboro w-[99px] h-9" />
          <div className="absolute top-[7px] left-[14px] leading-[110%] font-medium flex items-center justify-center w-[71px] h-6 opacity-[0.5]">
            LEFT SIDE
          </div>
        </div>
        <img
          className="absolute h-[59.5%] w-[46.09%] top-[33.83%] right-[44.34%] bottom-[6.67%] left-[9.57%] max-w-full overflow-hidden max-h-full"
          id="imageIllustrate"
          alt=""
          src={props.img}
        />
    </div>
    );
  };
  
  export default EcgPopupFrame;
  