

import { isObjectIdOrHexString } from 'mongoose';
// import port from './serialport';





import port from './index.js';

//remove all the sngle comment while sensore there




const command = ["0x55", "0xAA"," 0x04", "0x02", "0x01", "0xF8"];

const ecgoff  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x00", "0xFA"];
const spoff  = ["0x55", "0xAA" ,"0x04","0x03" ,"0x00", "0xF8"];
const tempoff  = ["0x55", "0xAA" ,"0x04","0x04" ,"0x00", "0xF7"];
const nibpoff  = ["0x55", "0xAA"," 0x04", "0x02", "0x00", "0xF9"]
const ecgwaveoff  = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x00", "0x00"];
const spwaveoff  = ["0x55", "0xAA" ,"0x04","0xFE" ,"0x00", "0xFD"];
const respoff  = ["0x55", "0xAA" ,"0x04","0xFF" ,"0x00", "0xFC"];


class BpSensor {
   
    
    onSensor(callback){

        console.log("initSensorBp");
        port.write(spoff);
        port.write(nibpoff);
        port.write(tempoff);
        port.write(spwaveoff);
        port.write(respoff);
        port.write(ecgoff);
        port.write(ecgwaveoff);

 
        port.write(command)

        console.log("onSensorBp");
        port.on('data', async function(data) {
            //console.log("data",Buffer.from(data,'base64').toString());
            console.log("data",data);
            console.log("data", "1=" + data[0] + ", 2=" + data[1] + ", 3=" + data[2] + ", 4=" + data[3] + ", 5=" + data[4] + ", 6=" + data[5]*2 + ", 7=" + data[6] + ", 8=" + data[7] + ", 9=" + data[8] + ", 10=" + data[9]);
            const readings={
              sys:data[6],
              cuff:data[5]*2,
              diaf:data[8],
              state:data[4]===0 ? "end" :data[2]===2 ? "start" : "continue"
            }
            //  const readings={
            //   sis:100,
            //   dia:20,
            //   hrate:30,
            //   state:"end"
            // }
            
            //console.log("data",readings);
            
            callback(readings);
            
            const statusCode=parseInt(data[2],16);
        
            if(data[2] == 5)
           {
            //   buffer.push(data);
              
              port.emit("endBp")
              port.close();
            // realm.write(() => {
            //     sensor1 = realm.create("SensorSchema", {
            //         _id:1234,
            //         name: "bp",
            //         value : value,
            //   });
                
            //});
            }
            if(data[2] == 5)
            port.close();
            console.log("port closed Bp");
             
              // for(i=0;i<data)
              // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
              
            })



 } 

 offSensor(){
    port.close();
    console.log("offSensorbp");
}
    

  }
  





  let bpSensor = new BpSensor();
  export default bpSensor;
// //   document.getElementById("demo").innerHTML =
// //   "My car is " + myCar.age() + " years old.";


// const port=null;

// const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];

// class BpSensor {
//   onSensor(callback) {
//     console.log("onSensorbp");

//     const reading = [
//       {
//         sys: 50,
//         dia: 7120,
//         pulse :20,
//         state: "continue"
//       },
//       {
//         sys:100 ,
//         dia: 65,
//         pulse: 30,
//         state: "continue"
//       },
//       {
//         sys: 112,
//         dia: 62,
//         pulse :20,
//         state: "continue"
//       },
//       {
//         sys:108 ,
//         dia: 61,
//         pulse: 30,
//         state: "continue"
//       },
//       {
//         sys: 118,
//         dia: 60,
//         pulse :20,
//         state: "continue"
//       },
//       {
//         sys:114 ,
//         dia: 63,
//         pulse: 30,
//         state: "continue"
//       },
//       {
//         sys: 115,
//         dia: 67,
//         pulse :20,
//         state: "continue"
//       },
//       {
//         sys:116 ,
//         dia: 72,
//         pulse: 30,
//         state: "continue"
//       }, {
//         sys: 115,
//         dia: 75,
//         pulse :20,
//         state: "continue"
//       },
//       {
//         sys:118 ,
//         dia: 77,
//         pulse: 30,
//         state: "end"
//       }
//     ]
//      // Array to store the sensor values

//     // Simulating sensor readings
//    for ( let i = 0; i < 10; i++) {
//       setTimeout(() => {
//         // let readings=values[i];
               
  
//           callback(reading[i]);  // the readings array as the callback parameter
        
//       }, i * 1000); // Delay of 1 second between each reading
//     }
//   }

//   offSensor() {
//     console.log("offSensorbp");
//   }
// }



//   let bpSensor = new BpSensor();
//   export default bpSensor;
