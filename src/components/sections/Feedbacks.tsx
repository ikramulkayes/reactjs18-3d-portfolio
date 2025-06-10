import React from "react";
import { SectionWrapper } from "../../hoc";

const profileImg = "https://cvanalyzersmartgrad.blob.core.windows.net/octobrain-images/1749496089080-427974429_3600949756839247_6184173489217855334_n_1.jpg"; // Replace with actual image path

const summary = `Hi, I’m Ikramul Kayes – a passionate and results-driven software developer with a strong foundation in AI, backend systems, and full-stack development. Here's a quick overview of my journey so far:`;  

const highlights = [
  { text: "Over 1.5 years of hands-on experience in ", highlight: "AI Agents and Web Applications", tail: ", spanning academic initiatives and freelance engagements." },
  { text: "Successfully delivered ", highlight: "7+ paid", tail: " projects with a focus on reliability and efficiency." },
  { text: "Founding member of ", highlight: "2 startup ventures", tail: ", demonstrating entrepreneurial leadership." },
  { text: "Architected and implemented ", highlight: "database and backend infrastructure", tail: " for a social media platform with 1,000+ active users." },
  { text: "Developed complete Admin Panel", highlight: " for Octobrain", tail: " to manage its student-centered social platform." },
  { text: "Built and deployed ", highlight: "2 custom chatbot solutions", tail: " for a top edtech company in Bangladesh." },
  { text: "Collaborated with AI Buddy ", highlight: "to build 2 personalized chatbot solutions", tail: " for Canadian clients." },
  { text: "Engineered a robust ", highlight: "web scraper", tail: " capable of bypassing Cloudflare protection." },
  { text: "First Runner-Up and Global Nominee from Dhaka region at ", highlight: "NASA Space Apps Challenge 2022", tail: "." },
  { text: "Finalist at the ", highlight: "Bangladesh AI Hackathon 2025", tail: "." },
  { text: "Integrated multiple ", highlight: "payment and authentication systems", tail: " in production-grade web applications." },
  { text: "Experienced in ", highlight: "fine-tuning LLMs and transformer models", tail: " for domain-specific use cases." },
  { text: "Recipient of a ", highlight: "50% merit-based scholarship", tail: " at BRAC University for academic excellence." },
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
