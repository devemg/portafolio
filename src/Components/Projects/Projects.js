import React from 'react'
import data from './data'
import { Grid } from 'mauerwerk'
import './Projects.scss';

/**
 * 2nd Section
 * List of projects 
 */
class Projects extends React.Component {
  render() {
    return <section id="projects">
      <h1>Mis Proyectos</h1>
      <Grid
      className="grid"
      data={data}
      keys={d => d.name}
      heights={d => d.height}
      columns={2}>
      {(data, maximized, toggle) => (
        <div
          className="cell"
          style={{ backgroundImage: data.background }}
          onClick={toggle}>
          {maximized && (
            <div className="details">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
            </div>
          )}
          {!maximized && <div className="default">
           {/* portrait*/}
           <img className="logo" src={data.logo} alt={data.name}/>
            </div>}
        </div>
      )}
    </Grid>
    </section>
  }
}

export default Projects;