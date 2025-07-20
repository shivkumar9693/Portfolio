import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import type { Experience, Education } from "@shared/schema";

export function ExperienceSection() {
  const { data: experiences = [] } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const { data: education = [] } = useQuery<Education[]>({
    queryKey: ["/api/education"],
  });

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
              Professional Experience
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {experience.position}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {experience.company}
                    </p>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-3 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.startDate} - {experience.endDate || "Present"}
                      </div>
                    </div>
                    <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-slate-100">
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent"></div>
              
              {education.map((edu, index) => {
                const iconMap = {
                  "B.Tech": GraduationCap,
                  "12th": Award,
                  "10th": Award,
                };
                const degree = edu.degree.includes("B.Tech") ? "B.Tech" : edu.degree.includes("12th") ? "12th" : "10th";
                const IconComponent = iconMap[degree as keyof typeof iconMap] || GraduationCap;

                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h4>
                      <p className="text-secondary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.startDate} - {edu.endDate || "Present"}
                      </div>
                      {(edu.grade || edu.percentage) && (
                        <p className="text-slate-600 dark:text-slate-300">
                          {edu.grade && `GPA: ${edu.grade}`}
                          {edu.percentage && `Percentage: ${edu.percentage}`}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
