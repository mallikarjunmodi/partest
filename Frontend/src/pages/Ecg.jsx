import React from 'react'
import "./style/Ecg.css";
import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"
import socket from './socket.js'; // adjust the path according to your project structure
import  { useEffect, useState } from 'react';
import { sendBpSensorValue } from '../url/url';
import api from '../api';
import useLocalStorageRef from "../hooks/LocalStorage";
import EcgPopupFrame from "../components/popup/AllTestSeperate/ecgPopupFrame";


const EcgPop = (props) => {
    const [ecgData, ecgBpData] = useState({ });   // setData({ ...data, sys: event.target.value });
    const [data, setData] = useState();
   
    const [popUpSequence, setPopupSequence] = useState("ECG_1");
  
  
   function SensorStop()
   {
    socket.emit("send_message_ecg",{message:"Stop"});
   }
  
   function  SensorRead(callback){  
     console.log(callback);
     socket.emit("send_message_ecg",{message:"Start"});
     
      socket.on("ecg_data",(data)=>{
        console.log("data: " , data.data);
        
        if(data.data.state==="end")
        {
          console.log("backsend data",data.data);
          let sensorData=data.data;
          api.post(
            sendBpSensorValue,
             sensorData,
             {
             headers: {
               "Content-Type":"application/json",
               "Accept": "*/*",
              }
           }).then(res => { 
                console.log(res.status, res.data)
                
           }
           )
           .catch(err =>  new Error(err))
           
           
          }
          callback(data.data);
        })
      }
  
  // Assuming that popUpSequence is always in the format "ECG_" followed by a number
const sequenceNumber = popUpSequence.split("_")[1];

// Create a dynamic property object based on the sequence number
const dynamicProps = {
  [`c${sequenceNumber}`]: "bg-gold",
 img: `/vector-1886-${sequenceNumber}.svg`,
  onExitClick: props.onExitClick,
  onContinueClick: () => {
    // Assuming the sequence always increments
    const nextSequence = parseInt(sequenceNumber, 10) + 1;
    if (nextSequence <= 8) {
      setPopupSequence(`ECG_${nextSequence}`);
    } else {
      // Handle the case where the sequence is greater than 8, if needed
    }
  }
};

// Render the EcgPopupFrame with dynamic props
return <EcgPopupFrame {...dynamicProps} />;
        
}

const Ecg = () => {
    const [user, setUser, removeUser] = useLocalStorageRef("user");
    const [initateTestPopUp,setinitateTestPopUp]=useState(false);
    const navigate = useNavigate();

  return (

    <div className="frame-1-input">
             {initateTestPopUp && <EcgPop className="popup" userData={user} onExitClick={()=>setinitateTestPopUp(false)} />}

      <div className="frame-1-input-child" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <button className="group-parent" onClick={() => navigate("/allTests")}>
          <div className="rectangle-group">
            <div className="group-item" />
            <img className="group-inner" alt="" src="/vector-1886.svg" />
          </div>
          <div className="ecg">ECG</div>
        </button>
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="div">00-00</div>
        <div className="div1">00-00</div>
        <b className="regular">Regular</b>
        <b className="narrow">Narrow</b>
        <div className="heart-rate">Heart Rate</div>
        <div className="prp-wave">PR/P-wave</div>
        <div className="rhythm">Rhythm</div>
        <div className="qrs">QRS</div>
        <div className="bpm">BPM</div>
        <div className="ms">ms</div>
        <button className="instructions-parent">
          <div className="instructions">Instructions</div>
          <img className="group-item" alt="" src="/group-72.svg" />
        </button>
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="your-previous-ecg">Your previous ECG readings</div>
          <div className="group-div">
            <div className="group-child3" />
            <div className="last-10-readings">Last 10 readings</div>
            <div className="rectangle-parent1">
              <div className="group-child4" />
              <img className="vector-icon" alt="" src="/vector-2579.svg" />
            </div>
          </div>
          <img className="line-icon" alt="" src="/line-132.svg" />
          <div className="group-container">
            <img className="group-child5" alt="" src="/group-372.svg" />
            <img className="group-child6" alt="" src="/vector-4582.svg" />
            <div className="mar-parent">
              <div className="mar">22 Mar</div>
              <div className="mar">23 Mar</div>
              <div className="mar">24 Mar</div>
              <div className="mar">25 Mar</div>
              <div className="mar">26 Mar</div>
              <div className="mar">27 Mar</div>
              <div className="mar">28 Mar</div>
              <div className="mar">29 Mar</div>
              <div className="mar">30 Mar</div>
              <div className="mar">31 Mar</div>
            </div>
            <div className="parent">
              <div className="mar">120</div>
              <div className="mar">110</div>
              <div className="mar">100</div>
              <div className="mar">90</div>
              <div className="mar">80</div>
            </div>
            <div className="ellipse-div" />
            <div className="group-child7" />
            <div className="group-child8" />
            <div className="group-child9" />
            <div className="group-child10" />
            <div className="group-child11" />
            <div className="group-child12" />
            <div className="group-child13" />
            <div className="group-child14" />
            <div className="group-child15" />
          </div>
        </div>
        <button className="group-button" id="button"  onClick={(e)=>{
                console.log("click");
                setinitateTestPopUp(true)}}>
          <button className="rectangle-button" id="startTest" />
          <img className="group-child16" alt="" src="/group-480.svg" />
          <div className="initiate-test">
            <p className="initiate">{`Initiate `}</p>
            <p className="initiate">Test</p>
          </div>
          <img className="group-child17" alt="" src="/group-479.svg" />
        </button>
      </div>
    </div>
  );
};

export default Ecg;
