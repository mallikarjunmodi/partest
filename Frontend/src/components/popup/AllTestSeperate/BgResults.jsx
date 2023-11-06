
import "./style/BgResults.css";
import React from 'react'

import PropTypes from 'prop-types'

function BgResults(props){
  return (
    <>
      <div className="h-f-readingsscreen-container">
        <div className="h-f-readingsscreen-container1">
        <div className="b-presult11-container3">
          <div className="b-presult11-container4">
            <span className="b-presult11-text">Your readings are normal</span>
            <span className="b-presult11-text01">AI Diagnosis</span>
            <span className="b-presult11-text02">
              <span>
                AI diagnosis on this reading will be shown here
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>for </span>
              <span>the user. If everything is good, it will say so.</span>
            </span>
          </div>
        </div>
        <div className="b-presult11-container5">
          <div className="b-presult11-container6">
          <span
              dangerouslySetInnerHTML={{
                __html:`<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_419_1579)">
        <rect x="20.7734" y="10.832" width="43.4388" height="43.4388" rx="5" fill="white" />
    </g>
    <path
        d="M46.9788 35.4602C46.6263 35.4602 46.3007 35.6482 46.1243 35.9536C45.9481 36.2588 45.9481 36.6349 46.1243 36.9401C46.3007 37.2453 46.6263 37.4333 46.9788 37.4333C48.5711 37.4333 50.0424 36.584 50.8385 35.205C51.6347 33.8259 51.6347 32.1271 50.8385 30.7478C50.0424 29.3689 48.5711 28.5195 46.9788 28.5195C46.6263 28.5195 46.3007 28.7076 46.1243 29.0128C45.9481 29.318 45.9481 29.6941 46.1243 29.9992C46.3007 30.3046 46.6263 30.4927 46.9788 30.4927C47.8661 30.4927 48.686 30.966 49.1297 31.7345C49.5734 32.5028 49.5734 33.4497 49.1297 34.2181C48.686 34.9866 47.8661 35.4599 46.9788 35.4599V35.4602Z"
        fill="#125873" />
    <path
        d="M37.7438 37.6882L44.1217 42.1722C44.3199 42.3114 44.5625 42.373 44.803 42.345C45.0437 42.3169 45.2656 42.2015 45.4265 42.0203C45.5873 41.8393 45.6761 41.6053 45.6756 41.3631V24.5915C45.6754 24.3494 45.5865 24.116 45.4254 23.9355C45.2644 23.7548 45.0426 23.6397 44.8023 23.612C44.562 23.5842 44.3197 23.6457 44.1217 23.7849L37.7438 28.2663H34.5375C34.2758 28.2663 34.0248 28.3702 33.8398 28.5554C33.6547 28.7403 33.5508 28.9913 33.5508 29.253V36.7016C33.5508 36.9632 33.6547 37.2143 33.8398 37.3992C34.0248 37.5843 34.2758 37.6882 34.5375 37.6882L37.7438 37.6882ZM35.5241 30.2396H38.0891C38.3613 30.2388 38.6209 30.1254 38.8067 29.9263L43.7025 26.4882V39.4664L38.8116 36.0283C38.6257 35.8293 38.366 35.7159 38.0938 35.715H35.5312L35.5241 30.2396Z"
        fill="#125873" />
    <defs>
        <filter id="filter0_d_419_1579" x="0.773438" y="0.832031" width="83.4375" height="83.4375"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha" />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.0187153 0 0 0 0 0.236739 0 0 0 0 0.320833 0 0 0 0.16 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_1579" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_1579" result="shape" />
        </filter>
    </defs>
</svg>`,
}}
/>
          </div>
        </div>
        <h1 className="b-presult11-text07">Test successfully taken!</h1>
        <div className="b-presult11-container7">
          <span className="b-presult11-text08">{props.data.result}</span>
          <label className="b-presult11-text09">mg/DL</label>
          <span className="b-presult11-text10">Blood Glucose</span>
          <h3 className="b-presult11-text11">Result</h3>
        </div>
        <button type="button" className="b-presult11-button button"onClick={props.onContiueClick}>
          Check again
        </button>
        <button type="button" className="b-presult11-button1 button" onClick={props.onExitClick}>
          Done
        </button>
        </div>
      </div>

    </>
  )
}



export default BgResults


