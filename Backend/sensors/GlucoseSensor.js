
import { isObjectIdOrHexString } from 'mongoose';
// import port from './serialport';

import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

const port = new SerialPort({
    path: "COM5",
    baudRate: 9600
  })


class GlucoseSensor {
  onSensor(callback) {
    console.log("onSensorgl");
    port.on('data', async function(data) {
      console.log("data",data);
      const readings={
        sys:data[6],
        cuff:data[5]*2,
        diaf:data[8],
        state:data[3]===181 && data[4]===75 ? "Start" :data[2]===2 && data[3]===180 ? "CONTINUE" : "continue",
        timer: (data[2] === 2 && data[3] === 180) ? data[4] : "0", 
        mgdl: (data[2] === 2 && data[3] === 180) ? data[4] : "0"
      }



    })
    }


  offSensor() {
    console.log("offSensorgl");
  }
}

















// class GlucoseSensor {

  
//   onSensor(callback){
     
//       console.log("onSensorgl");
      
 

//   // port.write( command , function (err) {
//   //   if (err) {
//   //     return console.log("Error on write: ", err.message);
//   //   }
//   //   console.log("message written");
//   // });

//   port.on('data', function(data) {
//     console.log(data);
     



//       //get the reading and return using the callback
//       // callback(readings);
//     });
//   }
  

//   offSensor(){
//       console.log("offSensorgl");
//   }


// }






let glSensor = new GlucoseSensor();
export default glSensor;


















// export default function sensorReadGl (callback) {


 


