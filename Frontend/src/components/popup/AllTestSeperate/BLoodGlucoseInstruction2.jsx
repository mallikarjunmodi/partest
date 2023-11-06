import React from 'react'

import PropTypes from 'prop-types'

const Bginstruction2 = (props) => {
  return (
    <>
      <div className="bginstruction-container">
        <div className="bginstruction-container1">
          <div className="bginstruction-container2">
            <div className="bginstruction-container3">
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
</svg>`}}
             />           
             </div>
          </div>
          <button className="bginstruction-button button" onClick={props.onExitClick} >
            Exit
          </button>
          <span className="bginstruction-text">
            <span className="bginstruction-text1">
              Insert the strip in the red port as shown
            </span>
            <br className="bginstruction-text2"></br>
            <br className="bginstruction-text3"></br>
            <span className="bginstruction-text4"> - Insert and wait</span>
            <span className="bginstruction-text5">
              {' '}
              until the device detects the glucose strip
            </span>
            <br className="bginstruction-text6"></br>
          </span>
          <div className="bginstruction-container4">
            <div className="bginstruction-container5">
            <span
              dangerouslySetInnerHTML={{
                __html:`<?xml version="1.0" standalone="no"?>
<svg id="Group1171277404" width="226" height="300" viewBox="0 0 226 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; max-height: 100%;">
<path d="M0 20C0 8.95428 8.95431 0 20 0H205.714C216.76 0 225.714 8.9543 225.714 20V118.571H0V20Z" fill="#D9D9D9" stroke-dasharray="0,0,0,671.4107666015625"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,671.4107666015625; 
          0,335.70538330078125,335.70538330078125,0; 
          671.4107666015625,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M0 118.57H225.714V167.142C225.714 172.665 221.237 177.142 215.714 177.142H9.99999C4.47715 177.142 0 172.665 0 167.142V118.57Z" fill="#D9D9D9" stroke-dasharray="0,0,0,559.9925537109375"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,559.9925537109375; 
          0,279.99627685546875,279.99627685546875,0; 
          559.9925537109375,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<rect x="20" y="27.1445" width="187.143" height="98.5714" fill="#161313" stroke-dasharray="0,0,0,571.4288330078125"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,571.4288330078125; 
          0,285.71441650390625,285.71441650390625,0; 
          571.4288330078125,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></rect>
<circle cx="112.858" cy="15.7132" r="7.14286" fill="#0C0202" stroke-dasharray="0,0,0,44.59070587158203"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,44.59070587158203; 
          0,22.295352935791016,22.295352935791016,0; 
          44.59070587158203,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></circle>
<rect x="178.572" y="138.57" width="28.5714" height="28.5714" rx="5" fill="#666363" stroke-dasharray="0,0,0,104.90023803710938"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,104.90023803710938; 
          0,52.45011901855469,52.45011901855469,0; 
          104.90023803710938,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></rect>
<rect x="20" y="138.57" width="28.5714" height="28.5714" rx="5" fill="#D0CDCD" stroke-dasharray="0,0,0,104.90025329589844"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,104.90025329589844; 
          0,52.45012664794922,52.45012664794922,0; 
          104.90025329589844,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></rect>
<rect x="66.2148" y="143.355" width="24.7143" height="7.57143" rx="1.5" fill="#3B3838" stroke="#C60707" stroke-dasharray="0,0,0,61.05673599243164"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,61.05673599243164; 
          0,30.52836799621582,30.52836799621582,0; 
          61.05673599243164,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></rect>
<rect x="66.7148" y="143.855" width="29.4286" height="9.42857" rx="1" fill="#3B3838" stroke="#C60707" stroke-width="2" stroke-dasharray="0,0,0,75.3712158203125"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,75.3712158203125; 
          0,37.68560791015625,37.68560791015625,0; 
          75.3712158203125,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></rect>
<path d="M66.2148 295L66.2148 213.429C66.2148 212.6 66.8864 211.929 67.7148 211.929H96.572C97.4004 211.929 98.072 212.6 98.072 213.429L98.072 295C98.072 297.485 96.0573 299.5 93.572 299.5H70.7148C68.2296 299.5 66.2148 297.485 66.2148 295Z" fill="#B7B2B2" stroke="#686262" stroke-dasharray="0,0,0,233.7088165283203"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.5151515151515151s" values="0,0,0,233.7088165283203; 
          0,116.85440826416016,116.85440826416016,0; 
          233.7088165283203,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<line x1="65.7148" y1="238.07" x2="98.572" y2="238.07" stroke="#686262" stroke-dasharray="0,0,0,32.857200622558594"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,32.857200622558594; 
          0,16.428600311279297,16.428600311279297,0; 
          32.857200622558594,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></line>
<path d="M73.5723 215.715L73.5723 238.572" stroke="#686262" stroke-dasharray="0,0,0,22.857009887695312"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,22.857009887695312; 
          0,11.428504943847656,11.428504943847656,0; 
          22.857009887695312,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M81.4277 215.715L81.4277 238.572" stroke="#686262" stroke-dasharray="0,0,0,22.857009887695312"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,22.857009887695312; 
          0,11.428504943847656,11.428504943847656,0; 
          22.857009887695312,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M90 215.715L90 238.572" stroke="#686262" stroke-dasharray="0,0,0,22.857009887695312"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,22.857009887695312; 
          0,11.428504943847656,11.428504943847656,0; 
          22.857009887695312,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M83.5645 242.149C83.174 241.759 82.5408 241.759 82.1503 242.149L75.7864 248.513C75.3958 248.904 75.3958 249.537 75.7864 249.928C76.1769 250.318 76.81 250.318 77.2006 249.928L82.8574 244.271L88.5143 249.928C88.9048 250.318 89.538 250.318 89.9285 249.928C90.319 249.537 90.319 248.904 89.9285 248.513L83.5645 242.149ZM83.8574 244.285V242.857H81.8574V244.285H83.8574Z" fill="#686262" stroke-dasharray="0,0,0,48.71165466308594"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,48.71165466308594; 
          0,24.35582733154297,24.35582733154297,0; 
          48.71165466308594,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M83.5645 159.295C83.174 158.904 82.5408 158.904 82.1503 159.295L75.7864 165.659C75.3958 166.049 75.3958 166.682 75.7864 167.073C76.1769 167.463 76.81 167.463 77.2006 167.073L82.8574 161.416L88.5143 167.073C88.9048 167.463 89.538 167.463 89.9285 167.073C90.319 166.682 90.319 166.049 89.9285 165.659L83.5645 159.295ZM83.8574 207.145L83.8574 160.002L81.8574 160.002L81.8574 207.145L83.8574 207.145Z" fill="black" stroke-dasharray="0,0,0,140.1405792236328"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,140.1405792236328; 
          0,70.0702896118164,70.0702896118164,0; 
          140.1405792236328,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M77.1426 282.855L77.1426 299.998" stroke="#686262" stroke-dasharray="0,0,0,17.142974853515625"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,17.142974853515625; 
          0,8.571487426757812,8.571487426757812,0; 
          17.142974853515625,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M87.1426 282.855L87.1426 299.998" stroke="#686262" stroke-dasharray="0,0,0,17.142974853515625"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,17.142974853515625; 
          0,8.571487426757812,8.571487426757812,0; 
          17.142974853515625,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<path d="M76.4277 282.855H87.8563" stroke="#686262" stroke-dasharray="0,0,0,11.428604125976562"><animate attributeType="XML" attributeName="stroke-dasharray" repeatCount="1" dur="1.5151515151515151s" values="0,0,0,11.428604125976562; 
          0,5.714302062988281,5.714302062988281,0; 
          11.428604125976562,0,0,0" keyTimes="0; 0.5; 1" fill="freeze"></animate></path>
<setting>{"type":"direct","speed":33,"random":1,"shift":1,"size":1,"rupture":50}</setting></svg>`}}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bginstruction-container {
            width: 64rem;
            position:absolute;
            height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:rgba(0, 0, 0, 0.354);
            z-index: 200;
          }
          .bginstruction-container1 {
            flex: 0 0 auto;
            width: 942.88px;
            height: 428px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: 16px;
            justify-content: center;
            background-color: #ffffff;
          }
          .bginstruction-container2 {
            top: 26.83px;
            left: 35.77px;
            position: absolute;
          }
          .bginstruction-container3 {
            display: contents;
          }
          .bginstruction-button {
            top: 342px;
            left: 810px;
            color: #f15151;
            right: 40px;
            width: 100.93px;
            bottom: 46px;
            height: 54px;
            display: flex;
            position: absolute;
            box-shadow: 0px 10px 20px 0px rgba(241, 81, 81, 0.16);
            text-align: center;
            align-items: center;
            border-color: #f15151;
            border-width: 1px;
            border-radius: 10px;
            justify-content: center;
            background-color: #ffffff;
          }
          .bginstruction-text {
            top: 175px;
            left: 109px;
            width: auto;
            height: 148px;
            position: absolute;
            font-weight: 400;
          }
          .bginstruction-text1 {
            font-size: 16px;
            font-style: normal;
          }
          .bginstruction-text2 {
            font-size: 16px;
            font-style: normal;
          }
          .bginstruction-text3 {
            font-style: normal;
          }
          .bginstruction-text4 {
            font-size: 16px;
            font-weight: 700;
          }
          .bginstruction-text5 {
            font-size: 16px;
            font-style: normal;
          }
          .bginstruction-text6 {
            font-style: normal;
          }
          .bginstruction-container4 {
            top: 80px;
            flex: 2;
            right: 100px;
            width: 235px;
            height: 299px;
            position: absolute;
          }
          .bginstruction-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}


export default Bginstruction2
