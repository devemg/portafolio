const data = {
    contact : [
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/emely-garciam',
          icon: ['fab','linkedin'],
          user: 'Emely García',
          color: '#0e76a8'
        },
        {
          name: 'Gmail',
          url: 'mailto:garciam.emm@gmail.com',
          icon: ['fab','google'],
          user: 'garciam.emm@gmail.com',
          color: '#ea4335'
        },
        {
          name: 'Github',
          url: 'https://github.com/devemg',
          icon: ['fab','github'],
          user: 'devemg',
          color: '#FFFF'
        },
        {
          name: 'Gitlab',
          url: 'https://gitlab.com/devemg',
          icon: ['fab','gitlab'],
          user: 'devemg',
          color: '#fc6d26'
        },
        {
          name: 'Hoja de Vida',
          url: 'https://drive.google.com/file/d/1U4HcwL_xmoxDnW7cgXlyE3elQW8hqxD5/view?usp=sharing',
          user: 'Hoja de Vida',
          icon: ['fas','file-alt'],
          color: '#dfdedc'
        }
    ],
    languages: [
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
    ],
    frameworks: [
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
    ],
    cloud: [
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
    ],
    databases: [
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
    ],
    devops: [
        {
          name: 'Gitlab CI',
          stared: true
        },
      
        {
          name: 'Jenkins',
          stared: true
        }
    ],
    tools: [
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
    ],
    projects: [
        {
          id:'123',
          name: 'RandomAQ',
          description: `RandomAQ es una applicación de preguntas y respuestas. 
          Está compuesta por dos aplicaciones: 
          Un panel de administración, desarrollado en Angular, en donde se ingresan las categorías, preguntas y respuestas.
          Y, una aplicación móvil, desarrollada en Ionic, en donde se elige una categoría y se genera una pregunta aleatoria con un 
          temporizador de 30 segundos para contestar la pregunta.`,
          demoDescription: 'A continuación se encuentra el enlace para acceder al panel de administración. ',
          demoUrl: 'https://random-aq.herokuapp.com/',
          codeUrl:'https://github.com/devemg/randomAQ',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1626140450/my-portfolio/apps/title-white_d3msus.svg',
          image:'https://res.cloudinary.com/devemg/image/upload/v1626198513/my-portfolio/apps/proyecto2_q1dyot.svg',
          height: 400,
          background: 'linear-gradient(218.49deg, #C04848 5.98%, #480048 98.42%)',
          color: '#C04848',
          credentials: {
            user: 'invitado@invitado.com',
            password:'invitado',
            description:'Utiliza las siguientes credenciales para ingresar.'
          },
          animation: 'fade-right'
        },
        {
          id:'456',
          name: 'FastMessages',
          description: `FastMessages es una aplicación de mensajería, desarrollada con el stack MEAN y socket.io. Permite la creación de cuentas,
          inicio de sesión, agregar o eliminar contactos y mensajería instantánea. `,
          demoDescription: 'A continuación se encuentra una demostración del frontend con data generada de forma aletoria.',
          demoUrl: 'https://devemg.github.io/fast-msg-fe/',
          codeUrl:'https://github.com/devemg/fast-msg-fe',
          height: 400,
          background: 'linear-gradient(29deg, rgba(75,59,29,1) 0%, rgba(179,116,0,1) 33%, rgba(238,155,0,1) 97%)',
          color: 'rgba(238,155,0,1)',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1626140964/my-portfolio/apps/Group_1_gwampj.svg',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1626196146/my-portfolio/apps/proyecto1_xpxbx7.svg',
          credentials: {
            user: 'invitado@fastmessages.com',
            password:'fastmessages',
            description:'Utiliza las siguientes credenciales para ingresar.'
          },
          animation: 'fade-left'
        }
    ]
}

export default data;