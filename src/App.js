import React from 'react';
import './App.scss';
import * as AOS from 'aos';
import "aos/dist/aos.css";
// components 
import Footer from './Components/Footer/Footer';
import Start from './Components/Start/Start';
import Message from './Components/Message/Message'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import data from './data';
// Font Awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGitlab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faCode, faHandPointRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGitlab,faGithub, faTimes, faCode, faHandPointRight, faFileAlt);


const message = `Soy una desarrolladora de software dedicada y entusiasta. He desarrollado 
software desde hace más de cuatro años para el área académica y desde hace uno en el área profesional.
Soy curiosa y autodidacta. En constante aprendizaje y preparandome para enfrentar cualquier reto y buscando hacer mi trabajo de la 
forma más eficiente posible.`;


/**
 * Principal component
 * @returns 
 */
class App extends React.Component {
 
  componentDidMount() {
    AOS.init();
  }

  render(){
    const { languages, frameworks, cloud, devops, databases,tools,projects,contact } = data;

    return (
      <div>
        <Start animation={"zoom-in"}  animationDuration={'1000'} />
        <Message message={message} animation={"fade-up"} animationDuration={'1000'} />
        <Skills 
        languages = {languages}
        frameworks = {frameworks}
        cloud = {cloud}
        devops = {devops}
        databases = {databases}
        tools = {tools}
        animationDuration={'1000'}
         />
          <Projects data={projects} animationDuration={'1000'} />
          <Footer accounts= {contact} accountAnimation={'fade-up'} animationDuration={'1000'} />
      </div>
    );
  }
}

export default App;
