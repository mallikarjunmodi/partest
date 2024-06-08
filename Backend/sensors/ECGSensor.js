
import { isObjectIdOrHexString } from 'mongoose';


// import port from './index.js';

const ecgoff  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x00", "0xFA"];
const spoff  = ["0x55", "0xAA" ,"0x04","0x03" ,"0x00", "0xF8"];
const tempoff  = ["0x55", "0xAA" ,"0x04","0x04" ,"0x00", "0xF7"];
const nibpoff  = ["0x55", "0xAA"," 0x04", "0x02", "0x00", "0xF9"]
const ecgwaveoff  = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x00", "0x00"];
const spwaveoff  = ["0x55", "0xAA" ,"0x04","0xFE" ,"0x00", "0xFD"];
const respoff  = ["0x55", "0xAA" ,"0x04","0xFF" ,"0x00", "0xFC"];
const ecgwave = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x01", "0xFF"];

class EcgSensor {

    
      onSensor(callback) {
        console.log("onSensorecg");
        // port.write(spoff);
        // port.write(nibpoff);
        // port.write(tempoff);
        // port.write(spwaveoff);
        // port.write(respoff);
        // port.write(ecgoff);
        // port.write(ecgwave);


        setInterval(() => {
          const randomReading = Math.floor(Math.random() * 301); // 0 - 300
          callback(randomReading);    
      }, 4); // 1000 milliseconds / 250 packets = 4 milliseconds

    



        // port.on('data', async function(data) {
        //   console.log("data",data);
    
       
        //   const readings = 
        //    data[4]*8400
             

            
          
        //   callback(readings);
        //  })
    }    
 
  offSensor(){
    // port.write(ecgwaveoff)
      console.log("offSensorecg");
  }


}






let ecgSensor = new EcgSensor();
export default ecgSensor;





















 


