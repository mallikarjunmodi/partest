import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import WaveSurfer from 'wavesurfer.js';

const AudioWavePage = () => {
    const waveformRef = useRef(null);
    let wavesurfer = null;

    useEffect(() => {
        // Initialize WaveSurfer
        wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple'
        });

        // Connect to Socket.io server
        const socket = io('http://localhost:3000'); // Replace with your server URL

        socket.on('audioData', (audioData) => {
            // Handle the incoming audio data
            // Convert the audio data to a format suitable for WaveSurfer if necessary
            // This depends on how your audio data is being sent from the server
        });

        return () => {
            socket.disconnect();
            wavesurfer.destroy();
        };
    }, []);

    return (
        <div>
            <h1>Audio Wave Visualization</h1>
            <div id="waveform" ref={waveformRef}></div>
        </div>
    );
};

export default AudioWavePage;
