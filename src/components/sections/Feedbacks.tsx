import React from "react";
import { SectionWrapper } from "../../hoc";

const profileImg = "https://cvanalyzersmartgrad.blob.core.windows.net/octobrain-images/1749496089080-427974429_3600949756839247_6184173489217855334_n_1.jpg"; // Replace with actual image path

const summary = `Hello I am Ikramul! To save you time, here’s a concise summary of my journey so far:`;

const highlights = [
  { text: "Hands-on experience in ", highlight: "AI, MLOps, and DevOps", tail: ", applied across academic and freelance projects" },
  { text: "Built solutions like ", highlight: "Instagram scrapers, CV analyzers, and admin dashboards", tail: " using FastAPI, Selenium, Svelte, and Node.js" },
  { text: "Contributed to ", highlight: "MVP development", tail: " at Kater & Out using Express.js and Tailwind" },
  { text: "Developed computer vision modules using ", highlight: "YOLOv5 and OpenCV", tail: " for object detection and motion tracking" },
  { text: "Built complete platforms including ", highlight: "CI/CD pipelines and cloud hosting", tail: " with Docker, Azure, and GitHub Actions" },
  { text: "Developed both frontend and backend systems with ", highlight: "React, Svelte, Node.js, Django" },
  { text: "Worked with diverse tech stacks including ", highlight: "MongoDB, PostgreSQL, RabbitMQ, Prisma" },
  { text: "Experience integrating ", highlight: "LLMs with LangChain" },
  { text: "Actively contributed to ", highlight: "robotics R&D", tail: " with Jetson Xavier, Raspberry Pi, and ROS" },
  { text: "Built internal tools like ", highlight: "BRAC USIS seat notifier", tail: " and agricultural management systems" },
  { text: "Delivered software in sectors like ", highlight: "education, agriculture, digital marketing, and robotics" },
  { text: "Finalist at ", highlight: "Bangladesh AI Hackathon 2025" },
  { text: "Awarded ", highlight: "50% Merit-Based Scholarship", tail: " at BRAC University" },
];

const contact = {
  position: "Trainee Software Developer",
  company: "Kater & Out",
  email: "ikramul.kayesgg@gmail.com",
  phone: "+880-1994225023",
  cv: "#", // Replace with actual CV link
};


const Resume = () => (
  <section>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-tertiary rounded-lg p-8 shadow">
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img src={profileImg} alt="Profile" className="rounded-lg w-[180px] h-[220px] object-cover" />
      </div>
      <div className="flex-1">
        <p className="text-lg mb-4">{summary}</p>
        <ul className="list-disc ml-6 space-y-2 text-base">
          {highlights.map((item, idx) => (
            <li key={idx}>
              {item.text}
              {item.highlight && <span className="text-green-400 font-semibold">{item.highlight}</span>}
              {item.tail && <span>{item.tail}</span>}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-base">
          <div>
            <span className="font-semibold text-green-400">Current Position:</span> {contact.position}
          </div>
          <div>
            <span className="font-semibold text-green-400">Company:</span> {contact.company}
          </div>
          <div>
            <span className="font-semibold text-green-400">Phone:</span> {contact.phone}
          </div>
        </div>
        <div className="mt-2">
          <span className="font-semibold text-green-400">E-mail:</span> {contact.email}
        </div>
        <a
          href={contact.cv}
          className="inline-block mt-6 px-8 py-3 border-2 border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black font-semibold transition"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Resume, "resume");
