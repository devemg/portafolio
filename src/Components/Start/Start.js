import React from 'react';
import './Start.scss';


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
        </div>
        </section>
    }
}

export default Start;