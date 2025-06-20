import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TEducation,
  TVolunteering,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  univeristyclub,
  usisadvising,
  smartgrad,
  instagramscraper,
  octoadminpannel,
  bdsmartagri,
  octobrainfrontend,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Chatbot Solution Provider",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
    {
    title: "Student Tutor",
    companyName: "BRACU CSE Department",
    icon: backend,
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Conducted consultation",
      "Checked Assignment and quiz script",
      "Helped student during Datastructure and Basic Programing lab",
    ],
  },
  {
    title: "Trainee Software Developer",
    companyName: "Home & Out",
    icon: web,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Home & Out is a USA-based food catering platform",
      "Contributed towards making the MVP using Express.js",
      "Made different components using Tailwind",
      "Tested the MVP to find and solve bugs",
    ],
  },
  {
    title: "Freelance Software Developer",
    companyName: "Self_Employed",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Created an Instagram scraper for a Digital Marketing platform using Selenium, Svelte, Proxy, Rabbitmq, FastApi and MongoDB",
      "Designed Database Schema for Octobrain EdTech Platform using Prisma and PostgreSQL",
      "Created the full backend of Octobrain Using Nodejs",
      "Developed the Admin panel frontend using Svelte",
      "Developed the CICD pipeline to host the containerised image on Azure",
      "Created the CV analyzer for Smartgrad an AI consultant Service",
    ],
  },
  {
    title: "General Member of AI and Control",
    companyName: "BRACU Alter Robotics Team",
    icon: creator,
    iconBg: "#383E56",
    date: "April 2023 - November 2023",
    points: [
      "Alter is a Robotics Team from Bracu University",
      "Fine-tuning computer vision models (Yolov5) for detecting necessary objects for rescue missions",
      "Prepared multiple datasets using selenium",
      "Using a switching mechanism to switch control between Jetson Javier and Rasberry.py for power saving.",
      "Wrote the functionality where the rover will be able to follow the rescuer using OpenCV and Mobile Net",
      "Added functionality to the rover where it will be able to detect motion using OpenCV",
    ],
  },
  {
    title: "Junior Contributor of AI",
    companyName: "BRACU Dichari",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "October 2022 - April 2023",
    points: [
      "Dichari is the first team from Bangladesh to participate in European Robotics League",
      "Wrote the code for controlling rover arms consisting of multiple actuators and motors using Arduino-Mega and Monster-Motor drivers.",
      "Contributed to making the rover follow a specific path using GPS",
    ],
  },

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [

  {
    name: "Octobrain a Social Media for Students",
    tagline: "A Complete Social Media for Students",
    detailedDescription: "Octobrain is a lively social media network built solely for students which has around 1,000 users. The network provides tools for post creation, comment writing, reaction selection, announcement display, connection making, notification delivery, along with ad placement. In addition, Octobrain improves student life by hosting activities such as workshops, competitions along with events, while also allowing easy access to course materials.",
    websiteLink: "#", // Replace with actual link if available
    myRole: "Designed the database and software architecture, developed the entire backend, created an admin panel using Svelte and integrated it with the backend, built a CI/CD pipeline using Jenkins, and hosted and maintained the application on Azure using Terraform and Ansible.",
    stackUsed: [
      "Express.js", "Svelte", "Postgresql", "Prisma ORM", "Azure VM", "Docker", "Azure blob storage", "Jenkins", "Terraform", "Prometheus", "Grafana", "Ansible"
    ],
    description:
      "Octobrain is a lively social media network built solely for students which has around 1,000 users. The network provides tools for post creation, comment writing, reaction selection, announcement display, connection making, notification delivery, along with ad placement. In addition, Octobrain improves student life by hosting activities such as workshops, competitions along with events, while also allowing easy access to course materials.",
    tags: [
      { name: "opengl", color: "blue-text-gradient" },
      { name: "c++", color: "green-text-gradient" },
    ],
    image: octobrainfrontend,
    sourceCodeLink: "#",
  },
 {
    name: "Instagram Scraper for Celebrity Sponsorship Analysis",
    tagline: "Automated Instagram Scraping and Analysis for Brands",
    detailedDescription: "Engineered a robust Instagram scraping solution for a digital agency serving top fashion brands. The system was designed to identify high-impact celebrities for product sponsorships by analyzing their followers and content. Key features included: Advanced Data Collection: Leveraged Selenium with rotating proxies to reliably extract comprehensive follower data, even at scale. Automated Computer Vision Analysis: Integrated a custom vision model to analyze profile and post images, identifying trending fashion products worn by users and celebrities. Scalable Architecture: Implemented asynchronous task scheduling with Uvicorn and RabbitMQ, enabling parallel scraping and analysis for maximum throughput. Actionable Insights: Delivered data-driven recommendations, empowering brands to target the most relevant celebrities for sponsorship. Engagement Automation: Developed a feature allowing celebrities to subscribe to our service, with bots posting context-aware, human-like comments on new Instagram uploads to boost engagement. This end-to-end solution enabled fashion brands to make informed sponsorship decisions and provided celebrities with automated, authentic audience interaction.",
    websiteLink: "#",
    myRole: "Developed the scraping engine, integrated computer vision analysis, and built the engagement automation features.",
    stackUsed: ["Selenium", "Python", "Computer Vision", "MongoDB", "FastAPI", "RabbitMQ"],
    description:
      "Engineered a robust Instagram scraping solution for a digital agency serving top fashion brands. The system was designed to identify high-impact celebrities for product sponsorships by analyzing their followers and content. Key features included: Advanced Data Collection: Leveraged Selenium with rotating proxies to reliably extract comprehensive follower data, even at scale. Automated Computer Vision Analysis: Integrated a custom vision model to analyze profile and post images, identifying trending fashion products worn by users and celebrities. Scalable Architecture: Implemented asynchronous task scheduling with Uvicorn and RabbitMQ, enabling parallel scraping and analysis for maximum throughput. Actionable Insights: Delivered data-driven recommendations, empowering brands to target the most relevant celebrities for sponsorship. Engagement Automation: Developed a feature allowing celebrities to subscribe to our service, with bots posting context-aware, human-like comments on new Instagram uploads to boost engagement. This end-to-end solution enabled fashion brands to make informed sponsorship decisions and provided celebrities with automated, authentic audience interaction.",
    tags: [
      { name: "selenium", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "rabbitmq", color: "green-text-gradient" },
    ],
    image: instagramscraper,
    sourceCodeLink: "#",
  },
  {
    name: "Smartgrad Data Scraper for LLM Training",
    tagline: "Automated Data Collection for AI Training",
    detailedDescription: "Smartgrad, a leading digital agency for student university placement, required a large, diverse dataset to train their AI-powered chatbot. I developed a sophisticated web scraper targeting MastersPortal.com, overcoming significant anti-scraping measures: Cloudflare Bypass: Engineered a Selenium-based scraper with advanced proxy rotation and anti-bot evasion techniques to bypass Cloudflare protection. High-Volume Data Extraction: Automated the collection of global university data, including programs, requirements, and rankings, to fuel Smartgrad's LLM. Data Quality Assurance: Ensured clean, structured, and reliable data for seamless integration into Smartgrad's AI systems. This project enabled Smartgrad to rapidly scale their knowledge base, accelerating the development of their intelligent student advisory chatbot.",
    websiteLink: "#",
    myRole: "Developed the web scraper, implemented anti-bot evasion, and ensured data quality for AI training.",
    stackUsed: ["Selenium", "Python", "Cloudflare Bypass"],
    description:
      "Smartgrad, a leading digital agency for student university placement, required a large, diverse dataset to train their AI-powered chatbot. I developed a sophisticated web scraper targeting MastersPortal.com, overcoming significant anti-scraping measures: Cloudflare Bypass: Engineered a Selenium-based scraper with advanced proxy rotation and anti-bot evasion techniques to bypass Cloudflare protection. High-Volume Data Extraction: Automated the collection of global university data, including programs, requirements, and rankings, to fuel Smartgrad's LLM. Data Quality Assurance: Ensured clean, structured, and reliable data for seamless integration into Smartgrad's AI systems. This project enabled Smartgrad to rapidly scale their knowledge base, accelerating the development of their intelligent student advisory chatbot.",
    tags: [
      { name: "selenium", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "cloudflare-bypass", color: "pink-text-gradient" },
    ],
    image: smartgrad,
    sourceCodeLink: "#",
  },
  {
    name: "Octobrain Admin Panel",
    tagline: "Comprehensive Admin Panel for EdTech Platform",
    detailedDescription: "I designed and developed a comprehensive admin panel for Octobrain, an innovative edtech platform with integrated social features. The admin panel empowered staff to efficiently manage all aspects of the platform: Modern Frontend: Built with Svelte and Flowbite components for a responsive, intuitive user experience. Robust Backend: Utilized Node.js and PostgreSQL to ensure secure, scalable management of users, clubs, workshops, schools, and events. Full Platform Control: Enabled administrators to oversee and coordinate all activities, from event scheduling to user management, streamlining operations and enhancing platform reliability.",
    websiteLink: "#",
    myRole: "Designed and developed the admin panel, integrated it with the backend, and ensured platform reliability.",
    stackUsed: ["Svelte", "Node.js", "PostgreSQL", "Flowbite"],
    description:
      "I designed and developed a comprehensive admin panel for Octobrain, an innovative edtech platform with integrated social features. The admin panel empowered staff to efficiently manage all aspects of the platform: Modern Frontend: Built with Svelte and Flowbite components for a responsive, intuitive user experience. Robust Backend: Utilized Node.js and PostgreSQL to ensure secure, scalable management of users, clubs, workshops, schools, and events. Full Platform Control: Enabled administrators to oversee and coordinate all activities, from event scheduling to user management, streamlining operations and enhancing platform reliability.",
    tags: [
      { name: "svelte", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "flowbite", color: "orange-text-gradient" },
    ],
    image: octoadminpannel,
    sourceCodeLink: "#",
  },
  {
    name: "BD Smart Agricultural System",
    tagline: "A Smart Platform for Agriculture in Bangladesh",
    detailedDescription: "BD Smart Agricultural System is a full-stack web platform designed to revolutionize the agricultural ecosystem in Bangladesh by enabling collaborative blogging, dynamic auctions, and smart delivery tracking. Built with React for the frontend, Django for the backend, and a containerized MySQL database, the platform allows farmers and agricultural experts to share knowledge through blogs and comments. An efficient auction system lets clients bid above an admin-monitored base price, ensuring fair trade. Delivery personnel can choose jobs based on preference, and payments are held as pending until successful delivery is confirmed. Once confirmed, farmers receive their payment minus a service fee, making AgriConnect a secure, transparent, and scalable agri-marketplace.",
    websiteLink: "#",
    myRole: "Developed the full-stack platform, implemented the auction and delivery tracking systems, and ensured secure payment processing.",
    stackUsed: ["React", "Django", "MySQL", "Docker"],
    description:
      "BD Smart Agricultural System  is a full-stack web platform designed to revolutionize the agricultural ecosystem in Bangladesh by enabling collaborative blogging, dynamic auctions, and smart delivery tracking. Built with React for the frontend, Django for the backend, and a containerized MySQL database, the platform allows farmers and agricultural experts to share knowledge through blogs and comments. An efficient auction system lets clients bid above an admin-monitored base price, ensuring fair trade. Delivery personnel can choose jobs based on preference, and payments are held as pending until successful delivery is confirmed. Once confirmed, farmers receive their payment minus a service fee, making AgriConnect a secure, transparent, and scalable agri-marketplace.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: bdsmartagri,
    sourceCodeLink: "#",
  },
  {
    name: "University Club Management System",
    tagline: "Centralized Club Activities for Universities",
    detailedDescription: "The University Club Management System is a role-based web application designed to streamline and centralize club activities within a university setting. Built with PHP for backend logic, MySQL for structured data storage, and HTML/CSS for a responsive interface, the system supports multiple user roles including students, club executives, OCA admins, department representatives, advisors, and sponsors. Key features include a public-facing landing page showcasing active clubs and events, a dynamic login system with multi-role authentication, and tailored views such as the Member and Panel views for event participation and internal club management. Administrative views like OCA and Advisor enable event approval, fund distribution, and financial oversight, while the Sponsor view allows organizations to donate, track funding history, and engage with club events. The system ensures secure operations like one-time event participation and controlled access to member data, delivering a collaborative and transparent platform for club management, sponsorship, and student engagement.",
    websiteLink: "#",
    myRole: "Developed backend logic, implemented multi-role authentication, and designed the database schema.",
    stackUsed: ["PHP", "MySQL", "HTML", "CSS"],
    description:
      "The University Club Management System is a role-based web application designed to streamline and centralize club activities within a university setting. Built with PHP for backend logic, MySQL for structured data storage, and HTML/CSS for a responsive interface, the system supports multiple user roles including students, club executives, OCA admins, department representatives, advisors, and sponsors. Key features include a public-facing landing page showcasing active clubs and events, a dynamic login system with multi-role authentication, and tailored views such as the Member and Panel views for event participation and internal club management. Administrative views like OCA and Advisor enable event approval, fund distribution, and financial oversight, while the Sponsor view allows organizations to donate, track funding history, and engage with club events. The system ensures secure operations like one-time event participation and controlled access to member data, delivering a collaborative and transparent platform for club management, sponsorship, and student engagement.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: univeristyclub,
    sourceCodeLink: "#",
  },


  {
    name: "USIS Advising seat notifier",
    tagline: "Automated Seat Notification for University Advising",
    detailedDescription: "Dynamic solution for BRAC University Advising Platform. Alerts users via email when a coveted seat becomes available in a specified course section.",
    websiteLink: "#",
    myRole: "Developed the email notification system and integrated it with the university advising platform.",
    stackUsed: ["Python", "Automation"],
    description:
      "Dynamic solution for BRAC University Advising Platform. Alerts users via email when a coveted seat becomes available in a specified course section.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
    ],
    image: usisadvising,
    sourceCodeLink: "#",
  },
 
];

export const education: TEducation[] = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "BRAC University (Dhaka, Bangladesh)",
    duration: "July 2021 - Present",
    highlights: [
      "Executive at Brac University Leadership and Development Forum",
    ],
  },
];

export const volunteering: TVolunteering[] = [
  {
    title: "Alpha Student Ambassador",
    organization: "Microsoft Learn Student Ambassador",
    duration: "May 2022 - March 2023",
    description: [
      "It is the student ambassadors program by Microsoft",
      "Joined and hosted multiple international seminars on Microsoft technologies.",
    ],
  },
  {
    title: "Maintainer of Bangla Glossary",
    organization: "Cloud-Native Computing Foundation (CNCF)",
    duration: "February 2022 - February 2023",
    description: [
      "CNCF oversees open source cloud-native technologies",
      "Guiding contributor to making open-source contribution",
      "Added correction to contributors' commits",
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
