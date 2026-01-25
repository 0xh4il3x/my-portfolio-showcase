import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "Penetration Testing", "Vulnerability Assessment", "Web App Security",
    "Network Security", "Burp Suite", "Metasploit", "Python", "Kali Linux"
  ];

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Securing systems
              <span className="text-gradient"> ethically</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm an ethical hacker passionate about cybersecurity. I help 
                organizations identify and fix vulnerabilities before malicious 
                actors can exploit them.
              </p>
              <p>
                My expertise spans penetration testing, vulnerability assessments, 
                and security audits. I believe in making the digital world safer 
                through responsible disclosure and proactive security measures.
              </p>
              <p>
                When I'm not hunting bugs, you'll find me participating in CTF 
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
              <h3 className="font-display text-xl mb-6 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-body"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { number: "100+", label: "Vulnerabilities Found" },
                { number: "50+", label: "Pentests Completed" },
                { number: "20+", label: "Clients Secured" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-display text-3xl md:text-4xl text-gradient mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
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
