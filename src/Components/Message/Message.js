import React from 'react';
import './Message.scss';
import arrowImage from '../../assets/down-arrow-white.svg';
import Particles from "react-tsparticles";
import particlesConfig from './config-particles';

/**
 * 2nd Section
 * Message 
 */
class Message extends React.Component {



    render() {
        return <section id="message" >
        <Particles
        id="tsparticles"
        className="canvas-particles"
        options={particlesConfig}
      /> 
        <div className="message-container">
                <p className="message">{this.props.message}</p>
                <a href="#skills" className="image-arrow">
                <img src={arrowImage} alt="arrow"/>
            </a>
            </div>
    </section>
    }
}

export default Message;

/**
 * 
 * 
 * 
class Message extends React.Component {

    render() {
        return <section>
            
        </section>
    }
}

export default Message;

 */