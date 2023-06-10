import { NavLink } from 'react-router-dom';
import './ProjectCardComponent.scss';

export const ProjectCardComponent = ({ project }: any) => {
  return (
    <NavLink to={'./' + project.id } className='p-card' 
    style={{
      background: project.background,
    }}
    >
      <img src={project.logoSM} alt={project.name} />
    </NavLink>
  )
}
