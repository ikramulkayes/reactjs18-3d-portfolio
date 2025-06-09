import { SectionWrapper } from "../../hoc";

const techStackColumns = [
  [
    "Docker", "Supabase", "Selenium", "Redis", "Cloudflare", "NestJS", "Fiddler", "Node.js", "SvelteKit", "TypeScript", "Pinecone", "PostGIS", "Jenkins", "Ansible"
  ],
  [
    "AWS", "N8N", "Playwright", "RabbitMQ", "Terraform", "Nginx", "Express.js", "Prisma ORM", "Tailwind CSS", "RAG", "Faiss", "Kubernetes", "Langchain", "Prometheus"
  ],
  [
    "Azure", "GitHub", "Jest", "Supertest", "Pulumi", "Wireshark", "Next.js", "React", "FastApi", "Qdrant", "PostgreSQL", "MongoDB", "OpenAI", "Grafana"
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
