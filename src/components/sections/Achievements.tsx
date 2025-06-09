import React from "react";
import { volunteering } from "../../constants";
import { SectionWrapper } from "../../hoc";

const Volunteering = () => (
  <section>
    <h2 className="text-3xl font-bold mb-4">Volunteering Experience</h2>
    {volunteering.map((vol, idx) => (
      <div key={idx} className="mb-6 p-4 bg-tertiary rounded-lg shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <span className="font-semibold text-lg">{vol.title}</span>
          <span className="text-sm text-secondary">{vol.duration}</span>
        </div>
        <div className="font-medium">{vol.organization}</div>
        <ul className="list-disc ml-6 mt-2 text-sm text-secondary">
          {vol.description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default SectionWrapper(Volunteering, "volunteering"); 