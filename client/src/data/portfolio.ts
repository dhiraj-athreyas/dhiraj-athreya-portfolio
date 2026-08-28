/**
 * Style reminder: Stealth Systems Console — factual portfolio data supports
 * architecture-led inspection rather than generic showcase cards.
 */

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  tags: string[];
  description: string;
  outcomes: string[];
  architecture: string[];
  stack: string[];
  role: string[];
  visual?: "vision" | "speech" | "rag" | "tutor" | "meeting" | "sports";
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  work: string[];
  stack: string[];
  note?: string;
};

export const expertise = [
  {
    index: "01",
    title: "GENERATIVE AI",
    items: ["RAG systems", "LLM evaluation", "LangChain", "LangGraph", "Agents"],
    icon: "spark",
  },
  {
    index: "02",
    title: "COMPUTER VISION",
    items: ["Detection", "Recognition", "Tracking", "Re-identification", "Video analytics"],
    icon: "vision",
  },
  {
    index: "03",
    title: "REAL-TIME AI",
    items: ["GStreamer", "Triton inference", "TensorRT", "GPU decoding", "RTSP streams"],
    icon: "signal",
  },
  {
    index: "04",
    title: "SPEECH & LANGUAGE",
    items: ["Faster-Whisper", "Diarization", "NLLB", "SeamlessM4T", "VITS"],
    icon: "audio",
  },
];

export const metricCards = [
  { value: "40", label: "CONCURRENT RTSP STREAMS VALIDATED" },
  { value: "8–12×", label: "MEASURED LATENCY REDUCTION" },
  { value: "100–250ms", label: "AT 15 CONCURRENT STREAMS" },
  { value: "26.3×", label: "REAL-TIME SPEECH TRANSLATION" },
];

