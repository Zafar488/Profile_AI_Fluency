export const profile = {
  email: 'zafarullah1385@gmail.com',
  phone: '0319-2158535',
  location: 'Mardan, Pakistan',
  github: 'https://github.com/Zafar488',
  githubSecondary: 'https://github.com/zafarullah4050',
  linkedin: 'https://www.linkedin.com/in/zafar-ullah-84867b296/',
  resume: '/cv/Zafar_Ullah_AIML_Resume.pdf',
}

export const navItems = [
  ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['education', 'Education'], ['achievements', 'Achievements'],
]

export const roles = [
  {
    title: 'AI Engineer', organization: 'ALGO HUB Pakistan', type: 'Professional', status: 'Current',
    description: 'Developing AI/ML solutions with LangChain, LangGraph, Groq, and FastAPI, while creating structured technical material for Machine Learning and RAG cohorts.',
    tech: ['LangChain', 'LangGraph', 'Groq', 'FastAPI'],
  },
  {
    title: 'Machine Learning Engineering Intern', organization: 'FlyRank Pakistan', type: 'Internship · Machine Learning Track', status: 'Weeks 1–8 completed',
    description: 'Completed a privacy-safe Machine Learning capstone that prioritizes content-review opportunities using anonymized search data, covering data preparation, feature engineering, model evaluation, and responsible AI practices.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Model Evaluation'], link: 'https://github.com/Zafar488/flyrank-ml-internship',
  },
  {
    title: 'AI Developer — Generative AI Team', organization: 'Arch Technology Pakistan', type: 'Internship',
    description: 'Contributed to LLM-oriented application development using Python and generative AI tooling in a collaborative engineering environment.', tech: ['Python', 'Generative AI', 'LLMs'],
  },
  {
    title: 'Developer Intern', organization: 'Developer Hub Pakistan', type: 'Internship',
    description: 'Contributed to software development tasks while applying core programming principles and professional engineering practices.', tech: ['Software Development', 'Git'],
  },
  {
    title: 'Generative AI Intern', organization: 'DecodeLabs Pakistan', type: 'Internship',
    description: 'Developed practical experience with generative AI concepts, LLM tooling, and applied AI development workflows.', tech: ['Generative AI', 'LLM Applications'],
  },
  {
    title: 'Independent AI/ML Engineer', organization: 'Research & Product Projects', type: 'Ongoing',
    description: 'Designing end-to-end systems across agentic AI, computer vision, NLP, RAG, model evaluation, APIs, and containerized delivery.', tech: ['PyTorch', 'FAISS', 'FastAPI', 'Docker'],
  },
]

