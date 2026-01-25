import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Bug, Terminal } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Penetration Testing", "Vulnerability Assessment", "Web App Security",
    "Network Security", "Burp Suite", "Metasploit", "Python", "Kali Linux"
  ];

  const stats = [
    { number: "100+", label: "Vulnerabilities Found", icon: Bug },
    { number: "50+", label: "Pentests Completed", icon: Shield },
    { number: "20+", label: "Clients Secured", icon: Terminal },
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-primary font-body text-sm">{'>'}</span>
              <span className="text-primary font-body text-sm tracking-wider">cat about.txt</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Securing systems
              <span className="text-gradient"> ethically</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed terminal-border p-6 bg-card/50">
              <p>
                <span className="text-primary">$</span> I'm an ethical hacker passionate about cybersecurity. I help 
                organizations identify and fix vulnerabilities before malicious 
                actors can exploit them.
              </p>
              <p>
                <span className="text-primary">$</span> My expertise spans penetration testing, vulnerability assessments, 
                and security audits. I believe in making the digital world safer 
                through responsible disclosure and proactive security measures.
              </p>
              <p>
                <span className="text-primary">$</span> When I'm not hunting bugs, you'll find me participating in CTF 
                competitions, contributing to security research, or sharing 
                knowledge with the infosec community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-primary font-body text-sm">{'>'}</span>
                <span className="text-primary font-body text-sm tracking-wider">ls skills/</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1.5 terminal-border bg-secondary/50 text-primary text-xs font-body hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="terminal-border p-4 bg-card/50 text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl md:text-3xl text-gradient mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;