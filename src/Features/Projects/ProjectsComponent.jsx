import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from './ProjectSlice.jsx';

const ProjectsComponent = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.list);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsComponent;
