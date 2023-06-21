import { NavLink } from 'react-router-dom';
import './ProjectCardComponent.scss';
import { SyntheticEvent } from 'react';

export const ProjectCardComponent = ({ project }: any) => {
  const onLoadImage = (event: SyntheticEvent<HTMLImageElement>) => {
    const parent = (event.target as HTMLImageElement).parentElement;
    if (parent) parent.style.display = 'flex';
  }
  return (
    <NavLink to={'./' + project.id } className='p-card' 
    style={{
      background: project.background,
    }}
    >
      <img src={project.logoSM} alt={project.name} onLoad={onLoadImage} />
    </NavLink>
  )
}
