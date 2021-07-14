import React from 'react';
import './Start.scss';
import arrowImage from '../../assets/down-arrow.svg';


/**
 * 1st Section
 * Start screen 
 */
class Start extends React.Component {

    render() {
        return <section id="home">
        <div className="container-name" data-aos="fade-up" data-aos-duration={this.props.animationDuration}>
            <h1>Hello!</h1>
            <h1>I’m Emely Garcia</h1>
            <h1>Web Developer</h1>
            <a href="#message" className="image-arrow">
                <img src={arrowImage} alt="arrow"/>
            </a>
        </div>
        </section>
    }
}

export default Start;