import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Download, Github, Code, Laptop, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "@shared/schema";

export function HeroSection() {
  const { data: profile } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const scrollToContact = () => {
    const element = document.querySelector("#contact") as HTMLElement;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleResumeDownload = async () => {
    try {
      // Direct download of the resume file
      const link = document.createElement('a');
      link.href = '/resume/Shiv_Kumar_Thakur_Resume.pdf';
      link.download = 'Shiv_Kumar_Thakur_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert("Failed to download resume. Please try again later.");
    }
  };

  if (!profile) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Shiv Kumar Thakur"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8"
          >
            {profile.summary.split('.')[0]}.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button 
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            onClick={handleResumeDownload}
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center space-x-6"
        >
          {profile.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {profile.leetcodeUrl && (
            <a
              href={profile.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Code className="w-6 h-6" />
            </a>
          )}
          {profile.geeksforgeeksUrl && (
            <a
              href={profile.geeksforgeeksUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <Laptop className="w-6 h-6" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="text-2xl text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200"
          >
            <Phone className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
