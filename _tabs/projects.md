---
icon: fa-solid fa-hammer
order: 1
---

<div class="project-card">
  <div class="project-card-content">
    <h3>End-to-End LLM Development with RAG</h3>
      <img src="https://img.shields.io/badge/LangChain-353535?style=flat&logo=chainlink&logoColor=white" alt="LangChain">
      <img src="https://img.shields.io/badge/ClearML-2C3E50?style=flat&logoColor=white" alt="ClearML">
      <img src="https://img.shields.io/badge/Qdrant-FF4F64?style=flat&logo=qdrant&logoColor=white" alt="Qdrant">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
    <ul>
        <li>Orchestrated a containerised RAG stack that pairs LangChain ETL jobs with MongoDB and Qdrant, enabling retrieval over robotics repos and videos through Docker Compose.</li>
        <li>Fine-tuned Llama-3.2-3B with Unsloth LoRA adapters, quantised to GGUF, and deployed via Ollama/vLLM to stream ROS2-aware answers with query expansion and reranking pipelines.</li>
        <li>Automated ingestion with Selenium, yt-dlp, and token-aware chunking under ClearML scheduling, enforcing typed Pydantic schemas for reproducible corpus updates.</li>
      </ul>
    <p><a href="https://github.com/kushagrayadv/ai-rag-system">View Project</a></p>
  </div>
  <img src="/assets/projects/rag.png" alt="rag" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>PhishLearn - Enterprise Phishing Awareness Platform</h3>
      <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django">
      <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
    <ul>
        <li>Built a multi-tenant phishing training SaaS on Django 5 and DRF, integrating Gophish and Supabase to support role-based campaign management with real-time analytics.</li>
        <li>Linked simulated phishing events to automated course and quiz assignments, pairing Bootstrap dashboards with notification pipelines so security teams see live remediation status.</li>
        <li>Hardened delivery through pytest-backed CI, Docker Compose deployments on AWS EC2, secret-managed environments, and optimised Postgres schemas for reporting workloads.</li>
      </ul>
    <p><a href="https://github.com/Billa-Man/PhishLearn">View Project</a></p>
  </div>
  <img src="https://placehold.co/600x400?text=Project" alt="project placeholder" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>MLOps Pipeline for Chest X-Rays</h3>
      <img src="https://img.shields.io/badge/Ray-0288D1?style=flat&logo=ray&logoColor=white" alt="Ray">
      <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white" alt="Kubernetes">
      <img src="https://img.shields.io/badge/MLflow-0194E2?style=flat&logo=mlflow&logoColor=white" alt="MLflow">
      <img src="https://img.shields.io/badge/Triton%20Inference-5A4FCF?style=flat&logo=nvidia&logoColor=white" alt="Triton Inference Server">
    <ul>
        <li>Engineered distributed YOLOv11-L training with Ray DDP, Ray Tune, and MLflow tracking to automate experiment management on the VinBigData chest X-ray corpus.</li>
        <li>Provisioned a GitOps-driven Kubernetes stack via Terraform, Ansible, and ArgoCD, deploying MLflow, MinIO, Prometheus, Grafana, and Label Studio with Helm.</li>
        <li>Optimised Triton-served inference through ONNX and TensorRT conversion, exposing FastAPI endpoints with feedback loops and drift monitoring in Prometheus dashboards.</li>
      </ul>
    <p><a href="https://github.com/theomthakur/ece-gy-9183-group19">View Project</a></p>
  </div>
  <img src="/assets/projects/three_models.png" alt="mlops pipeline" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>Git Issue Bot</h3>
      <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white" alt="Streamlit">
      <img src="https://img.shields.io/badge/LangChain-353535?style=flat&logo=chainlink&logoColor=white" alt="LangChain">
      <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
    <ul>
        <li>Delivered a Streamlit-driven research agent that fuses GitHub, DuckDuckGo, StackExchange, and OpenAI tools through LangChain for conversational backlog triage.</li>
        <li>Persisted interactive sessions with PostgreSQL connection pooling, JSON chat history, and bookmark management synced across multi-page navigation.</li>
        <li>Packaged production deployments with Docker Compose and Pydantic-based configuration, layering comprehensive error handling and secure credential management.</li>
      </ul>
    <p><a href="https://github.com/Billa-Man/git-issue-bot">View Project</a></p>
  </div>
  <img src="https://placehold.co/600x400?text=Project" alt="project placeholder" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>Soothify - AI Mental Health Companion</h3>
      <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js">
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
      <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI">
      <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    <ul>
        <li>Developed a Next.js 15 companion app with modular API routes for chat, audio processing, user data, and geolocation backed by MongoDB models.</li>
        <li>Integrated GPT-4o-mini, Whisper, and Hume EVI via SSE and WebSocket relays to enable multimodal voice and text support with low-latency streaming.</li>
        <li>Shipped Plotly dashboards and Tailwind UI coupled with Zod validation, Jest coverage, and rate limiting to safeguard real-time mental health insights.</li>
      </ul>
    <p><a href="https://github.com/Billa-Man/Soothify">View Project</a></p>
  </div>
  <img src="/assets/projects/chatbot.png" alt="soothify" class="project-card-img" />
</div>


