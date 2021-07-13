import React from 'react';
import './Project-detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 * 1st Section
 * Start screen 
 */
class ProjectDetail extends React.Component {

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

    /**
     * Get carousel of images
     * @param {*} images 
     */
    getCarousel(images){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            
          };
          
        return <div className="images-container">
        <Slider style={{width:'100%'}} {...settings}>
            {
                images.map(element=>{
                    return <img key={element.id} src={element.url} alt="" />
                })
            }
        </Slider>
        </div>
    }

    render() {
        const { logo, name, background, description, demoDescription, demoUrl, codeUrl, credentials, color, images } = this.props.project; 

        return <section id="project-detail">
            <div className="title" style={{ background }}>
                <img src={logo} alt={name} />
                <button className="close-btn">
                <FontAwesomeIcon icon='times' color="white" />
                </button>
            </div>
            <div className="container">
                {images?this.getCarousel(images):''}
                <div className="info" style={{width:images?'50%':'100%'}}>
                    <h2>{name}</h2>
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
            </div>
        </section>
    }
}

export default ProjectDetail;