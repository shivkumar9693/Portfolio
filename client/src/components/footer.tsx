import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Github, Code, Laptop, Mail } from "lucide-react";
import type { Profile } from "@shared/schema";

export function Footer() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  if (!profile) {
    return null;
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
          >
            {profile.name}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 mb-6"
          >
            {profile.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {profile.leetcodeUrl && (
              <a
                href={profile.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Code className="w-6 h-6" />
              </a>
            )}
            {profile.geeksforgeeksUrl && (
              <a
                href={profile.geeksforgeeksUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Laptop className="w-6 h-6" />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-t border-slate-700 pt-8"
          >
            <p className="text-slate-500">
              © 2025 {profile.name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
