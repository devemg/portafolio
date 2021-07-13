import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

class Footer extends React.Component {

    render() {
        return <div> 
        <div id="footer">
            <div className="footer-left">
        dfwef
            </div>
            <div className="footer-right">
                <h3>Contacta conmigo</h3>
            {
                this.props.accounts.map(element=>{
                    return <a 
                    href={element.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="item" 
                    key={element.name}
                    >
                        <FontAwesomeIcon size="3x" icon={['fab', element.icon]} color={element.color} />
                        <p>{element.user}</p>
                    </a>
                })
            }
            </div>
        </div>
        <footer>&copy; 2021 - Emely Garcia - All rights reserved</footer>
        </div>;
    }
}

export default Footer;