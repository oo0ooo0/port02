import React, { useEffect, useCallback, useRef, useState } from 'react';
import MockupIPhone from './MockupIPhone';
import './Sec2_iphone.css';
import './MockupIPhone.css';


function Sec2_iphone() {
   

  return (
      //        <!--  section2_mobileAnimation ------------------------------------  -->

    <section id="section2" >
    <h2 className="ir_su"> section2_mobile-animation</h2>
    <div className="container">
        <div className="row">
            <div className="sec2">
                <div className="phone-wrap">
                <MockupIPhone>
                    <div className="box1">
                        <div className="chat">
                        <div className="chat-title">
                            <h3 className="accountName">Carlos</h3>
                            <h4 className="accountState">online</h4>
                            <figure className="avatar">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                x="0px" y="0px" width="100%" height="100%" viewBox="0 0 491.666 491.667"
                                style={{fill: '#EEE3C1', stroke: '#EEE3C1'}} >

                                <path d="M420.833,491.667h-350c-13.807,0-25-11.193-25-25c0-35.865,15.14-79.272,40.499-116.115
                            c21.194-30.79,47.231-53.971,75.353-67.505c-12.395-11.273-23.07-25.016-31.515-40.69c-13.542-25.136-20.701-54.191-20.701-84.025
                            c0-41.461,13.648-80.637,38.43-110.307C173.766,17.056,208.547,0,245.833,0s72.066,17.056,97.934,48.026
                            c24.781,29.671,38.433,68.845,38.433,110.307c0,29.833-7.159,58.889-20.7,84.025c-8.445,15.674-19.121,29.415-31.516,40.688
                            c28.122,13.537,54.159,36.715,75.353,67.505c25.357,36.843,40.497,80.25,40.497,116.115
                            C445.833,480.473,434.641,491.667,420.833,491.667z M98.997,441.667h293.672c-4.805-20.489-14.854-42.908-28.521-62.766
                            c-21.59-31.368-48.529-51.887-75.853-57.773c-11.514-2.481-19.734-12.662-19.734-24.439v-17.861c0-8.989,4.828-17.286,12.643-21.73
                            c30.978-17.621,50.995-56.388,50.995-98.763C332.198,98.598,293.456,50,245.834,50c-47.621,0-86.364,48.598-86.364,108.333
                            c0,42.375,20.018,81.142,50.997,98.763c7.813,4.445,12.64,12.74,12.64,21.729v17.86c0,11.778-8.221,21.958-19.733,24.44
                            c-27.325,5.886-54.263,26.405-75.854,57.773C113.85,398.758,103.803,421.177,98.997,441.667z" />

                            </svg>
                            </figure>
                        </div>
                        <div className="messages">
                            <div className="messages-content"></div>
                        </div>
                        <div className="message-box">
                            <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
                            <button type="submit" className="message-submit">Send</button>
                        </div>

                        </div>
                        <div className="bg"></div>
                    </div>
                </MockupIPhone>

                <MockupIPhone>
                {/* <div className="box1"> */}

                </MockupIPhone>
                

                <MockupIPhone/>
                  
                            

                </div>{/* phone-wrap */}
            </div>{/* sec2 */}
        </div>{/* row */}
    </div> {/* container */}
</section>
  );
}

export default Sec2_iphone;
