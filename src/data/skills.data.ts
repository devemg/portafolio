import { faAngular, faAws, faBitbucket, faDigitalOcean, faGit, faGithub, faGithubSquare, faGitlab, faGoogle, faJava, faJenkins, faJira, faJsSquare, faPython, faReact, faSquareGitlab, faTrello } from "@fortawesome/free-brands-svg-icons";
import { SkillItem } from "../models/skill-category-item";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faTypescript } from "../assets/icons/faTypesctipt";
import { faCSharp } from "../assets/icons/faCSharp";
import { faCPlusPlus } from "../assets/icons/faCPlusPlus";
import { faPreact } from "../assets/icons/faPreact";
import { faJquery } from "../assets/icons/faJQuery";
import { faIonic } from "../assets/icons/faIonic";
import { faExpress } from "../assets/icons/faExpress";
import { faAzure } from "../assets/icons/faAzure";
import { faMysql } from "../assets/icons/faMysql";
import { faSqlserver } from "../assets/icons/faSQLServer";
import { faMongo } from "../assets/icons/faMongo";
import { faDynamo } from "../assets/icons/faDynamo";
import { faDotnet } from "../assets/icons/faDotnet";
import { faVisualStudio } from "../assets/icons/faVisualStudio";
import { faVisualCode } from "../assets/icons/faVisualCode";
import { faIntelij } from "../assets/icons/faIntelij";
import { faDatagrip } from "../assets/icons/faDatagrip";
import { faEclipse } from "../assets/icons/faEclipse";
import { faNetbeans } from "../assets/icons/faNetbeans";

const skills: SkillItem[] = [
    {
      id: 1,
      title: "Programming Languages",
      tools: [
        {
          id: 1,
          title: "Javascript",
          icon: faJsSquare,
        }, 
        {
          id: 2,
          title: "Typescript",
          icon: faTypescript,
        }, 
        {
          id: 3,
          title: "Java",
          icon: faJava,
        }, 
        {
          id: 4,
          title: "C#",
          icon: faCSharp,
        }, 
        {
          id: 5,
          title: "C++",
          icon: faCPlusPlus,
        }, 
        {
          id: 6,
          title: "Python",
          icon: faPython,
        }, 
      ],
    },
    {
      id: 2,
      title: "FrameWorks and librearies",
      tools: [{
        id: 1,
        title: "Angular",
        icon: faAngular,
        // description: `Angular is my favorite framework. I first used it back in 2018 (It was on version 6 at the time) and haven't left it since.
        // I love it because as a framework it provides everything you need to build applications. From the module system that allows lazy loading, to the excellent and understandable data binding and the forms handling to the CLI commands that allow you to generate almost any type of component in seconds.
        // I have built and collaborated on several types of applications with angular, from simple CRUDs and content managers to complex streaming applications.`
      }, 
      {
        id: 2,
        title: "React",
        icon: faReact,
      }, 
      {
        id: 3,
        title: 'preact',
        icon: faPreact
      }, 
      {
        id: 4,
        title: 'JQuery',
        icon: faJquery,
      },
      {
        id: 5,
        title: 'Ionic',
        icon: faIonic,
      },
      {
        id: 6,
        title: 'Express',
        icon: faExpress,
      },
      {
        id: 7,
        title: '.NET',
        icon: faDotnet,
      }
    ],
    },
    {
      id: 3,
      title: "Cloud",
      tools: [
        {
          id: 1,
          title: 'AWS',
          icon: faAws,
        },
        {
          id: 2,
          title: 'Google Cloud',
          icon: faGoogle,
        },
        {
          id: 3,
          title: 'Digital Ocean',
          icon: faDigitalOcean,
        },
        {
          id: 4,
          title: 'Azure',
          icon: faAzure,
        },
      ]
    },
    {
      id: 4,
      title: "Databases",
      tools: [
        {
          id: 1,
          title: 'MySQL',
          icon: faMysql,
        },
        {
          id: 2,
          title: 'SQL Server',
          icon: faSqlserver,
        },
        {
          id: 4,
          title: 'MongoDB',
          icon: faMongo,
        },
        {
          id: 5,
          title: 'DynamoDB',
          icon: faDynamo,
        },
      ]
    },
    {
      id: 5,
      title: 'Project Management',
      tools: [
        {
          id: 4,
          title: 'Jira',
          icon: faJira,
        },
        {
          id: 5,
          title: 'Trello',
          icon: faTrello,
        },
      ]
    },
    {
      id: 6,
      title: 'Version Control',
      tools: [
        {
          id: 3,
          title: 'Git',
          icon: faGit,
        },
        {
          id: 4,
          title: 'GitHub',
          icon: faGithub,
        },
        {
          id: 5,
          title: 'Gitlab',
          icon: faGitlab,
        },
        {
          id: 6,
          title: 'BitBucket',
          icon: faBitbucket,
        },
      ]
    },
    {
      id: 7,
      title: "Automatization",
      tools: [
        {
          id: 1,
          title: 'Gitlab',
          icon: faSquareGitlab,
        },
        {
          id: 2,
          title: 'Github Actions',
          icon: faGithubSquare,
        },
        {
          id: 3,
          title: 'Jenkins',
          icon: faJenkins,
        },
      ]
    },
    {
      id: 8,
      title: "IDEs and tools",
      tools: [
        {
          id: 1,
          title: 'Visual Studio',
          icon: faVisualStudio,
        },
        {
          id: 2,
          title: 'Visual Studio Code',
          icon: faVisualCode,
        },
        {
          id: 3,
          title: 'IntelliJ IDEA',
          icon: faIntelij,
        },
        {
          id: 4,
          title: 'Data Grip',
          icon: faDatagrip,
        },
        {
          id: 5,
          title: 'Eclipse',
          icon: faEclipse,
        },
        {
          id: 6,
          title: 'Netbeans',
          icon: faNetbeans,
        },
      ]
    },
  ];

  export default skills;