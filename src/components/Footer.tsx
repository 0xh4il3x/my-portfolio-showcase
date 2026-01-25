import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/0xh4il3x", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/haileamlaksahle", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Sahle_H", label: "Twitter" },
  ];

  return (
    <footer className="py-8 px-6 border-t border-primary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground font-body text-xs">
              © {currentYear} Haileamlak Sahle <span className="text-primary">|</span> All rights reserved
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors terminal-border hover:shadow-[0_0_10px_hsl(120_100%_50%/0.3)]"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
