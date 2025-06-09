type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "MD Ikramul Kayes - Portfolio",
    fullName: "MD Ikramul Kayes",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "MD Ikramul Kayes",
    p: ["I develop Web Apps",  "AI powered solutions"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a Computer Science student at BRAC University with a strong focus on Natural Language Processing and backend development. I work part-time as a remote Trainee Software Developer at Home&Out, a USA-based startup, and also build data scraping tools for social media. At BRACU, I’ve contributed to Dichari’s AI & Control sub-team and served as an HR for multiple subteams. I’m an Approver at CNCF, a Microsoft Learn Student Ambassador, and was First Runner-Up at NASA Space Apps Challenge 2022 (Dhaka). Technically, I specialize in backend (Node.js, FastAPI, Next.js), frontend (React, Svelte), and databases (PostgreSQL, MySQL, MongoDB). I’m skilled in DevOps tools like Docker, Kubernetes, Terraform, and Azure, and experienced in deep learning (TensorFlow, PyTorch, Keras). My interests span deep learning, computer vision, robotics, and blockchain.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
