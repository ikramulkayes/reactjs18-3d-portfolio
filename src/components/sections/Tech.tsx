import { SectionWrapper } from "../../hoc";

const techStackColumns = [


    [
    "Docker",       "Kubernetes",       "Nginx",
    "Jenkins",      "Github Actions",   "Azure",
    "ArgoCD",       "Prometheus",       "Grafana",
    "Proxy",        "GitHub",           "Wireshark",
    "ROS",          "SvelteKit",        "Tailwind CSS"
  ],
  [
    "PyTorch",      "TensorFlow",       "Keras",
    "RAG",          "Qdrant",           "Faiss",
    "Unsloth",      "OpenAI",           "Selenium",
    "PostgreSQL",   "MongoDB",          "MySQL",
    "Prisma ORM",   "RabbitMQ",         "N8N"
  ],
  [
    "Python",       "TypeScript",       "C++",
    "FastAPI",      "Node.js",          "Go",
    "Flask",        "Express.js",       "PHP",
    "Django",       "NextJS",           "React",
    "OpenCV",       "Langchain",        "Llama Factory",
  ]
];


const Tech = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">STACK & TOOLS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techStackColumns.map((column, colIdx) => (
          <ul key={colIdx} className="space-y-2">
            {column.map((tool, idx) => (
              <li key={idx} className="flex items-center text-lg">
                <span className="text-green-400 mr-2">&#10003;</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
