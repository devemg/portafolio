import projects from '../../data/projects.data';
import './ProjectsPage.scss';

export const ProjectsPage = () => {
  return (
    <div className='project'>
      {
        projects.map((item) => (<div className="project-card">
        <h4>{item.name}</h4>
      </div>))
      }
    </div>
  )
}
