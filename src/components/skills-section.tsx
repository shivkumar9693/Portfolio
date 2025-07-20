import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Code, Layers, Wrench } from "lucide-react";
import type { Skill } from "@shared/schema";

const categoryIcons = {
  languages: Code,
  frameworks: Layers,
  tools: Wrench,
};

const categoryTitles = {
  languages: "Languages",
  frameworks: "Frameworks",
  tools: "Tools & Platforms",
};

const categoryColors = {
  languages: "from-primary to-secondary",
  frameworks: "from-secondary to-accent",
  tools: "from-accent to-primary",
};

export function SkillsSection() {
  const { data: skills = [] } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const title = categoryTitles[category as keyof typeof categoryTitles];
            const colorClass = categoryColors[category as keyof typeof categoryColors];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                          className={`bg-gradient-to-r ${colorClass} h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
