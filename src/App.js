import './App.scss';
import Footer from './Components/Footer/Footer';
import Start from './Components/Start/Start';
import Message from './Components/Message/Message'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

const projects = [
  {
    id:'123',
    name: 'RandomAQ',
    desc: `RandomAQ es una applicación de preguntas y respuestas. 
    Está compuesta por dos aplicaciones: 
    Un panel de administración, desarrollado en Angular, en donde se ingresan las categorías, preguntas y respuestas.
    Y, una aplicación móvil, desarrollada en Ionic, en donde se elige una categoría y se genera una pregunta aleatoria con un 
    temporizador de 30 segundos para contestar la pregunta.`,
    demoDesc: 'A continuación se encuentra el enlace para acceder al panel de administración. ',
    demoUrl: 'https://random-aq.herokuapp.com/',
    image: ''
  },
  {
    id:'456',
    name: 'FastMessage',
    desc: `Fast Messages es una aplicación de mensajería, desarrollada con el stack MEAN y socket.io. Permite la creación de cuentas,
    inicio de sesión, agregar o eliminar contactos y mensajería instantánea. `,
    demoDesc: 'A continuación se encuentra una demostración del frontend con data generada de forma aletoria.',
    demoUrl: 'https://devemg.github.io/fast-msg-fe/'
  }
];

const contact = [
  {
    title: 'Github',
    url: 'https://github.com/devemg'
  },
  {
    title: 'Gitlab',
    url: 'https://gitlab.com/devemg'
  }
];

/**
 * Principal component
 * @returns 
 */
function App() {
  return (
    <div>
      <Start />
      <Message />
      <Skills />
      <Projects value = {projects} />
      <Footer accounts= {contact} />
    </div>
  );
}

export default App;
