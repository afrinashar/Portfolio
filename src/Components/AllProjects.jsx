import React from 'react';
import { Project } from './Project';
import Projects from './Projects';
import { ProjectsAI } from './ProjectsAI';

const AllProjects = () => {
  return (
    <main aria-label="All Projects">
      <section aria-label="AI Projects">
        <ProjectsAI />
      </section>
      <section aria-label="Featured Project">
        <Project />
      </section>
      <section aria-label="Other Projects">
        <Projects />
      </section>
    </main>
  );
};

export default AllProjects;
