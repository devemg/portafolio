import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

class Footer extends React.Component {


    render() {
        return <div> 
        <div id="footer" data-aos={this.props.accountAnimation} data-aos-duration={this.props.animationDuration}>
        <h3>Contacta conmigo</h3>
            <div className="footer-right">
            {
                this.props.accounts.map(element=>{
                    return <a 
                    href={element.url}       
                    target="_blank" 
                    rel="noreferrer" 
                    className="item" 
                    key={element.name}

                    onMouseEnter={this.handleHoverOn}
                    onMouseLeave={this.handleHoverOff}
                    >
                        <FontAwesomeIcon size="3x" icon={element.icon} color={element.color} />
                        <p className="info">{element.user}</p>
                    </a>
                })
            }
            </div>
        </div>
        <footer>&copy; 2023 - Emely Garcia - All rights reserved</footer>
        </div>;
    }
}

export default Footer;