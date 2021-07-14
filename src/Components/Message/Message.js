import React from 'react';
import './Message.scss';


/**
 * 2nd Section
 * Message 
 */
class Message extends React.Component {

    render() {
        return <section id="message">
        <div className="container-message">
            <div className="message">
            <p>{this.props.message}</p>
            </div>
        <div className="signature">
            {/*<h3>- Emely</h3> */}
        </div>
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