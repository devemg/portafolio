import React from 'react';
import './Project-detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 1st Section
 * Start screen 
 */
class ProjectDetail extends React.Component {

    getCredentials(credentials){
        return <div className="credentials">
            <p>{credentials.description}</p>
            <p>Usuario: <strong>{credentials.user}</strong></p>
            <p>Contraseña: <strong>{credentials.password}</strong></p>
        </div>
    }

    render() {
        const { logo, name, background, description, demoDescription, demoUrl, codeUrl, credentials } = this.props.project; 
        return <section id="project-detail">
            <div className="title" style={{'background': background }}>
                <img src={logo} alt={name} />
                <button className="close-btn">
                <FontAwesomeIcon icon='times' color="white" />
                </button>
            </div>
            <div className="container">
                <div className="images">

                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{demoDescription}</p>
                   {
                       credentials? this.getCredentials(credentials):''
                   }
                    <a target="_blank" rel="noreferrer" href={demoUrl}>
                    <FontAwesomeIcon className="icon" icon='times'/>
                    Ver Demostración</a>
                    <a target="_blank" rel="noreferrer" href={codeUrl}>
                    <FontAwesomeIcon className="icon" icon='times'/>
                    Ver Código</a>
                </div>
            </div>
        </section>
    }
}

export default ProjectDetail;