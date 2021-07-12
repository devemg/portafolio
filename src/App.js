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

const languages = [
  {
    name: 'Javascript',
    icon: '',
    stared: true
  },
  {
    name: 'Typescript',
    icon: '',
    stared: true
  },
  {
    name: 'Java',
    icon: '',
    stared: true
  },
  {
    name: 'Python',
    icon: '',
    stared: false
  },
  {
    name: 'C++',
    icon: '',
    stared: false
  },
  {
    name: 'C#',
    icon: '',
    stared: true
  },
  {
    name: 'php',
    icon: '',
    stared: false
  },
  {
    name: 'Visual Basic',
    icon: '',
    stared: false
  },
  {
    name: 'Kotlin',
    icon: '',
    stared: false
  }
];

const frameworks = [
  {
    name: 'Angular',
    icon: '',
    stared:true,
    front: true
  },
  {
    name: 'JQuery',
    icon: '',
    stared: true,
    front: true
  },
  {
    name: 'React',
    icon: '',
    front: true,
    stared: true
  },
  {
    name: 'CodeIgniter',
    icon: '',
    stared:false,
    front: false
  },
  {
    name:'express',
    icon: '',
    stared: true,
    front: false
  }
];

const cloud = [
  {
    name: 'AWS',
    icon: '',
    stared: true
  },
  {
    name: 'Google Cloud',
    icon: '',
    stared: true
  },
  {
    name: 'Digital Ocean',
    icon: '',
    stared: true
  },
  {
    name: 'Azure',
    icon: '',
    stared: true
  }
];

const databases = [
  {
    name: 'MySQL',
    stared: true
  },
  {
    name: 'Oracle'
  },
  {
    name: 'SQL Server'
  },
  {
    name: 'MongoDB',
    stared: true
  },
  {
    name: 'DynamoDB',
    stared: true

  }
];

const devops = [
  {
    name: 'Gitlab CI',
    stared: true
  },

  {
    name: 'Jenkins',
    stared: true
  }
];


const tools = [
  {
    name: 'Visual Code',
    stared: true
  },
  {
    name: 'Visual Studio',
    status: true
  },
  {
    name: 'Apache netbeans',
    stared: false
  },
  {
    name: 'IntelliJ IDEA',
    stared: true
  },
  {
    name: 'Data Grip',
    stared: true
  },
  {
    name: 'WebStorm',
    status: true
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
      <Skills 
      languages = {languages}
      frameworks = {frameworks}
      cloud = {cloud}
      devops = {devops}
      databases = {databases}
      tools = {tools}
       />
      <Footer accounts= {contact} />
    </div>
  );
}

export default App;
