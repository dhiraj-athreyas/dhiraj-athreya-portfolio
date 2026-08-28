# Dhiraj Athreya — AI/ML Engineer Portfolio

This is the repository for Dhiraj Athreya's professional portfolio, designed as a **Stealth Systems Console**.

---

# Dhiraj Athreya H
**AI/ML Engineer**  
📍 Bangalore, India | ✉️ dhiraj.athreyas@gmail.com | 🔗 [linkedin.com/in/dhiraj-athreyas](https://linkedin.com/in/dhiraj-athreyas)

## Summary
AI/ML Engineer with 1+ year of production experience building and deploying Computer Vision, Speech AI, and Generative AI systems for the Indian Navy. Proven track record of architecting GPU-accelerated multi-camera video analytics pipelines that scale to 40 concurrent RTSP streams while delivering 8–12× latency reduction. Skilled in designing hybrid RAG systems, multilingual speech pipelines, and LLM-powered applications using NVIDIA Triton, TensorRT, GStreamer, and modern open-source frameworks. Passionate about turning cutting-edge research into reliable, high-performance production systems.

## Technical Skills
- **Programming:** Python, SQL
- **Computer Vision & Deep Learning:** YOLO, RF-DETR, InsightFace, ResNet50, OpenCV, MediaPipe, PyTorch, TensorFlow
- **NVIDIA & Inference:** NVIDIA DeepStream 8.0, GStreamer, TensorRT, NVIDIA Dynamo, Triton Inference Server
- **Generative AI, Agentic AI & NLP:** RAG, LangChain, LangGraph, AI Agents, LLM Evaluation, Hugging Face Transformers, BM25, Semantic Search, Cross-Encoder Reranking, Speaker Diarization, Neo4j
- **Speech & Multilingual AI:** Faster-Whisper, Silero VAD, SeamlessM4T, NLLB, M2M100, VITS
- **Databases & Vector Search:** PostgreSQL, pgvector, MilvusDB, Qdrant, ChromaDB, MongoDB, Oracle SQL
- **Deployment & Tools:** Docker, Nginx, Git, NumPy, Pandas, Scikit-learn, Matplotlib, Power BI

## Professional Experience

### AI/ML Engineer
**BluParrot — Indian Navy Incubation Centre for AI (Client)** | *Jan 2026 – Present*
- **Real-Time Video Analytics:** Evolved a multi-camera Vision AI tracking pipeline from CPU/OpenCV decoding to GPU-accelerated GStreamer, multiprocessing, and Triton Inference Server; validated scalability across 40 concurrent RTSP streams while maintaining <20 GB VRAM utilization.
- **Inference Optimization:** Centralized RF-DETR and InsightFace inference using Triton dynamic batching and integrated Qdrant HNSW-based face retrieval, reducing measured latency from 800–3000+ ms to 100–250 ms at 15 concurrent streams with stream-level fault isolation.
- **Multilingual Speech Systems:** Engineered pipelines using Faster-Whisper, NLLB, SeamlessM4T, VITS, and Silero VAD. Improved language identification accuracy to 82.35% (∼15% improvement) on noisy maritime audio, reduced direct speech-to-English translation latency by 54% (26.3× real-time), and optimized cascaded translation throughput to 32 sentences/s using FP16 quantization.
- **Meeting Intelligence:** Built a Generative AI Meeting Assistant for speaker diarization, transcription, summarization, and structured minutes-of-meeting generation; evaluated open-source LLMs across parameter scales.
- **Knowledge Systems (RAG):** Engineered a hybrid document/web RAG pipeline with BM25 keyword matching, dense semantic retrieval, cross-encoder reranking, pgvector, and Neo4j knowledge graphs.
- **Exhibition:** Represented the **INDIAN NAVY** as an Exhibitor and Delegate at the India AI Impact Expo 2026, New Delhi.

### AI Research Engineer
**Indian Navy Incubation Centre for Artificial Intelligence** | *Aug 2025 – Dec 2025*
- Evaluated state-of-the-art computer vision literature (CVF/IEEE) for multi-camera surveillance, re-identification, tracking, calibration, and geometric localization.
- Designed and benchmarked the initial multi-camera perception stack using YOLO, InsightFace, TensorRT, ResNet50, and 2D mapping.
- Developed a custom ResNet50 ReID pipeline for cross-camera identity association.
- Co-authored a research paper documenting the system architecture, experimental methodology, and technical findings.

## Education
- **M.Tech in Data Science and AI** | *IIIT Dharwad (2025 – 2027)* — Current GPA: 8.35
- **B.E. in Computer Science and Engineering** | *Dayananda Sagar Academy of Technology and Management (2020 – 2024)* — GPA: 8.76/10

---

## Repository Guide & Development

This is a static Vite + React + TypeScript web app.

### Main Content Locations
| Purpose | Location |
| --- | --- |
| Portfolio projects, roles, metrics, stack | `client/src/data/portfolio.ts` |
| Page structure and sections | `client/src/pages/Home.tsx` |
| Main visual system | `client/src/index.css` |
| Portrait hero treatment | `client/src/pages/Home.portrait.css` |
| Images and resume | `client/public/portfolio-assets/` |

### Local Development
Install dependencies and start the development server with:
```bash
npx pnpm install --frozen-lockfile
npx pnpm dev
```
Use `npx pnpm build` to create the production output in `dist/public`.

### Deploy to Vercel
1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Select **Add New → Project** and import `dhiraj-athreya-portfolio`.
3. Vercel will automatically read `vercel.json` to handle the installation and build steps.
