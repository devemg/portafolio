import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./SkillsPage.scss";
import skills from "../../data/skills.data";
import { CardComponent } from "../../components/card/CardComponent";


export const SkillsPage = () => {
  const [skillSelected, setSkillSelected] = useState(skills[0]);

  return (
    <div className="skills">
      <CardComponent style = {{
        display: 'flex',
        padding: '1rem',
      }}>
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
          {skills.map((item) => (
            <span
              key={item.id}
              className={skillSelected.id === item.id ? "active" : ""}
              onClick={() => setSkillSelected(item)}
            ></span>
          ))}
        </div>
      </CardComponent>
    </div>
  );
};