export const projects: Project[] = [
  {
    id: "multi-camera-vision",
    index: "01",
    category: "COMPUTER VISION / REAL-TIME / GPU INFERENCE",
    title: "MULTI-CAMERA VISION AI PLATFORM",
    tags: ["RF-DETR", "InsightFace", "Triton", "Qdrant"],
    description:
      "A GPU-accelerated perception pipeline for real-time person detection, recognition, tracking, and cross-camera identity association across concurrent RTSP video streams.",
    outcomes: [
      "Validated scaling across 40 concurrent RTSP streams.",
      "Reduced measured latency from 800–3000+ ms to 100–250 ms at 15 concurrent streams.",
      "Improved fault isolation with multiprocessing and stream-level pipeline design.",
    ],
    architecture: ["RTSP STREAMS", "GPU / H.265 DECODE", "TRITON DYNAMIC BATCHING", "TRACKING + FACE RETRIEVAL", "EVENT PIPELINE"],
    stack: ["Python", "GStreamer", "RF-DETR", "InsightFace", "TensorRT", "NVIDIA Triton", "Qdrant", "OpenCV"],
    role: ["System architecture", "Inference optimization", "Pipeline engineering", "Deployment integration"],
    visual: "vision",
  },
  {
    id: "speech-ai",
    index: "02",
    category: "SPEECH AI / MULTILINGUAL / REAL-TIME",
    title: "MULTILINGUAL SPEECH PROCESSING PIPELINE",
    tags: ["Faster-Whisper", "NLLB", "VITS", "Silero VAD"],
    description:
      "A multilingual pipeline for language identification, transcription, translation, and speech synthesis, optimized for noisy maritime audio and real-time processing constraints.",
    outcomes: [
      "Improved language-identification accuracy to 82.35%, approximately 15% higher on noisy maritime audio.",
      "Processed 135 seconds of audio in 5.14 seconds for direct speech-to-English translation, achieving 26.3× real-time.",
      "Optimized cascaded translation to 32 sentences per second with 5.5× lower memory through FP16 quantization.",
    ],
    architecture: ["AUDIO INPUT", "VAD + LANGUAGE ID", "TRANSCRIBE", "TRANSLATE", "SPEECH SYNTHESIS"],
    stack: ["Faster-Whisper", "Silero VAD", "NLLB", "SeamlessM4T", "M2M100", "VITS", "FP16"],
    role: ["Pipeline development", "Evaluation", "Latency optimization", "Multilingual AI"],
    visual: "speech",
  },
  {
    id: "kautilya",
    index: "03",
    category: "GENAI / OSINT / RETRIEVAL",
    title: "KAUTILYA — OSINT RAG APPLICATION",
    tags: ["BM25", "Semantic Search", "RAG", "Vector Storage"],
    description:
      "An end-to-end multilingual OSINT pipeline that acquires web content, performs ingestion and vector storage, then enables intelligence retrieval through hybrid keyword and semantic search.",
    outcomes: [
      "Combined BM25 keyword matching with semantic retrieval for multilingual intelligence search.",
      "Built the workflow across web acquisition, ingestion, vector storage, and RAG retrieval.",
      "Designed as a current applied Generative AI system.",
    ],
    architecture: ["WEB ACQUISITION", "INGESTION", "HYBRID RETRIEVAL", "VECTOR STORAGE", "RAG RESPONSE"],
    stack: ["Python", "RAG", "BM25", "Semantic Search", "PostgreSQL", "pgvector", "Neo4j"],
    role: ["End-to-end development", "Retrieval design", "Ingestion engineering", "Knowledge organization"],
    visual: "rag",
  },
  {
    id: "vachaspathi",
    index: "04",
    category: "GENAI / EDUCATION / MULTILINGUAL",
    title: "VACHASPATHI — MULTILINGUAL AI TUTOR",
    tags: ["LLMs", "VITS", "NLLB", "M2M100"],
    description:
      "A multilingual educational assistant that delivers adaptive, LLM-generated explanations while integrating text-to-speech and language translation for accessible learning.",
    outcomes: [
      "Built adaptive explanatory flows generated by language models.",
      "Integrated VITS text-to-speech with M2M100 and NLLB translation capabilities.",
      "Developed as a current multilingual AI application.",
    ],
    architecture: ["LEARNER QUERY", "LLM EXPLANATION", "TRANSLATION", "TEXT-TO-SPEECH", "MULTILINGUAL OUTPUT"],
    stack: ["Python", "LLMs", "VITS", "M2M100", "NLLB", "Hugging Face Transformers"],
    role: ["Application development", "Multilingual pipeline", "Generative explanation design", "Speech integration"],
    visual: "tutor",
  },
  {
    id: "meeting-assistant",
    index: "05",
    category: "GENAI / SPEECH AI / AUTOMATION",
    title: "GENERATIVE AI MEETING ASSISTANT",
    tags: ["Diarization", "Transcription", "LLM Evaluation"],
    description:
      "A Generative AI assistant that converts meeting audio into diarized transcripts, summaries, and structured minutes while assessing open-source LLMs for accuracy and contextual coherence.",
    outcomes: [
      "Connected speaker diarization, transcription, summarization, and minutes-of-meeting generation.",
      "Evaluated open-source LLMs at multiple parameter scales.",
      "Focused model assessment on accuracy and contextual coherence.",
    ],
    architecture: ["MEETING AUDIO", "SPEAKER DIARIZATION", "TRANSCRIPTION", "LLM SUMMARIZATION", "STRUCTURED MINUTES"],
    stack: ["Faster-Whisper", "Speaker Diarization", "LLMs", "Python", "Hugging Face Transformers"],
    role: ["AI application engineering", "Model evaluation", "Speech pipeline integration", "Structured output design"],
    visual: "meeting",
  },
  {
    id: "injury-prediction",
    index: "06",
    category: "MACHINE LEARNING / WEB APPLICATION",
    title: "SPORTS INJURY RECOVERY PREDICTION",
    tags: ["Flask", "Scikit-learn", "MySQL", "ML"],
    description:
      "A Flask-based machine-learning application for predicting athlete injury recovery duration through feature engineering, preprocessing, model tuning, and a supporting MySQL schema.",
    outcomes: [
      "Applied feature engineering and preprocessing to injury recovery data.",
      "Tuned machine-learning models for prediction workflows.",
      "Designed the supporting MySQL data schema and Flask application layer.",
    ],
    architecture: ["ATHLETE DATA", "PREPROCESSING", "FEATURE ENGINEERING", "MODEL INFERENCE", "FLASK APPLICATION"],
    stack: ["Python", "Flask", "Scikit-learn", "MySQL", "Pandas", "NumPy"],
    role: ["ML development", "Feature engineering", "Model tuning", "Application design"],
    visual: "sports",
  },
];

