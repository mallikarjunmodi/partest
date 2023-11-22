import React, { useState, useEffect, useRef } from 'react';

function Ds1() {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [status, setStatus] = useState('idle');
  const [mediaBlob, setMediaBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(new AudioContext());
  const analyserRef = useRef(null);
  const animationRef = useRef(null);
  const canvasRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        const analyser = audioContextRef.current.createAnalyser();
        analyser.fftSize = 2048;
        analyserRef.current = analyser;
        setMediaRecorder(new MediaRecorder(stream));
      });
  }, []);

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const analyser = analyserRef.current;
  
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const sliceWidth = WIDTH * 1.0 / bufferLength;
  
    let lastDrawnX = WIDTH; // Start drawing from the right
  
    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
  
      analyser.getByteTimeDomainData(dataArray);
  
      // Move existing waveform to the left
      const shiftedImage = canvasCtx.getImageData(1, 0, WIDTH, HEIGHT);
      canvasCtx.putImageData(shiftedImage, 0, 0);
      canvasCtx.clearRect(WIDTH - 1, 0, 1, HEIGHT);
  
      // Draw new data on the right
      let x = lastDrawnX;
      for (let i = 0; i < 1; i++) { // Draw only one slice of data at a time
        let v = dataArray[i] / 128.0;
        let y = v * HEIGHT / 2;
  
        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        canvasCtx.fillRect(x, 0, sliceWidth, HEIGHT);
  
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
        canvasCtx.beginPath();
        canvasCtx.moveTo(x, HEIGHT / 2);
        canvasCtx.lineTo(x, y);
        canvasCtx.stroke();
      }
    };
  
    draw();
  };
  
  


  const startRecording = () => {
    if (mediaRecorder) {
      sourceRef.current.connect(analyserRef.current);
      mediaRecorder.start();
      setStatus('recording');
      drawWaveform();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setStatus('stopped');
      cancelAnimationFrame(animationRef.current);
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      sourceRef.current.disconnect(analyserRef.current);
      mediaRecorder.ondataavailable = (e) => {
        setMediaBlob(e.data);
      };
    }
  };

  const playRecording = () => {
    if (mediaBlob && !isPlaying) {
      setIsPlaying(true);
      const canvas = canvasRef.current;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

      const reader = new FileReader();
      reader.readAsArrayBuffer(mediaBlob);
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        audioContextRef.current.decodeAudioData(arrayBuffer, (audioBuffer) => {
          const playbackSource = audioContextRef.current.createBufferSource();
          playbackSource.buffer = audioBuffer;
          playbackSource.connect(analyserRef.current);
          analyserRef.current.connect(audioContextRef.current.destination);
          playbackSource.start(0);
          drawWaveform();
          
          playbackSource.onended = () => {
            setIsPlaying(false);
            const canvas = canvasRef.current;
            const canvasCtx = canvas.getContext("2d");
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
          };
        });
      };
    }
  };

  return (
    <div className="absolute bg-white top-0 left-0 right-0 bottom-0 mx-auto justify-center flex items-center w-[1024px] h-[600px]  text-left text-xs text-black font-manrope z-50">

    <div>
      <p>Status: {status}</p>
      <button onClick={startRecording} disabled={status === 'recording'}>Start Recording</button>
      <button onClick={stopRecording} disabled={status !== 'recording'}>Stop Recording</button>
      <button onClick={playRecording} disabled={!mediaBlob || isPlaying}>Play Recording</button>
      <canvas ref={canvasRef} width="800" height="150" style={{ border: "1px solid black" }} />
    </div>
    </div>
  );
}

export default Ds1;






