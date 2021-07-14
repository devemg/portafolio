import React from 'react';
import './Skills.scss';

/**
 * 2nd Section
 * Message 
 */
class Skills extends React.Component {

    render() {
        return <section id="skills">
            <h1 className="title">Mis Habilidades</h1>
            <div className="grid">
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>Lenguajes de Programación</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626131123/my-portfolio/software-development_1_beajtn.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.languages.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>FrameWorks y librerías</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626129832/my-portfolio/Group_1_kmfoqy.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.frameworks.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>Cloud</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626129832/my-portfolio/Group_lwpqdi.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.cloud.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>Bases de Datos</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626131868/my-portfolio/database-storage_1_oeookf.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.databases.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>DevOps</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626130396/my-portfolio/eternity_1_1_h0og5s.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.devops.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid" data-aos="flip-left">
                    <div className="front">
                        <h2>IDEs y herramientas</h2>
                        <img src="https://res.cloudinary.com/devemg/image/upload/v1626131583/my-portfolio/repair_1_1_umg055.svg" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.tools.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item" key={element.name}>
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
            </div>
        </section>
    }
}

export default Skills;
