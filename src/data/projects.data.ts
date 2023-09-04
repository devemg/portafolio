import { ProjectItem } from "../models/project-item";

const projects: ProjectItem[] = [
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
      logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1693850951/my-site-v2/aq-icon_vr53cg.svg',
      background: 'linear-gradient(218.49deg, #C04848 5.98%, #480048 98.42%)',
      color: '#C04848',
      credentials: {
        username: 'invitado@invitado.com',
        password:'invitado',
        message:'Use the following credentials to log in.'
      },
    },
    {
      id:'456',
      name: 'FastMessages',
      description: `FastMessages is a messaging application, developed with the MEAN stack and socket.io. It allows the creation of accounts,
      login, adding or deleting contacts and instant messaging. `,
      demoDescription: 'Below is a demonstration of the frontend with randomly generated data.',
      codeUrl:'https://github.com/devemg/fast-msg-fe',
      background: 'linear-gradient(29deg, rgba(75,59,29,1) 0%, rgba(179,116,0,1) 33%, rgba(238,155,0,1) 97%)',
      color: 'rgba(238,155,0,1)',
      logo: 'https://res.cloudinary.com/devemg/image/upload/v1626140964/my-portfolio/apps/Group_1_gwampj.svg',
      logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1693851339/my-site-v2/fm-white_fm5ame.svg',
      credentials: {
        username: 'invitado@fastmessages.com',
        password:'fastmessages',
        message:'Use the following credentials to log in.'
      },
    },
    {
      id:'1011',
      name: 'Wheather TV',
      description: `Wheather TV is an application developed for the tizen-samsung OS that obtains the user's weather and location data and displays it in a user-friendly way.`,
      demoDescription: 'Tested on a samsung smart tv 2019. In order to verify functionality, temporarily disable site protection to avoid mixed active content blocked errors.',
      codeUrl:'https://github.com/devemg/wheather-tv',
      demoUrl: 'https://wheather-tv.web.app/',
      background: 'linear-gradient(236.65deg, #4B79A1 1.05%, #1D384F 53.56%, #1D384F 63.5%, #1D384F 72.15%, #1D384F 83.14%, #1D384F 93.48%)',
      color: '#4B79A1',
      logo: 'https://res.cloudinary.com/devemg/image/upload/v1683515108/wheather-logo_jjswcc.svg',
      logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1693850951/my-site-v2/wtv_d4moh5.svg',
    },
    {
      id:'789',
      name: 'Playely',
      description: `Playely is a multilingual OTT frontend project for educational purposes. `,
      demoDescription: 'Below is a demonstration of the frontend with randomly generated data.',
      demoUrl: 'https://playely.firebaseapp.com/',
      codeUrl:'https://github.com/playely/web-app',
      background: ' linear-gradient(180deg, #721E34 0%, #231221 40.63%, #050E1A 100%)',
      color: '#C52A47',
      logo: 'https://res.cloudinary.com/devemg/image/upload/v1683514859/playely-logo_fev4yk.svg',
      logoSM: 'https://res.cloudinary.com/devemg/image/upload/v1693851606/my-site-v2/playely_ot63hl.svg',
      credentials: {
        username: 'any email',
        password:'any password with length greater than 4',
        message:'Use the following credentials to log in.'
      },
    },
  ];

  export default projects;