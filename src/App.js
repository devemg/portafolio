import './App.scss';
// components 
import Footer from './Components/Footer/Footer';
import Start from './Components/Start/Start';
import Message from './Components/Message/Message'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

// Font Awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGitlab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faCode, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faGitlab,faGithub, faTimes, faCode, faHandPointRight);

const contact = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/emely-garciam',
    icon: 'linkedin',
    user: 'Emely García',
    color: '#0e76a8'
  },
  {
    name: 'Gmail',
    url: 'mailto:garciam.emm@gmail.com',
    icon: 'google',
    user: 'garciam.emm@gmail.com',
    color: '#ea4335'
  },
  {
    name: 'Github',
    url: 'https://github.com/devemg',
    icon: 'github',
    user: 'devemg',
    color: '#FFFF'
  },
  {
    name: 'Gitlab',
    url: 'https://gitlab.com/devemg',
    icon: 'gitlab',
    user: 'devemg',
    color: '#fc6d26'
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
  },
  {
    name: 'ionic',
    icon: '',
    stared: true,
    front: true
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

const learning = [
  {
    name: 'udemy',
    icon: '',
    url: 'https://www.udemy.com/user/emmgarca/'
  }
];


const message = `Soy una desarrolladora de software dedicada y entusiasta.He desarrollado software desde hace más de cuatro años tanto para el área academica como colaboradora en proyectos independientes.
Soy curiosa y acostumbrada a aprender para enfrentarme a cualquier reto, siempre buscando hacer mi trabajo de la forma más eficiente posible.`;


/**
 * Principal component
 * @returns 
 */
function App() {
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
      <Projects />
      <Footer accounts= {contact} />
    </div>
  );
}

export default App;
