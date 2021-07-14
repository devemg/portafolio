import './App.scss';
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
import { faTimes, faCode, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faGitlab,faGithub, faTimes, faCode, faHandPointRight);


const message = `Soy una desarrolladora de software dedicada y entusiasta.He desarrollado 
software desde hace más de cuatro años tanto para el área academica como colaboradora en proyectos independientes.
Soy curiosa y acostumbrada a aprender para enfrentarme a cualquier reto, siempre buscando hacer mi trabajo de la 
forma más eficiente posible.`;


/**
 * Principal component
 * @returns 
 */
function App() {
  const { languages, frameworks, cloud, devops, databases,tools,projects,contact } = data;
  return (
    <div>
      <Start />
      <Message message={message} />
      <Skills 
      languages = {languages}
      frameworks = {frameworks}
      cloud = {cloud}
      devops = {devops}
      databases = {databases}
      tools = {tools}
       />
      <Projects data={projects} />
      <Footer accounts= {contact} />
    </div>
  );
}

export default App;
