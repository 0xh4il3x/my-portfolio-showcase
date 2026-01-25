import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Terminal } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      style: {
        background: 'hsl(120 5% 6%)',
        border: '1px solid hsl(120 100% 50% / 0.3)',
        color: 'hsl(120 100% 50%)',
      },
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary font-body text-sm">{'>'}</span>
            <span className="text-primary font-body text-sm tracking-wider">./contact.sh</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-xl mx-auto">
            Need a security assessment? Looking to strengthen your defenses? 
            Let's discuss how I can help secure your systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="terminal-border p-4 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 border border-primary/30">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body mb-1">Email</p>
                  <a
                    href="mailto:haileamlak323@gmail.com"
                    className="text-sm text-foreground font-body hover:text-primary transition-colors"
                  >
                    haileamlak323@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="terminal-border p-4 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 border border-primary/30">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body mb-1">Location</p>
                  <p className="text-sm text-foreground font-body">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="terminal-border p-4 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 border border-primary/30">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body mb-1">Status</p>
                  <p className="text-sm text-primary font-body">Available for hire</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 terminal-border p-6 bg-card/50"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-accent/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs font-body text-muted-foreground ml-2">
                new_message.txt
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-body text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-body text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-body text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your security needs..."
                />
              </div>

              <button
                type="submit"
                className="cyber-button inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium text-sm hover:shadow-[0_0_20px_hsl(120_100%_50%/0.5)] transition-all duration-300 w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
