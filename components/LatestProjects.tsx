import { Project, Projects } from "../interfaces/projects";
import { motion } from "framer-motion";
import SectionTitle from "../layout/components/SectionTitle";
import LatestProjectsCard from "./LatestProjectsCard";

const LatestProjects = ({ projects }: Projects) => {
  return (
    <motion.section>
      <SectionTitle title="Latest Projects" type="projects" path="/portfolio" />
      <section className="lg:min-h-screen lg:max-w-screen-xl mx-auto grid lg:grid-cols-5 gap-4">
        {projects.map((item: Project) => (
          <LatestProjectsCard key={item.slug} {...item} />
        ))}
      </section>
    </motion.section>
  );
};

export default LatestProjects;
