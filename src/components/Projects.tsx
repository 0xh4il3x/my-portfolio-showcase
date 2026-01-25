import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    description: "A comprehensive financial management platform with real-time analytics and intuitive data visualization.",
    tags: ["React", "TypeScript", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout flow and personalized recommendations.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Health & Wellness App",
    description: "Mobile-first application helping users track fitness goals and maintain healthy habits.",
    tags: ["React Native", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl card-gradient card-shadow">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-body"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground font-body text-sm md:text-base mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
