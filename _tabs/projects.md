---
icon: fa-solid fa-hammer
order: 1
---
<!-- Filter Buttons -->
<div class="proj-filterbar">
  <button class="pf-btn is-active" data-filter="all">All</button>
  <button class="pf-btn" data-filter="ai">AI / ML</button>
  <button class="pf-btn" data-filter="swe">Software Engineering</button>
</div>

<!-- Horizontal Rows List -->
<section class="projects-list" id="projects">

  <!-- RAG (AI) -->
  <details class="project-row" data-category="ai">
    <summary class="project-row__summary">
      <img src="/assets/projects/rag.png" alt="End-to-End LLM Development with RAG" class="project-row__image">
      <div class="project-row__header">
        <h3 class="project-row__title">End-to-End LLM Development with RAG</h3>
        <div class="badge-row">
          <img src="https://img.shields.io/badge/LangChain-353535?style=flat&logo=chainlink&logoColor=white" alt="LangChain">
          <img src="https://img.shields.io/badge/ClearML-2C3E50?style=flat&logoColor=white" alt="ClearML">
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
          <img src="https://img.shields.io/badge/Qdrant-FF4F64?style=flat&logo=qdrant&logoColor=white" alt="Qdrant">
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
          <img src="https://img.shields.io/badge/Ollama-000000?style=flat&logoColor=white" alt="Ollama">
          <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="AWS">
          <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI">
        </div>
      </div>
      <a href="https://github.com/kushagrayadv/ai-rag-system" class="project-row__link">Project Link</a>
      <span class="project-row__chevron" aria-hidden="true"></span>
    </summary>
    <div class="project-row__body">
      <ul>
        <li>Built and deployed a <b>domain-specific RAG system</b> for ROS2 robotics, integrating <b>MongoDB</b>, <b>Qdrant</b>, and <b>ClearML</b> to automate ETL, feature engineering, and dataset generation pipelines, processing <b>10K+ repositories</b>.</li>
        <li>Reduced training loss by <b>47%</b> by fine-tuning <b>Llama-3.2-3B</b> with <b>LoRA</b> adapters on <b>27K+ domain-specific samples</b>, combined with <b>LangChain</b>-based retrieval, reranking, and metadata extraction for precise query understanding.</li>
        <li>Optimized inference performance via <b>quantization</b> to <b>GGUF</b> format and deployment on <b>AWS SageMaker</b> with <b>Docker</b>, <b>Ollama</b>, and <b>vLLM</b>, achieving <b>real-time streaming responses</b> with <b>sub-second latency</b>.</li>
        <li>Built a <b>Gradio web interface</b> for live response streaming, semantic query expansion, and self-query metadata extraction, enabling accurate ROS2 navigation and motion planning guidance.</li>
        <li><b>Automated experiment tracking and evaluation</b> with <b>ClearML</b> and <b>GPT-4o-mini</b>, supported by modular architecture, logging, and error handling for scalable deployments.</li>
      </ul>
    </div>
  </details>

  <!-- MLOps (AI) -->
  <details class="project-row" data-category="ai">
    <summary class="project-row__summary">
      <img src="/assets/projects/mlops.jpeg" alt="MLOps Pipeline for Chest X-Rays" class="project-row__image">
      <div class="project-row__header">
        <h3 class="project-row__title">MLOps Pipeline for Chest X-Rays</h3>
        <div class="badge-row">
          <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
          <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="PyTorch">
          <img src="https://img.shields.io/badge/YOLOv11-L?style=flat&logo=ultralytics&logoColor=white" alt="YOLOv11-L">
          <img src="https://img.shields.io/badge/Ray-028CF0?style=flat&logo=ray&logoColor=white" alt="Ray">
          <img src="https://img.shields.io/badge/MLflow-0194E2?style=flat&logo=mlflow&logoColor=white" alt="MLflow">
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white" alt="Kubernetes">
          <img src="https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat&logoColor=white" alt="ArgoCD">
          <img src="https://img.shields.io/badge/Terraform-844FBA?style=flat&logo=terraform&logoColor=white" alt="Terraform">
          <img src="https://img.shields.io/badge/Ansible-EE0000?style=flat&logo=ansible&logoColor=white" alt="Ansible">
          <img src="https://img.shields.io/badge/Triton%20Inference-76B900?style=flat&logo=nvidia&logoColor=white" alt="Triton Inference">
          <img src="https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white" alt="Prometheus">
          <img src="https://img.shields.io/badge/Grafana-F46800?style=flat&logo=grafana&logoColor=white" alt="Grafana">
          <img src="https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white" alt="FastAPI">
          <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white" alt="Streamlit">
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
        </div>
      </div>
      <a href="https://github.com/theomthakur/ece-gy-9183-group19" class="project-row__link">Project Link</a>
      <span class="project-row__chevron" aria-hidden="true"></span>
    </summary>
    <div class="project-row__body">
      <ul>
        <li>Architected <b>distributed training pipeline</b> with <b>YOLO-12X (59.1M)</b> on <b>Ray + DDP</b>, cutting training time by <b>65%</b> on a <b>4-GPU cluster</b>; automated hyperparameter tuning with Ray Tune and tracked experiments with <b>MLflow</b>.</li>
        <li>Designed scalable <b>ETL + data quality pipeline</b> for a <b>50GB multi-class X-ray dataset</b>, converting annotations to YOLO format and visualizing distributions/heatmaps to ensure zero data leakage and address class imbalance.</li>
        <li>Deployed production ML platform on <b>Kubernetes</b>, managing <b>microservices</b> with <b>ArgoCD/Helm</b>; reduced infra setup time by <b>80%</b> with <b>Terraform + Ansible</b>, and built <b>CI/CD pipelines</b> via <b>Argo Workflows</b> to cut deployment time.</li>
        <li>Optimized high-performance inference with <b>Triton Inference Server + ONNX Runtime</b>, achieving <b>0.52 mAP@50</b> with <b>sub-20ms latency</b> and <b>25 FPS throughput</b>; exposed models via <b>FastAPI</b> APIs handling <b>concurrent requests</b> with dynamic batching.</li>
        <li>Implemented <b>monitoring + feedback loops</b> with <b>Prometheus + Grafana</b>, analyzing <b>daily predictions</b> for retraining, detecting <b>data drift</b> across statistical features, and tracking both <b>system metrics</b> and <b>radiologist efficiency gains</b>.</li>
      </ul>
    </div>
  </details>

  <!-- Soothify (AI) -->
  <details class="project-row" data-category="ai">
    <summary class="project-row__summary">
      <img src="/assets/projects/hume.gif" alt="Soothify" class="project-row__image">
      <div class="project-row__header">
        <h3 class="project-row__title">Soothify — AI Mental Health Companion</h3>
        <div class="badge-row">
          <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js">
          <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
          <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI">
          <img src="https://img.shields.io/badge/Hume%20EVI-7B61FF?style=flat&logoColor=white" alt="Hume EVI">
          <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
        </div>
      </div>
      <a href="https://github.com/Billa-Man/Soothify" class="project-row__link">Project Link</a>
      <span class="project-row__chevron" aria-hidden="true"></span>
    </summary>
    <div class="project-row__body">
      <ul>
        <li>Architected a full-stack platform with <b>Next.js</b>, <b>React</b>, and <b>TypeScript</b>, integrating <b>OpenAI Whisper STT/TTS</b> and <b>Hume.AI EVI</b> for emotion-aware voice interactions via <b>WebSocket</b> streaming.</li>
        <li>Engineered a <b>real-time voice pipeline</b> with <b>GPT-4o-mini</b> backend and Hume AI emotion analysis, using <b>MongoDB</b> for assessment tracking and user analytics.</li>
        <li>Developed emotion-responsive chat system with conversation history and <b>severity-based resource routing</b>, enabling personalized mental health discussions.</li>
        <li>Built a wellness ecosystem combining interactive tools, <b>MongoDB</b>-powered progress tracking, and AI-driven recommendations, supporting <b>4 assessment types</b>.</li>
        <li>Implemented <b>scalable voice infrastructure</b> with <b>WebSocket</b> relay servers, maintaining <b>99% uptime</b> while handling <b>5 concurrent sessions</b> through <b>connection pooling</b> and <b>error recovery</b>.</li>
      </ul>
    </div>
  </details>

  <!-- PhishLearn (SWE) -->
  <details class="project-row" data-category="swe">
    <summary class="project-row__summary">
      <img src="/assets/projects/phishlearn.png" alt="PhishLearn" class="project-row__image">
      <div class="project-row__header">
        <h3 class="project-row__title">PhishLearn — Enterprise Phishing Awareness Platform</h3>
        <div class="badge-row">
          <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django">
          <img src="https://img.shields.io/badge/Django%20REST%20Framework-FF1709?style=flat&logo=django&logoColor=white" alt="Django REST Framework">
          <img src="https://img.shields.io/badge/Gophish-0052CC?style=flat&logoColor=white" alt="Gophish">
          <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
          <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase">
          <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="AWS">
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
          <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap">
          <img src="https://img.shields.io/badge/pytest-0A9EDC?style=flat&logo=pytest&logoColor=white" alt="pytest">
        </div>
      </div>
      <a href="https://github.com/Billa-Man/swe-project" class="project-row__link">Project Link</a>
      <span class="project-row__chevron" aria-hidden="true"></span>
    </summary>
    <div class="project-row__body">
      <ul>
        <li>Engineered a full-stack phishing awareness platform with <b>Django REST Framework</b>, <b>PostgreSQL (Supabase)</b>, and <b>Gophish</b> integration, enabling organizations to run <b>scalable campaigns</b> for 100+ users.</li>
        <li>Built a phishing simulation and adaptive training system, generating <b>realistic attack scenarios</b> and triggering <b>personalized courses/quizzes</b>.</li>
        <li>Developed <b>real-time analytics dashboards</b> and monitoring systems, tracking metrics (opens, clicks, credential submissions) and authentication events (browser/IP fingerprinting) to provide insights and <b>threat detection</b>.</li>
        <li>Implemented containerized deployments with <b>Docker</b> and <b>AWS EC2</b>, orchestrating multi-service environments via automated <b>CI/CD pipelines</b>, and added backend <b>unit tests (pytest, coverage)</b> to ensure <b>reliable releases</b>.</li>
        <li>Designed and optimized <b>database schemas</b> and <b>REST endpoints</b> for campaign/user management, and delivered a <b>responsive frontend</b> using <b>Bootstrap, HTML/CSS, JS</b> for training and analytics views.</li>
      </ul>
    </div>
  </details>

  <!-- Git Issue Bot (SWE) -->
  <details class="project-row" data-category="swe">
    <summary class="project-row__summary">
      <img src="/assets/projects/git_issue_bot.png" alt="Git Issue Bot" class="project-row__image">
      <div class="project-row__header">
        <h3 class="project-row__title">Git Issue Bot</h3>
        <div class="badge-row">
          <img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
          <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=flat&logo=streamlit&logoColor=white" alt="Streamlit">
          <img src="https://img.shields.io/badge/LangChain-353535?style=flat&logo=chainlink&logoColor=white" alt="LangChain">
          <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI">
          <img src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL">
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
          <img src="https://img.shields.io/badge/Pydantic-0C4B33?style=flat&logoColor=white" alt="Pydantic">
          <img src="https://img.shields.io/badge/GitHub%20API-181717?style=flat&logo=github&logoColor=white" alt="GitHub API">
        </div>
      </div>
      <a href="https://github.com/Billa-Man/git-issue-bot" class="project-row__link">Project Link</a>
      <span class="project-row__chevron" aria-hidden="true"></span>
    </summary>
    <div class="project-row__body">
      <ul>
        <li>Engineered a full-stack AI application using <b>Python</b>, <b>Streamlit</b>, <b>LangChain</b>, and <b>PostgreSQL</b>, implementing multi-page UI, database persistence, and conversation memory for GitHub issue discovery and bookmarking.</li>
        <li>Integrated <b>6+ external APIs</b> (<b>GitHub</b>, <b>OpenAI</b>, DuckDuckGo, StackExchange, Wikidata) by building custom LangChain tools with authentication, rate-limit handling, and structured query logic.</li>
        <li><b>Improved query speed by 70%</b> by designing optimized <b>PostgreSQL schema</b> with indexing, connection pooling, and caching, cutting latency and enabling real-time search.</li>
        <li><b>Streamlined deployment</b> with <b>Docker Compose</b> multi-stage builds and environment-based configs.</li>
        <li>Applied modular architecture and best practices using <b>Pydantic models</b>, type hints, exception classes, and reusable <b>LangChain BaseTool</b> components for scalability and maintainability.</li>
      </ul>
    </div>
  </details>

</section>


<!-- Filtering Script -->
<script src="{{ '/assets/js/project-filter.js' | relative_url }}"></script>