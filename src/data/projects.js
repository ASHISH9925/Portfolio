const PROJECTS = [
  {
    name: "Obscura",
    tag: "Zero-knowledge encryption",
    period: "Oct 2025 – Dec 2025",
    tech: "Node.js, Express, MongoDB, React, Tailwind, Sharp",
    description:
      "Zero-knowledge file encryption platform — servers persist only ciphertext. In-memory AES-256-GCM encryption, UUID-based access control, and steganographic key delivery via PNG images.",
    link: "https://obscura.ashishcodes.com",
    photo: "/Images/Project_photos/Obscura.png",
  },
  {
    name: "StegoCrypt",
    tag: "Image steganography toolkit",
    period: "Feb 2025 – Mar 2025",
    tech: "Flask, OpenCV, NumPy, React, Pycryptodome",
    description:
      "Pixel-level image steganography using LSB bit-plane manipulation, balancing payload capacity and imperceptibility. Secure backend for processing paired with a React frontend for upload and visualization.",
    link: "https://stegocrypt.ashishcodes.com",
    photo: "/Images/Project_photos/StegoCrypt.jpeg",
  },
  {
    name: "Omniscient",
    tag: "AI-driven forensics platform",
    period: "Jul 2025 – Sep 2025",
    tech: "Next.js, LangChain, LLaMA 3.2, Gunicorn",
    description:
      "AI-powered risk intelligence platform that automates social media evidence extraction, analysis, and investigative reporting. Includes a RAG-backed chatbot for context-aware querying and automated forensic report generation.",
    link: "https://github.com/ASHISH9925/Omniscient",
    photo: "/Images/Project_photos/Omniscient.png",
  },
  {
    name: "Rakshak Netra",
    tag: "Browser-level DLP",
    period: "",
    tech: "Fine-tuned BERT, browser extension",
    description:
      "Real-time data leak prevention system that intercepts and redacts sensitive PII locally in the browser using a fine-tuned BERT model.",
    link: "https://github.com/yashraj-n/rakshak-pii",
    photo: "/Images/Project_photos/rakshak_netra.png",
  },
  {
    name: "BidForge",
    tag: "Multi-agent AI system",
    period: "Built in 24 hours",
    tech: "HuggingFace embeddings, MongoDB Atlas vector search, Fastify, Bun",
    description:
      "Multi-agent distributed AI system that automates business RFP proposal generation, built end to end in a 24-hour hackathon window.",
    link: "https://github.com/yashraj-n/ignisia-hackathon",
    photo: "/Images/Project_photos/bidforge.png",
  },
  {
    name: "RIFT",
    tag: "Remote intrusion & forensics",
    period: "",
    tech: "Django, WebSockets, JWT, MySQL",
    description:
      "Remote Intrusion Framework Tool — real-time remote intrusion and forensics tooling with a secure Django backend and authenticated live sessions.",
    link: "https://github.com/ASHISH9925/RIFT---Backend",
    photo: "/Images/Project_photos/RIFT.png",
  },
];

export default PROJECTS;
