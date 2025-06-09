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
    name: "BD Smart Agricultural System",
    description:
      "Collaborative blogging, efficient auctions, and streamlined delivery tracking for agricultural solutions in Bangladesh. React as frontend, Django as backend, containerized MySQL as database.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "#",
  },
  {
    name: "University Club Management System",
    description:
      "PHP-based website for managing club activities, events, and member roles. MySQL as database.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "#",
  },
  {
    name: "Artillery War",
    description:
      "OpenGL project: two artillery battle with each other by shooting artillery shells at the opponents.",
    tags: [
      { name: "opengl", color: "blue-text-gradient" },
      { name: "c++", color: "green-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "#",
  },
  {
    name: "USIS Advising seat notifier",
    description:
      "Dynamic solution for BRAC University Advising Platform. Alerts users via email when a coveted seat becomes available in a specified course section.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
    ],
    image: carrent,
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
