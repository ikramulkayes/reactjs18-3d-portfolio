import React from "react";
import { education } from "../../constants";
import { SectionWrapper } from "../../hoc";

const Education = () => (
  <section>
    <h2 className="text-3xl font-bold mb-4">Education</h2>
    {education.map((edu, idx) => (
      <div key={idx} className="mb-6 p-4 bg-tertiary rounded-lg shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <span className="font-semibold text-lg">{edu.degree}</span>
          <span className="text-sm text-secondary">{edu.duration}</span>
        </div>
        <div className="font-medium">{edu.institution}</div>
        <ul className="list-disc ml-6 mt-2 text-sm text-secondary">
          {edu.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default SectionWrapper(Education, "education"); 