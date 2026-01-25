import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(120 100% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(120 100% 50% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 terminal-border rounded bg-secondary/50"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm">
              root@kali:~$ whoami
            </span>
            <span className="w-2 h-4 bg-primary animate-blink" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient terminal-text">Haileamlak</span>
            <br />
            <span className="text-foreground">Sahle</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6"
          >
            <span className="text-primary font-body text-lg md:text-xl tracking-wider">
              {'< '}ETHICAL HACKER{' />'}
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            I find vulnerabilities before the bad guys do. Specializing in penetration testing, 
            vulnerability assessment, and helping organizations strengthen their security posture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#work"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover:shadow-[0_0_20px_hsl(120_100%_50%/0.5)] transition-all duration-300"
            >
              ./view_projects.sh
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 terminal-border text-primary font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-300"
            >
              ./contact_me.sh
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-widest uppercase font-body">scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;