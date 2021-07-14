import React from 'react'
import './Projects.scss';
import ProjectDetail from '../Project-detail/Project-detail';

/**
 * 2nd Section
 * List of projects 
 */
class Projects extends React.Component {

  state  = { selected: null };

  showProject = (element)=>{
    document.body.classList.add('modal-open');
    this.setState({selected:element});
  }

  hideProject = ()=>{
    document.body.classList.remove('modal-open');
    this.setState({selected:null})
  }

  render() {
    return <section id="projects">
      <h1>Mis Proyectos</h1>
      <div className="grid" >
        {
          this.props.data.map(element=>{
            return <div 
            className="cell" 
            key={element.id}  
            style={{'background':element.background}}
            onClick={()=>{this.showProject(element)}}
            >
              <img className="logo" src={element.logo} alt={element.name} />
            </div>
          })
        }
        {this.state.selected?<ProjectDetail project={this.state.selected} onClose={this.hideProject} />:null}
      </div>
    </section>
  }
}

export default Projects;