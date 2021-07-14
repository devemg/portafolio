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
        <div className="container-message" data-aos={this.props.animation} data-aos-duration={this.props.animationDuration}>
            <div className="message" >
            <p >{this.props.message}</p>
            </div>
        <div className="signature">
            {/*<h3>- Emely</h3> */}
        </div>
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