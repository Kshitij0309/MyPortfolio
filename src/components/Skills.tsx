import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Layout,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
      "Flutter",
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "Progressive Web Apps"],
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["Git", "VS Code", "Figma", "Jira", "Agile/Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-custom-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
