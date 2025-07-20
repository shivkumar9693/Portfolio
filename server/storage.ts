import {
  contacts, profile, skills, projects, experiences, education,
  type Contact, type InsertContact,
  type Profile, type InsertProfile,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Experience, type InsertExperience,
  type Education, type InsertEducation,
} from "@shared/schema";

export interface IStorage {
  // Profile
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  updateProfile(id: number, profile: Partial<InsertProfile>): Promise<Profile>;

  // Skills
  getSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Experiences
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;

  // Education
  getEducation(): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private profiles: Map<number, Profile>;
  private skillsList: Map<number, Skill>;
  private projectsList: Map<number, Project>;
  private experiencesList: Map<number, Experience>;
  private educationList: Map<number, Education>;
  private contactsList: Map<number, Contact>;
  
  private profileId: number = 1;
  private skillId: number = 1;
  private projectId: number = 1;
  private experienceId: number = 1;
  private educationId: number = 1;
  private contactId: number = 1;

  constructor() {
    this.profiles = new Map();
    this.skillsList = new Map();
    this.projectsList = new Map();
    this.experiencesList = new Map();
    this.educationList = new Map();
    this.contactsList = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize profile data
    const profileData: Profile = {
      id: 1,
      name: "Shiv Kumar Thakur",
      title: "Full-Stack Developer & Computer Science Student",
      location: "Madhubani, Bihar",
      email: "shivkumarthakur9693@gmail.com",
      phone: "+91 7543041029",
      summary: "Final-year Computer Science student and Full-Stack Developer possessing strong skills in programming, data structures, and problem-solving. Passionate about building impactful, real-world projects that enhance my technical abilities. Actively seeking opportunities in innovative tech environments where I can contribute creatively, drive productivity, and grow with emerging technologies.",
      githubUrl: "https://github.com/shivkumar9693",
      leetcodeUrl: null,
      geeksforgeeksUrl: "https://www.geeksforgeeks.org/user/shivkumartces0/",
    };
    this.profiles.set(1, profileData);

    // Initialize skills data
    const skillsData: Skill[] = [
      { id: 1, category: "languages", name: "Java", level: 85 },
      { id: 2, category: "languages", name: "JavaScript", level: 85 },
      { id: 3, category: "languages", name: "HTML/CSS", level: 80 },
      { id: 4, category: "languages", name: "SQL", level: 75 },
      { id: 5, category: "frameworks", name: "Node.js", level: 85 },
      { id: 6, category: "frameworks", name: "Express.js", level: 85 },
      { id: 7, category: "frameworks", name: "MongoDB", level: 80 },
      { id: 8, category: "frameworks", name: "Bootstrap", level: 75 },
      { id: 9, category: "tools", name: "Git", level: 85 },
      { id: 10, category: "tools", name: "REST API", level: 85 },
      { id: 11, category: "tools", name: "AWS Lambda", level: 75 },
      { id: 12, category: "tools", name: "DynamoDB", level: 75 },
    ];
    skillsData.forEach(skill => this.skillsList.set(skill.id, skill));
    this.skillId = skillsData.length + 1;

    // Initialize projects data
    const projectsData: Project[] = [
      {
        id: 1,
        name: "Hostel Management System",
        description: "Role-based web application with Admin, Subadmin, and Student panels to manage hostel operations. Features mess menu control, feedback monitoring with image support, and notification management.",
        technologies: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript", "CSS", "Bootstrap"],
        githubUrl: "https://github.com/shivkumar9693",
        liveUrl: null,
        featured: true,
      },
      {
        id: 2,
        name: "Job Portal",
        description: "Full-featured job portal with CRUD functionality, RESTful routing, dynamic notification system, and approval system for applications with real-time status updates and feedback alerts.",
        technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
        githubUrl: "https://github.com/shivkumar9693",
        liveUrl: null,
        featured: true,
      },
    ];
    projectsData.forEach(project => this.projectsList.set(project.id, project));
    this.projectId = projectsData.length + 1;

    // Initialize experience data
    const experienceData: Experience[] = [
      {
        id: 1,
        company: "HertzworkZ",
        position: "Backend Developer",
        location: "Namakkal, Tamil Nadu",
        startDate: "January 2025",
        endDate: "April 2025",
        current: false,
        description: [
          "Developed backend services using Node.js focusing on performance and scalability",
          "Built and deployed AWS Lambda functions to enable serverless architecture",
          "Integrated and managed DynamoDB for efficient NoSQL data storage and retrieval",
          "Contributed to REST API development and implemented proper request/response handling",
          "Created and maintained API documentation to ensure clarity and usability for the front-end and QA teams"
        ],
      },
    ];
    experienceData.forEach(exp => this.experiencesList.set(exp.id, exp));
    this.experienceId = experienceData.length + 1;

    // Initialize education data
    const educationData: Education[] = [
      {
        id: 1,
        institution: "Parul Institute Of Technology",
        degree: "B.Tech",
        field: "Computer Science and Engineering",
        startDate: "2022",
        endDate: "2026",
        grade: "8.29/10",
        percentage: null,
      },
      {
        id: 2,
        institution: "DON BOSCO CONVENT SCHOOL JHANJHARPUR MADHUBANI",
        degree: "12th Standard",
        field: null,
        startDate: "2019",
        endDate: "2021",
        grade: null,
        percentage: "82.80%",
      },
      {
        id: 3,
        institution: "Devasthali Vidyapeeth Chilkahar Ballia UP",
        degree: "10th Standard",
        field: null,
        startDate: "2019",
        endDate: "2019",
        grade: null,
        percentage: "91.60%",
      },
    ];
    educationData.forEach(edu => this.educationList.set(edu.id, edu));
    this.educationId = educationData.length + 1;
  }

  // Profile methods
  async getProfile(): Promise<Profile | undefined> {
    return this.profiles.get(1);
  }

  async createProfile(profile: InsertProfile): Promise<Profile> {
    const id = this.profileId++;
    const newProfile: Profile = { ...profile, id };
    this.profiles.set(id, newProfile);
    return newProfile;
  }

  async updateProfile(id: number, profile: Partial<InsertProfile>): Promise<Profile> {
    const existing = this.profiles.get(id);
    if (!existing) {
      throw new Error("Profile not found");
    }
    const updated: Profile = { ...existing, ...profile };
    this.profiles.set(id, updated);
    return updated;
  }

  // Skills methods
  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skillsList.values());
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return Array.from(this.skillsList.values()).filter(skill => skill.category === category);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const id = this.skillId++;
    const newSkill: Skill = { ...skill, id };
    this.skillsList.set(id, newSkill);
    return newSkill;
  }

  // Projects methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projectsList.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projectsList.values()).filter(project => project.featured);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const newProject: Project = { ...project, id };
    this.projectsList.set(id, newProject);
    return newProject;
  }

  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiencesList.values()).sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.experienceId++;
    const newExperience: Experience = { ...experience, id };
    this.experiencesList.set(id, newExperience);
    return newExperience;
  }

  // Education methods
  async getEducation(): Promise<Education[]> {
    return Array.from(this.educationList.values()).sort((a, b) => 
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }

  async createEducation(education: InsertEducation): Promise<Education> {
    const id = this.educationId++;
    const newEducation: Education = { ...education, id };
    this.educationList.set(id, newEducation);
    return newEducation;
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactsList.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.contactsList.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
