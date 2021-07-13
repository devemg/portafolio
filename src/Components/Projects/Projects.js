import React from 'react'
import data from './data'
import './Projects.scss';
import ProjectDetail from '../Project-detail/Project-detail';

/**
 * 2nd Section
 * List of projects 
 */
class Projects extends React.Component {

  state  = {selected: data[0]};

  render() {
    return <section id="projects">
      <h1>Mis Proyectos</h1>
      <div className="grid" >
        {
          data.map(element=>{
            return <div className="cell" key={element.id}  style={{'background':element.background}} >
              <img className="logo" src={element.logo} alt={element.name} />
            </div>
          })
        }
        {/*<ProjectDetail project={data[0]} /> */}
      </div>
    </section>
  }
}

export default Projects;