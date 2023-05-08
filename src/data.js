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
        // {
        //   name: 'Hoja de Vida',
        //   url: 'https://drive.google.com/file/d/1U4HcwL_xmoxDnW7cgXlyE3elQW8hqxD5/view?usp=sharing',
        //   user: 'Hoja de Vida',
        //   icon: ['fas','file-alt'],
        //   color: '#dfdedc'
        // }
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
          description: `RandomAQ is a question and answer application. 
          It is composed of two applications: 
          An administration panel, developed in Angular, where categories, questions and answers are entered.
          And, a mobile application, developed in Ionic, where you choose a category and a random question is generated with a 30 seconds timer to answer the question. 
          timer of 30 seconds to answer the question.`,
          demoDescription: 'Below is the link to access the administration panel. ',
          codeUrl:'https://github.com/devemg/randomAQ',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1626140450/my-portfolio/apps/title-white_d3msus.svg',
          image:'https://res.cloudinary.com/devemg/image/upload/v1626198513/my-portfolio/apps/proyecto2_q1dyot.svg',
          height: 400,
          background: 'linear-gradient(218.49deg, #C04848 5.98%, #480048 98.42%)',
          color: '#C04848',
          credentials: {
            user: 'invitado@invitado.com',
            password:'invitado',
            description:'Use the following credentials to log in.'
          },
          animation: 'fade-right'
        },
        {
          id:'456',
          name: 'FastMessages',
          description: `FastMessages is a messaging application, developed with the MEAN stack and socket.io. It allows the creation of accounts,
          login, adding or deleting contacts and instant messaging. `,
          demoDescription: 'Below is a demonstration of the frontend with randomly generated data.',
          codeUrl:'https://github.com/devemg/fast-msg-fe',
          height: 400,
          background: 'linear-gradient(29deg, rgba(75,59,29,1) 0%, rgba(179,116,0,1) 33%, rgba(238,155,0,1) 97%)',
          color: 'rgba(238,155,0,1)',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1626140964/my-portfolio/apps/Group_1_gwampj.svg',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1626196146/my-portfolio/apps/proyecto1_xpxbx7.svg',
          credentials: {
            user: 'invitado@fastmessages.com',
            password:'fastmessages',
            description:'Use the following credentials to log in.'
          },
          animation: 'fade-left'
        },
        {
          id:'1011',
          name: 'Wheather TV',
          description: `Wheather TV is an application developed for the tizen-samsung OS that obtains the user's weather and location data and displays it in a user-friendly way.`,
          demoDescription: 'Tested on a samsung smart tv 2019. In order to verify functionality, temporarily disable site protection to avoid mixed active content blocked errors.',
          codeUrl:'https://github.com/devemg/wheather-tv',
          demoUrl: 'https://wheather-tv.web.app/',
          height: 400,
          background: 'linear-gradient(236.65deg, #4B79A1 1.05%, #1D384F 53.56%, #1D384F 63.5%, #1D384F 72.15%, #1D384F 83.14%, #1D384F 93.48%)',
          color: '#4B79A1',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1683515108/wheather-logo_jjswcc.svg',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1683516588/wtv-device_loum9g.png',
          animation: 'fade-right'
        },
        {
          id:'789',
          name: 'Playely',
          description: `Playely is a multilingual OTT frontend project for educational purposes. `,
          demoDescription: 'Below is a demonstration of the frontend with randomly generated data.',
          demoUrl: 'https://playely.firebaseapp.com/',
          codeUrl:'https://github.com/playely/web-app',
          height: 400,
          background: ' linear-gradient(180deg, #721E34 0%, #231221 40.63%, #050E1A 100%)',
          color: '#C52A47',
          logo: 'https://res.cloudinary.com/devemg/image/upload/v1683514859/playely-logo_fev4yk.svg',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1683516454/playely-devices_djkdrp.png',
          credentials: {
            user: 'any email',
            password:'any password with length greater than 4',
            description:'Use the following credentials to log in.'
          },
          animation: 'fade-left'
        },
    ]
}

export default data;