export const techLayers = [
  { label: "AI / ML", items: ["PyTorch", "TensorFlow", "YOLO", "RF-DETR", "OpenCV", "MediaPipe"] },
  { label: "GENAI / NLP", items: ["RAG", "LangChain", "LangGraph", "AI Agents", "BM25", "Cross-Encoder"] },
  { label: "GPU / INFERENCE", items: ["DeepStream 8.0", "GStreamer", "TensorRT", "Triton", "NVIDIA Dynamo"] },
  { label: "DATA / RETRIEVAL", items: ["PostgreSQL", "pgvector", "Qdrant", "MilvusDB", "Neo4j", "MongoDB"] },
  { label: "DEPLOYMENT", items: ["Docker", "Nginx", "Linux", "Git", "SQL", "Power BI"] },
];

export const experience: Experience[] = [
  {
    period: "JAN 2026 — PRESENT",
    role: "AI / ML ENGINEER",
    organization: "BluParrot — Indian Navy Incubation Centre for AI (Client)",
    location: "Bangalore, India",
    work: [
      "Architecting and scaling production-grade multi-camera Vision AI for detection, recognition, tracking, and fault-isolated RTSP processing.",
      "Building multilingual speech systems and Generative AI applications including meeting intelligence and document/web RAG workflows.",
      "Containerizing and deploying complete AI application stacks with Docker and Nginx.",
    ],
    stack: ["Python", "Triton", "TensorRT", "GStreamer", "Qdrant", "RAG", "Docker"],
    note: "Represented the Indian Navy as an Exhibitor and Delegate at India AI Impact Expo 2026, New Delhi.",
  },
  {
    period: "AUG 2025 — DEC 2025",
    role: "AI RESEARCH ENGINEER",
    organization: "Indian Navy Incubation Centre for Artificial Intelligence",
    location: "Bangalore, India · Onsite",
    work: [
      "Evaluated CVF and IEEE computer-vision literature for multi-camera surveillance, re-identification, tracking, calibration, and geometric localization.",
      "Designed the initial multi-camera perception stack by benchmarking YOLO, InsightFace, TensorRT, ResNet50, and unified 2D mapping.",
      "Developed camera self-calibration, feature extraction, and a custom ResNet50 ReID pipeline for cross-camera identity association.",
    ],
    stack: ["YOLO", "InsightFace", "TensorRT", "ResNet50", "OpenCV", "Python"],
    note: "Co-authored a research paper documenting the system architecture, experimental methodology, and technical findings.",
  },
];

export const education = [
  {
    period: "2025 — 2027",
    degree: "M.TECH IN DATA SCIENCE & AI",
    school: "Indian Institute of Information Technology (IIIT), Dharwad",
    detail: "Current · 3rd semester · GPA 8.35",
  },
  {
    period: "DEC 2020 — MAY 2024",
    degree: "B.E. IN COMPUTER SCIENCE & ENGINEERING",
    school: "Dayananda Sagar Academy of Technology and Management",
    detail: "Bangalore, India · GPA 8.76 / 10",
  },
];
