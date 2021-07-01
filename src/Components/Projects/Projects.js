import React from 'react';
import './Projects.scss';

/**
 * 2nd Section
 * List of projects 
 */
class Projects extends React.Component {


    render() {
        return <section id="projects">
        <h1 className="title">Projects</h1>
        <div class="grid">
            <div class="grid-col grid-col--1"></div>
            <div class="grid-col grid-col--2"></div>
            <div class="grid-col grid-col--3"></div>
            <div class="grid-col grid-col--4"></div>
            <div class="grid-item">...</div>
            <div class="grid-item">...</div>
            <div class="grid-item">...</div>
        </div>
    </section>
    }
}

export default Projects;