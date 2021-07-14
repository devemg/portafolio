import React from 'react';
import './Message.scss';
import arrowImage from '../../assets/down-arrow-white.svg';

/**
 * 2nd Section
 * Message 
 */
class Message extends React.Component {


    render() {
        return <section id="message" >
        <div id="canvas-particles" className="canvas-particles">
        </div>
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