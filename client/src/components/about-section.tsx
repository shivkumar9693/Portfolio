import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { MapPin, GraduationCap, TrendingUp, Briefcase } from "lucide-react";
import type { Profile } from "@shared/schema";

export function AboutSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  if (!profile) {
    return (
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  const summaryParts = profile.summary.split('.');
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {summaryParts[0]}.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {summaryParts[1]}.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">Location</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{profile.location}</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">Education</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300">B.Tech CSE (2026)</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">GPA</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300">8.29/10</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">Experience</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300">Backend Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              Interests & Hobbies
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary">🏏</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">Team Sports (Cricket)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary">💪</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  Strength Training & Fitness Enthusiast
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary">🔓</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  Open Source Contribution
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary">🧠</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">
                  Problem Solving & DSA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