export const skillGroups = [
  { title: 'AI & Machine Learning', icon: 'BrainCircuit', skills: ['Machine Learning', 'Python', 'Deep Learning', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'Keras', 'CNNs', 'Transfer Learning'] },
  { title: 'Generative AI & LLMs', icon: 'Sparkles', skills: ['Generative AI', 'LangChain', 'LangGraph', 'Multi-agent Systems', 'RAG Systems', 'Prompt Engineering', 'Tool Calling', 'OpenAI', 'Groq', 'Gemini'] },
  { title: 'NLP & Computer Vision', icon: 'ScanSearch', skills: ['Natural Language Processing', 'AI Chatbots', 'Text Classification', 'Sentiment Analysis', 'OpenCV', 'Pillow', 'ResNet-50', 'EfficientNetB0'] },
  { title: 'Backend & APIs', icon: 'Braces', skills: ['FastAPI', 'REST APIs', 'Pydantic', 'Uvicorn', 'Pytest', 'Streamlit', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Data & Evaluation', icon: 'Database', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Feature Engineering', 'Model Evaluation', 'FAISS', 'ChromaDB', 'SQLite', 'Vector Search'] },
  { title: 'Development Tools', icon: 'TerminalSquare', skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Linux', 'CI/CD'] },
]

export const projects = [
  { featured: true, name: 'FlyRank ML Capstone', type: 'Machine Learning · Responsible AI', problem: 'Prioritizing high-value content-review opportunities without exposing private search data.', description: 'A live, privacy-safe ML system developed across Weeks 1–8 of the FlyRank Machine Learning Track using anonymized search data, robust feature engineering, and evaluated model outputs.', result: 'End-to-end, privacy-safe ML workflow', tech: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering'], github: 'https://github.com/Zafar488/flyrank-ml-internship', accent: 'emerald' },
  { featured: true, name: 'Fashion AI Studio', type: 'Computer Vision · Multi-agent AI', problem: 'Classifying fashion products reliably while routing uncertain predictions for review.', description: 'An end-to-end system for 31 fashion categories with image-quality checks, confidence calibration, prediction auditing, human review, feedback persistence, and a retraining queue.', result: '31 categories · Human-in-the-loop', tech: ['TensorFlow', 'EfficientNetB0', 'FastAPI', 'OpenCV'], github: 'https://github.com/Zafar488/Fashion-AI-Studio', accent: 'cyan' },
  { featured: true, name: 'AgriMind Pakistan', type: 'Agentic AI · RAG · Vision', problem: 'Making agricultural guidance accessible across language and technical barriers.', description: 'A bilingual advisory platform combining an 11-agent LangGraph architecture, ResNet-50 crop-disease detection, FAISS-backed RAG, FastAPI, and a six-page Streamlit interface.', result: '11 agents · English + Urdu', tech: ['LangGraph', 'ResNet-50', 'FAISS', 'Docker'], github: 'https://github.com/Zafar488', accent: 'blue' },
  { name: 'SmogNet', type: 'Environmental Machine Learning', problem: 'Turning large-scale air-quality data into actionable pollution intelligence.', description: 'A multi-model pipeline trained on more than 264,000 rows with anomaly detection, source classification, and a three-tier alert system.', result: '99.79% reported accuracy · National datathon runner-up', tech: ['Random Forest', 'Anomaly Detection', 'Python'], github: 'https://github.com/Zafar488', accent: 'violet' },
  { name: 'FinGuard AI', type: 'Agentic AI · Financial Risk', problem: 'Converting fraud-model signals into structured and explainable transaction decisions.', description: 'A LangGraph-orchestrated fraud detection workflow connecting machine learning components with multi-step decision logic.', result: 'Explainable agentic decision flow', tech: ['LangGraph', 'Machine Learning', 'Tool Calling'], github: 'https://github.com/Zafar488/FinGuard-AI', accent: 'amber' },
  { name: 'SupplyMind', type: 'Forecasting · Autonomous Agents', problem: 'Connecting demand forecasts directly to inventory decisions.', description: 'A demand forecasting pipeline paired with an autonomous reordering agent and automated business logic.', result: 'Forecast-to-action workflow', tech: ['Forecasting', 'Agentic AI', 'Python'], github: 'https://github.com/Zafar488/-SupplyMind-Ops-Center', accent: 'rose' },
]

export const additionalProjects = [
  ['ZK Restaurant Agents', profile.github], ['Multi-Modal Medical Diagnosis', 'https://github.com/Zafar488/Multi-Modal-Medical-Diagnosis'],
  ['GlobalCart AI Support Engine', 'https://github.com/Zafar488/GlobalCart-AI-Support-Engine'], ['AI Law Assistant', 'https://github.com/Zafar488/AI-LAW-ASSISTANT'],
  ['AI Crop Recommendation Agent', profile.github], ['RAG Knowledge Analyst', profile.github], ['Multimodal Reel Generation Engine', profile.github],
  ['Mental Health Support Agent', profile.github], ['Text-to-Math Problem Solver', profile.github], ['RAG Documents Q&A', profile.github],
  ['Superstore Sales Analytics & Forecasting', profile.github],
]
