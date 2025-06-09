import React from "react";
import { SectionWrapper } from "../../hoc";
import { volunteering } from "../../constants";

const achievements = [
  "First Runners up at NASA Space Apps Challenge, 2022",
  "Finalist at Bangladesh AI Hackathon 2025",
  "Merit-Based 50% Scholarship, BRAC University (2022- Present)",
];

const Achievements = () => (
  <section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-4">Achievements and Scholarships</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          {achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Volunteering Experience</h2>
        <ul className="space-y-6">
          {volunteering.map((vol, idx) => (
            <li key={idx} className="bg-tertiary rounded-lg p-4 shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <span className="font-semibold text-lg">{vol.title}</span>
                <span className="text-sm text-secondary">{vol.duration}</span>
              </div>
              <div className="font-medium mb-1">{vol.organization}</div>
              <ul className="list-disc ml-6 text-sm text-secondary">
                {vol.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Achievements, "achievements"); 