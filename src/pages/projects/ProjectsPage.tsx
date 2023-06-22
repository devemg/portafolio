import { useEffect } from 'react';
import projects from '../../data/projects.data';
import { useAnalytics } from '../../hooks/useAnalytics';
import './ProjectsPage.scss';
import { ProjectCardComponent } from './project-card/ProjectCardComponent';

export const ProjectsPage = () => {
  const { sendEvent } = useAnalytics();
  useEffect(() => {
    sendEvent('ViewProjects');
  }, []);
  return (
    <div className='project'>
      <h1>My Projects</h1>
      <div className="project-container">
      {
        projects.map((item) => (<ProjectCardComponent key={item.id} project={item} />))
      }
      </div>
    </div>
  )
}
