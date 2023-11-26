import React from "react";
import Digi from "../components/popup/AllTestSeperate/Ds1";
import Dig from "../components/popup/AllTestSeperate/Ds";

import  { useEffect, useState } from 'react';
import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"
import api from '../api';
import useLocalStorageRef from "../hooks/LocalStorage";


const DsPopUp = (props) =>{
  // const [data, setData] = useState();
  const [popUpSequence, setPopupSequence] = useState("Ds-1");

  if (popUpSequence === "Ds-1")
  return (
    <Digi
      onExitClick={props.onExitClick}
      onContinueClick={() => {
        setPopupSequence("Ds-2");
      }}
    />
  );
  if (popUpSequence === "Ds-2")
  return (
    <Dig
      onExitClick={props.onExitClick}
      onContinueClick={() => {
        setPopupSequence("Ds-3");
      }}
    />
  );
  }

function Stethoscope (props) {
    const [user, setUser, removeUser] = useLocalStorageRef("user");
    const [initateTestPopUp,setinitateTestPopUp]=useState(false);
    const navigate = useNavigate();

return(
<>
{initateTestPopUp && <DsPopUp className="popup" userData={user} onExitClick={()=>setinitateTestPopUp(false)} />}

<div className="relative bg-gray-200 w-full h-[600px] text-left text-xl text-darkslategray-200 font-manrope">
      <img
        className="absolute top-[111px] left-[926.8px] w-[30.7px] h-[30.7px] opacity-[0]"
        alt=""
        src="/line-132.svg"
      />
      <div className="absolute top-[86px] left-[41px] w-[942.9px] h-[428px]">
        <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[942.9px] h-[428px]" />
        <img
          className="absolute top-[28px] left-[171px] w-[83.4px] h-[83.4px]"
          alt=""
          src="/group-164.svg"
        />
        <b className="absolute top-[47px] left-[44px]">Instructions</b>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[342px] left-[479px] w-40 h-[54px]">
          <div className="absolute top-[0px] left-[0px] w-40 h-[54px]">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-mediumaquamarine shadow-[0px_10px_20px_rgba(36,_99,_15,_0.16)] w-40 h-[54px]" onClick={(e)=>{
                console.log("click");
                setinitateTestPopUp(true)}} />
            <b className="absolute top-[16px] left-[62px] text-base font-manrope text-white text-center">
              Next
            </b>
          </div>
        </button>
        <p className="m-0 absolute top-[136px] left-[44px] inline-block w-[367px]">
          Place the chest piece on the area you or the doctor want to listen to.
          The area should be clean and free from clothing or any other
          obstruction.
        </p>
        <img
          className="absolute top-[110px] left-[597.5px] w-[173.9px] h-[190.6px]"
          alt=""
          src="/group-1094.svg"
        />
        <div className="absolute top-[281px] left-[594px] bg-white w-2.5 h-[18px]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[16px] left-[846px] w-20 h-10">
          <div className="absolute top-[0px] left-[0px] w-20 h-10" />
          <b className="absolute top-[9px] left-[23px] text-base font-manrope text-mediumslateblue text-center">
            Skip
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[342px]  left-[304px] w-40 h-[54px]">
          <div className="absolute top-[0px] left-[0px] w-40 h-[54px]">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white shadow-[0px_10px_20px_rgba(36,_99,_15,_0.16)] w-40 h-[54px]" />
            <b className="absolute top-[16px] left-[61px] text-base font-manrope text-mediumaquamarine text-center ">
              Back
            </b>
          </div>
        </button>
      </div>
    </div>

</>

)



}

export default Stethoscope;