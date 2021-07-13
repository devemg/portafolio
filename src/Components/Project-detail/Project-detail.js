import React from 'react';
import './Project-detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * 1st Section
 * Start screen 
 */
class ProjectDetail extends React.Component {

    constructor(props){
        super(props);
        this.escFunction = this.escFunction.bind(this);
        this.modalRef = React.createRef();
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
        setTimeout(() => {
            document.body.classList.add('modal-open');
        }, 500);
    }
      
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    /**
     * Catch esc key
     * @param {*} event 
     */
    escFunction(event){
        if(event.keyCode === 27) {
          //close if is scape 
          this.close();
        }
    }

    /**
     * Close modal
     */
     close = ()=>{
        this.modalRef.current.classList.add('animate__zoomOut')
        document.body.classList.remove('modal-open');
        setTimeout(() => {
            this.props.onClose();
        },1000);
    } 

    /**
     * Get Credentials div
     * @param {*} credentials 
     * @returns 
     */
    getCredentials(credentials){
        return <div className="credentials">
            <p>{credentials.description}</p>
            <p>Usuario: <strong>{credentials.user}</strong></p>
            <p>Contraseña: <strong>{credentials.password}</strong></p>
        </div>
    }


    render() {
        const { logo, name, background, description, demoDescription, demoUrl, codeUrl, credentials, color, image } = this.props.project; 

        return <section id="project-detail" className="animate__animated animate__zoomIn" ref={this.modalRef} >
            <div className="title" style={{ background }}>
                <img src={logo} alt={name} />
                <button className="close-btn" onClick={this.close}>
                <FontAwesomeIcon icon='times' color="white" />
                </button>
            </div>
            <div className="container">
                <div className="info">
                    <p>{description}</p>
                    <p>{demoDescription}</p>
                   {
                       credentials? this.getCredentials(credentials):''
                   }
                    <a target="_blank" rel="noreferrer" href={demoUrl} style={{color}} >
                    <FontAwesomeIcon className="icon" icon='hand-point-right'/>
                    Ver Demostración</a>
                    <a target="_blank" rel="noreferrer" href={codeUrl} style={{color}}>
                    <FontAwesomeIcon className="icon" icon='code'/>
                    Ver Código</a>
                </div>
                <div className="images-container">
                    <img src={image} alt={name} />
                </div>
            </div>
        </section>
    }
}

export default ProjectDetail;