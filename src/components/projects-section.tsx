import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Github, ExternalLink, Building, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

const projectIcons = {
  "Hostel Management System": Building,
  "Job Portal": Briefcase,
};

export function ProjectsSection() {
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    select: (data) => data.filter(project => project.featured),
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.name as keyof typeof projectIcons] || Building;
            const gradientClass = index % 2 === 0 
              ? "from-primary/20 to-secondary/20" 
              : "from-secondary/20 to-accent/20";
            const iconColor = index % 2 === 0 ? "text-primary" : "text-secondary";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-slate-50 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                  <IconComponent className={`w-16 h-16 ${iconColor}`} />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`bg-${index % 2 === 0 ? 'primary' : 'secondary'}/10 text-${index % 2 === 0 ? 'primary' : 'secondary'} hover:bg-${index % 2 === 0 ? 'primary' : 'secondary'}/20`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
