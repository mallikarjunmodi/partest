import React, { useEffect, useRef, useState } from 'react';
import socket from './socket.js'; // Adjust the import path as necessary
import api from '../api'; // Import your API utility (adjust the path as necessary)

const EcgGraph = (props) => {
  const [bpData, setBpData] = useState({ sys: 0, dia: 0, pulse: 0 });   // setData({ ...data, sys: event.target.value });
    const demoRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [isSensorOn, setIsSensorOn] = useState(false);
    const [data, setData] = useState([]); // Store the sensor data
    console.log("props here",props.data);

    // Function to stop the sensor
    function SensorStop() {
        socket.emit("send_message_ecg", { message: "Stop" });
    }

    // Function to start reading from the sensor
    function SensorRead() {
        socket.emit("send_message_ecg", { message: "Start" });

        socket.on("ecg_data", (data) => {
            console.log("data: ", data.data);

            if (data.data.state === "end") {
                console.log("backsend data", data.data);
                let sensorData = data.data;
                api.post(
                    'YOUR_ENDPOINT_URL', // Replace with your endpoint URL
                    sensorData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "*/*",
                        }
                    }
                ).then(res => {
                    console.log(res.status, res.data);
                })
                .catch(err => new Error(err));
            }
            // Update the data state with the new sensor data
            setData(currentData => [...currentData, data.data]);
        });
    }

    // Toggle Sensor
    const toggleSensor = () => {
        if (isSensorOn) {
            SensorStop();
        } else {
            SensorRead();
        }
        setIsSensorOn(!isSensorOn);
    };

    // Canvas Initialization
    useEffect(() => {
        if (demoRef.current) {
            const context = demoRef.current.getContext('2d');
            setCtx(context);
        }
    }, [demoRef]);

    // Canvas Drawing Logic
    useEffect(() => {
        if (!ctx) return;

        let px = 0, opx = 0, py = 0, opy = 0, speed = 3;
        const h = demoRef.current.height;
        const w = demoRef.current.width;

        const loop = () => {
            if (data.length) {
                // Update py based on the latest sensor data
                // You may need to adjust this calculation based on your data format
                py = parseInt(data[data.length - 1].value) / 10000; // Example calculation
            }
            
            ctx.clearRect(px, 0, 20, h);
            ctx.beginPath();
            ctx.moveTo(opx, opy);
            ctx.lineTo(px, py);
            ctx.stroke();

            opx = px;
            opy = py;
            px += speed;

            if (opx > w) {
                px = opx = -speed;
            }

            requestAnimationFrame(loop);
        };

        ctx.strokeStyle = '#00bd00';
        ctx.lineWidth = 3;
        loop();
    }, [ctx, data]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <p >hello : {data.sys}</p>
            <button 
                onClick={toggleSensor} 
                className="mb-4 px-6 py-3 text-lg text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600 focus:outline-none"
            >
                {isSensorOn ? 'Stop Sensor' : 'Start Sensor'}
            </button>
            <canvas 
                ref={demoRef} 
                className="border border-gray-300" 
                width={600} 
                height={400}
            />
        </div>
    );
};

export default EcgGraph;
