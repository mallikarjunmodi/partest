
import { isObjectIdOrHexString } from 'mongoose';
// import port from './serialport';

import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

// const port = new SerialPort({
//     path: "COM5",
//     baudRate: 9600
//   })

import port from './index.js';

class GlucoseSensor {
  constructor() {
    this.time = "null";  // Declare 'time' in the constructor of the class
  }

  onSensor(callback) {
    console.log("onSensorgl");

    const self = this; 

    port.on('data', async function(data) {
      console.log("data",data);
      


  // Update 'time' only when the condition is met
          if (data[1] === 8 && data[2] === 178) {
            self.time = ((data[4])*256)+data[5];
          }

   
      const readings={
        sys:data[6],
        cuff:data[5]*2,
        diaf:data[8],
        state:data[3]===181 && data[4]===75 ? "Start" :data[2]===2 && data[3]===180 ? "reading" : data[1]===8 && data[2]===178 ? "result" : "continue",
        timer: (data[2]===2 && data[3]===180) ? data[4] : "...", 
        result: self.time,
        
      }
      callback(readings);
     



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


 


