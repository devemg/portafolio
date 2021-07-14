import React from 'react';
import './Skills.scss';

const themes = [
    {
        title: 'Lenguajes de Programación',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626131123/my-portfolio/software-development_1_beajtn.svg',
        alt: 'lenguajes',
        word: 'languages'
    },
    {
        title: 'FrameWorks y librerías',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626129832/my-portfolio/Group_1_kmfoqy.svg',
        alt: '',
        word: 'frameworks'
    },
    {
        title: 'Cloud',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626129832/my-portfolio/Group_lwpqdi.svg',
        alt: 'cloud',
        word: 'cloud'
    },
    {
        title: 'Bases de Datos',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626131868/my-portfolio/database-storage_1_oeookf.svg',
        alt: 'databases',
        word: 'databases'
    },
    {
        title: 'DevOps',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626130396/my-portfolio/eternity_1_1_h0og5s.svg',
        alt: 'devops',
        word: 'devops'
    },
    {
        title: 'IDEs y herramientas',
        image: 'https://res.cloudinary.com/devemg/image/upload/v1626131583/my-portfolio/repair_1_1_umg055.svg',
        alt: 'tools',
        word: 'tools'
    }
];

/**
 * 2nd Section
 * Message 
 */
class Skills extends React.Component {

    
    render() {
        return <section id="skills">
            <h1 className="title">Mis Habilidades</h1>
            <div className="grid">

                {
                    themes.map(element=>{
                        return <div key={element.word} className="item-grid" data-aos={this.props.animation} data-aos-duration={this.props.animationDuration}>
                        <div className="front">
                            <h2>{element.title}</h2>
                            <img src={element.image} alt={element.alt} />
                        </div>
                        <ul className="list">
                        {this.props[element.word].filter(element=>element.stared)
                        .map(element=>{
                            return <li className="float-item" key={element.name}>
                                {element.name}
                            </li> 
                        })}
                        </ul>
                    </div>
                    })
                }
            </div>
        </section>
    }
}

export default Skills;
