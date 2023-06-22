import { useParams } from "react-router-dom";
import "./ProjectDetailPage.scss";
import { useMemo, useState } from "react";
import projects from "../../data/projects.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectCredentials, ProjectItem } from "../../models/project-item";
import { faHandPointRight, faCode, faKey } from "@fortawesome/free-solid-svg-icons";
import { CardComponent } from "../../components/card/CardComponent";

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectItem>();
  useMemo(() => {
    const p = projects.find((p) => p.id === id);
    setProject(p);
  }, [id]);
  if (!project) return;
  const {
    name,
    background,
    description,
    demoDescription,
    demoUrl,
    codeUrl,
    credentials,
    color,
    logo,
  } = project;
  return (
    <div className="info">
      <CardComponent
        style={{
          padding: "1rem 3rem",
        }}
      >
        <img className="info-logo" src={logo} alt={name} />
        <p className="info-description">{description}</p>
        { demoUrl && <p className="info-demo-description">{demoDescription}</p> }
        <div className="info-links">
          {demoUrl && (
            <a
              className="info-links-item"
              target="_blank"
              rel="noreferrer"
              href={demoUrl}
              style={{
                background: color,
              }}
            >
              <FontAwesomeIcon icon={faHandPointRight} />
              Demo
            </a>
          )}
          <a
            className="info-links-item"
            target="_blank"
            rel="noreferrer"
            href={codeUrl}
            style={{
              background: color,
            }}
          >
            <FontAwesomeIcon icon={faCode} />
            Code
          </a>
        </div>
        {demoUrl && credentials && getCredentials(credentials, background)}
      </CardComponent>
    </div>
  );
};

const getCredentials = (
  credentials: ProjectCredentials,
  background: string
) => {
  return (
    <div
      className="credentials"
      style={{
        background,
      }}
    >
      <p>{credentials.message}</p>
      <p>
        User: <strong>{credentials.username}</strong>
      </p>
      <p>
        Password: <strong>{credentials.password}</strong>
      </p>
    </div>
  );
};
