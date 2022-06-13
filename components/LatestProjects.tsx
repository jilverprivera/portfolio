import SectionTitle from "./layout/SectionTitle";
import ProjectCard from "./ProjectCard";

import { Projects, Project } from "../interfaces/projects";

const LatestProjects = ({ projects }: Projects) => {
  return (
    <div className="relative max-w-6xl min-h-screen flex flex-col items-start justify-start mx-auto">
      <SectionTitle title="Latest Projects" type="projects" path="/portfolio" />
      <div className="w-full">
        {projects.map((project: Project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
