import React from 'react';
import './Skills.scss';

/**
 * 2nd Section
 * Message 
 */
class Skills extends React.Component {

    render() {
        return <section id="skills">
            <h1 className="title">Habilidades</h1>
            <div className="grid">
                <div className="item-grid">
                    <div className="front">
                        <h2>Lenguajes</h2>
                        <img src="https://image.flaticon.com/icons/png/512/4260/4260876.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.languages.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid">
                    <div className="front">
                        <h2>FrameWorks y Librerías</h2>
                        <img src="https://image.flaticon.com/icons/png/512/2519/2519443.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.frameworks.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid">
                    <div className="front">
                        <h2>Cloud</h2>
                        <img src="https://image.flaticon.com/icons/png/512/2637/2637212.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.cloud.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid">
                    <div className="front">
                        <h2>Bases de datos</h2>
                        <img src="https://image.flaticon.com/icons/png/512/2906/2906206.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.databases.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid">
                    <div className="front">
                        <h2>DevOps</h2>
                        <img src="https://image.flaticon.com/icons/png/512/2196/2196157.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.devops.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
                            {element.name}
                        </li> 
                    })}
                    </ul>
                </div>
                <div className="item-grid">
                    <div className="front">
                        <h2>IDEs y herramientas</h2>
                        <img src="https://image.flaticon.com/icons/png/512/1197/1197460.png" alt="lenguajes" />
                    </div>
                    <ul className="list">
                    {this.props.tools.filter(element=>element.stared)
                    .map(element=>{
                        return <li className="float-item">
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
