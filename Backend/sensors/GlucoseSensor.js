
import { isObjectIdOrHexString } from 'mongoose';
// import port from './serialport';

import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

// const port = new SerialPort({
//     path: "COM3",
//     baudRate: 9600
//   })
const port=null;

const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];

class GlucoseSensor {
  onSensor(callback) {
    console.log("onSensorgl");

    let values = [0,70,82,76,72,84,88,90,92,97,99 ]; // Array to store the sensor values
   
    const reading = [
      {
        sys: 0,
        dia: 0,
       
        state: "continue"
      },
      {
        sys:70 ,
        dia: 70,
        pulse: 30,
        state: "continue"
      },
      {
        sys: 82,
        dia: 82,
        pulse :20,
        state: "continue"
      },
      {
        sys:76 ,
        dia: 76,
        pulse: 30,
        state: "continue"
      },
      {
        sys: 72,
        dia: 72,
        pulse :20,
        state: "continue"
      },
      {
        sys:84 ,
        dia: 84,
        pulse: 30,
        state: "continue"
      },
      {
        sys: 84,
        dia: 84,
        pulse :20,
        state: "continue"
      },
      {
        sys:88 ,
        dia: 88,
        pulse: 30,
        state: "continue"
      }, {
        sys: 86,
        dia: 86,
        pulse :20,
        state: "continue"
      },
      {
        sys:90 ,
        dia: 90,
        pulse: 30,
        state: "end"
      }
    ]
    // Simulating sensor readings
   for ( let i = 0; i < 10; i++) {
      setTimeout(() => {
        let readings=values[i];
  
        callback(reading[i]);// the readings array as the callback parameter
        
      }, i * 1000); // Delay of 1 second between each reading
    }
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


 


