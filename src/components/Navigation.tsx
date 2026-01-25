import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "work", href: "#work" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/20" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-body text-sm text-primary">
            haileamlak<span className="animate-blink">_</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">./</span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="cyber-button px-4 py-2 bg-primary text-primary-foreground font-body text-sm hover:shadow-[0_0_15px_hsl(120_100%_50%/0.4)] transition-all"
            >
              hire_me.sh
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-primary/20"
      >
        <ul className="container mx-auto px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-body text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">./</span>{item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-body text-sm"
            >
              hire_me.sh
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;