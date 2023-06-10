import { useState } from "react";
import "./SkillsPage.scss";
import { faAngular, faAws, faBitbucket, faDigitalOcean, faGit, faGithub, faGithubSquare, faGitlab, faGoogle, faJava, faJenkins, faJira, faJsSquare, faPython, faReact, faSquareGitlab, faTrello } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillItem } from "../../models/skill-category-item";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const sections: SkillItem[] = [
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
        icon: faSquare,
      }, 
      {
        id: 3,
        title: "Java",
        icon: faJava,
      }, 
      {
        id: 4,
        title: "C#",
        icon: faSquare,
      }, 
      {
        id: 5,
        title: "C/C++",
        icon: faSquare,
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
      icon: faSquare
    }, 
    {
      id: 4,
      title: 'JQuery',
      icon: faSquare,
    },
    {
      id: 5,
      title: 'Ionic',
      icon: faSquare,
    },
    {
      id: 6,
      title: 'Express',
      icon: faSquare,
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
        icon: faSquare,
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
        icon: faSquare,
      },
      {
        id: 2,
        title: 'SQP Server',
        icon: faSquare,
      },
      {
        id: 3,
        title: 'OracleDB',
        icon: faSquare,
      },
      {
        id: 4,
        title: 'MongoDB',
        icon: faSquare,
      },
      {
        id: 5,
        title: 'DynamoDB',
        icon: faSquare,
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
        icon: faSquare,
      },
      {
        id: 2,
        title: 'Visual Studio Code',
        icon: faSquare,
      },
      {
        id: 3,
        title: 'IntelliJ IDEA',
        icon: faSquare,
      },
      {
        id: 4,
        title: 'Data Grip',
        icon: faSquare,
      },
      {
        id: 5,
        title: 'Eclipse',
        icon: faSquare,
      },
      {
        id: 6,
        title: 'Netbeans',
        icon: faSquare,
      },
    ]
  },
];

export const SkillsPage = () => {
  const [skillSelected, setSkillSelected] = useState(sections[0]);

  return (
    <div className="skills">
      <div className="skills-card">
        <div className="skills-card-content">
          <h1>{skillSelected.title}</h1>
          <div className="skills-card-content-data">
            {
              skillSelected.tools.map((item: any) => (<div className="skills-card-content-data-item" key={item.id} >
                <FontAwesomeIcon size="5x" icon={item.icon} ></FontAwesomeIcon>
                <h4>{item.title}</h4>
              </div>))
            }
          </div>
        </div>
        <div className="skills-card-dots">
          {sections.map((item) => (
            <span
              key={item.id}
              className={skillSelected.id === item.id ? "active" : ""}
              onClick={() => setSkillSelected(item)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
