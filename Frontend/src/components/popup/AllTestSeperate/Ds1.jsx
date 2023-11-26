import React, { useState, useEffect, useRef } from 'react';

const DSRecording = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [status, setStatus] = useState('idle');
  const [mediaBlob, setMediaBlob] = useState(null);
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

  return (
    <div className="absolute flex items-center justify-center h-[600px] z-[200]" style={{ width: '64rem', backgroundColor: 'rgba(0, 0, 0, 0.354)' }}>
    <div className="relative bg-gray-200 w-full h-[600px] text-center text-[32px] text-mediumaquamarine font-manrope">
      <div className="absolute top-[77px] left-[46px] w-[942.9px] h-[428px]">
        <div className="absolute top-[0px] left-[0px] w-[942.9px] h-[428px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[942.9px] h-[428px]" />
          <button onClick={startRecording} disabled={status === 'recording'} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[345px] left-[391px] w-40 h-[54px]">
            <div className="absolute top-[0px] left-[0px] w-40 h-[54px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-indianred shadow-[0px_10px_20px_rgba(36,_99,_15,_0.16)] w-40 h-[54px]" />
              <div className="absolute top-[14.6px] left-[62px] text-base font-semibold font-manrope text-white text-center inline-block w-[37px] h-[24.8px]">
                Start
              </div>
            </div>
          </button>
          <button onClick={stopRecording} disabled={status !== 'recording'} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[345px] left-[491px] w-40 h-[54px]">
            <div className="absolute top-[0px] left-[0px] w-40 h-[54px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-indianred shadow-[0px_10px_20px_rgba(36,_99,_15,_0.16)] w-40 h-[54px]" />
              <div className="absolute top-[14.6px] left-[62px] text-base font-semibold font-manrope text-white text-center inline-block w-[37px] h-[24.8px]">
                Stop
              </div>
            </div>
          </button>
          <div className="absolute top-[133px] left-[0px] bg-#ffffff w-[943px] h-[163px]">
            <canvas ref={canvasRef} width="943" height="163" style={{ border: "0px solid black" }} />
          </div>
          <div className="absolute top-[43px] left-[395px] font-semibold">
            Listening
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DSRecording;
