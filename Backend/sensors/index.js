import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];

// import SerialPort from 'serialport';

const port = new SerialPort({
      path: "COM5",
      baudRate: 9600
      
      
    })
    

export default port;