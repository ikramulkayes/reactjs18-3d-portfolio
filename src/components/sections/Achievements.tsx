import React from "react";
import { SectionWrapper } from "../../hoc";

const achievements = [
  "First Runners up at NASA Space Apps Challenge, 2022",
  "Finalist at Bangladesh AI Hackathon 2025",
  "Merit-Based 50% Scholarship, BRAC University (2022- Present)",
];

const Achievements = () => (
  <section>
    <h2 className="text-3xl font-bold mb-4">Achievements and Scholarships</h2>
    <ul className="list-disc ml-6 space-y-2 text-lg">
      {achievements.map((ach, idx) => (
        <li key={idx}>{ach}</li>
      ))}
    </ul>
  </section>
);

export default SectionWrapper(Achievements, "achievements"); 