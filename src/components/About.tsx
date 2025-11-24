import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <Card className="p-6 md:p-8 lg:p-10 shadow-custom-lg">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                Hi! I'm a passionate Full Stack Developer with a love for
                creating elegant solutions to complex problems. With expertise
                in modern web technologies, I specialize in building
                responsive, user-friendly applications that make a difference.
              </p>
              <p className="text-base md:text-lg">
                My journey in software development started with curiosity and
                has evolved into a career dedicated to continuous learning and
                innovation. I thrive in collaborative environments and enjoy
                turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-base md:text-lg">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Full Stack Development",
                  "Mobile Apps",
                  "Responsive Design",
                  "API Integration",
                  "Database Management",
                  "Version Control (Git)",
                  "Agile Methodologies",
                  "Ai/ML Integration",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
