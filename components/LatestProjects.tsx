import { Project, Projects } from "../interfaces/projects";
import { motion } from "framer-motion";
import SectionTitle from "../layout/components/SectionTitle";
import ProjectCard from "./ProjectCard";

const LatestProjects = ({ projects }: Projects) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Latest Projects" type="projects" path="/portfolio" />
      <section className="min-h-screen max-w-screen-xl mx-auto">
        {projects.map((item: Project) => (
          <ProjectCard key={item.slug} {...item} />
        ))}
      </section>
    </motion.section>
  );
};

export default LatestProjects;
