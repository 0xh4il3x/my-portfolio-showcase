import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield } from "lucide-react";

const projects = [
  {
    title: "Web App Penetration Testing",
    description: "Comprehensive security assessment identifying critical vulnerabilities in client web applications including SQLi, XSS, and authentication bypasses.",
    tags: ["Burp Suite", "OWASP", "Python"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Network Security Audit",
    description: "Full infrastructure penetration test discovering misconfigurations, privilege escalation paths, and lateral movement opportunities.",
    tags: ["Nmap", "Metasploit", "Kali Linux"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Security Automation Tools",
    description: "Custom Python scripts and tools to automate vulnerability scanning, reconnaissance, and reporting processes.",
    tags: ["Python", "Bash", "API Security"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
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
      className="group"
    >
      <div className="terminal-border bg-card/50 overflow-hidden hover:shadow-[0_0_30px_hsl(120_100%_50%/0.15)] transition-all duration-500">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-accent/60" />
            <span className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span className="text-xs font-body text-muted-foreground ml-2">
            ~/projects/{project.title.toLowerCase().replace(/\s+/g, '_')}
          </span>
        </div>

        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <Shield className="absolute top-4 right-4 w-6 h-6 text-primary opacity-50" />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-body border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <a
              href={project.link}
              className="flex items-center gap-2 text-xs font-body text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Case Study
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
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
    <section id="work" className="py-24 px-6 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary font-body text-sm">{'>'}</span>
            <span className="text-primary font-body text-sm tracking-wider">ls projects/</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;