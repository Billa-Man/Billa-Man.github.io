---
layout: default
title: "Projects"
icon: fa-solid fa-hammer
order: 1
---

# Welcome to My Project Portfolio!

<div class="project-card">
  <div class="project-card-content">
    <h3>RAG System for Robotics</h3>
      <p><strong>Tech Stack:</strong> Python, PyTorch, Huggingface, ClearML, MongoDB, Qdrant, UnSloth, Gradio, Ollama</p>
      <p></p>
      <ul>
        <li>Implemented a RAG system to assist ROS2 robotics developers, enabling domain-specific query responses for navigation tasks.</li>
        <li>Created an ETL pipeline using ClearML to ingest and process data from ROS2 documentation and video transcripts, storing raw data in MongoDB and vectorized representations in Qdrant.</li>
        <li>Fine-tuned LLaMa 3.2 3b by implementing LoRA (Low-Rank Adaptation) on a custom preference dataset generated using chatGPT for ROS2 navigation-related queries.</li>
        <li>Deployed a Gradio-based application with Huggingface Hub and Ollama integration for code generation and replanning instructions.</li>
      </ul>
      <p><a href="https://huggingface.co/billa-man/finetuned-rag-system-robotics">View Project</a></p>
  </div>
  <img src="/assets/projects/rag.png" alt="rag" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>HerWay: Woman Safety App</h3>
      <p><strong>Tech Stack:</strong> PyTorch, HuggingFace, FastAPI</p>
      <p></p>
      <ul>
        <li>Provided a comprehensive solution the problem of harassment against women in public space.</li>
        <li>Leveraged sentence analysis on data from safecity.in to assess location safety. Employed geocoding for coordinates retrieval and calculated risk based on nearby crime severity. Utilised graph algorithms to recommend the safest routes for women travelers.</li>
        <li>2nd Runner-up in HackFest 2023. The project was discussed during a session in the Rajya Sabha, the upper house of the Indian Parliament.</li>
      </ul>
      <p><a href="https://github.com/Tarun-108/HerWay">View Project</a></p>
  </div>
  <img src="/assets/projects/herway.png" alt="her-way" class="project-card-img" />
</div>


<div class="project-card">
  <div class="project-card-content">
      <h3>DevRev: Domain-Specific QA Model (Inter-IIT)</h3>
      <p><strong>Tech Stack:</strong> PyTorch, HuggingFace, Haystack</p>
      <ul>
        <li>Given a dataset containing passages, questions and themes, built a robust model to predict the answer. It was able to detect unanswerable questions as well.</li>
        <li>Developed the model using the Stanford Question Answering Dataset (SQuAD) 2.0, consisting of 100,000 questions. Began with the Retro-Reader architecture as a baseline, and subsequently implemented a Retriever-Reader methodology enriched with re-Ranking and Contrastive Loss techniques.</li>
        <li><strong>Accuracy: </strong>74% (Finetuned RoBERTa tiny) | <strong>82% </strong>(Finetuned RoBERTa base) | Achieved on limited 12GB RAM in the <strong> absence of hardware accelerators</strong>.</li>
      </ul>
      <p><a href="https://github.com/Standby-Coder/InterIITTech11.0-DevRev-QA">View Project</a></p>
  </div>
      <img src="/assets/projects/devrev.png" alt="dev-rev" class="project-card-img" />
</div>

<!-- Explore projects by category:

- [Computer Vision]({% link _pages/cv.md %})
- [Natural Language Processing]({% link _pages/nlp.md %})
- [Large Language Models]({% link _pages/llm.md %})
- [Miscellaneous Projects]({% link _pages/misc_proj.md %})

You can find detailed descriptions and documentation for each category of projects. -->

### Some mini-projects:

- [Autism Predictor](https://github.com/Billa-Man/Mini-Projects/tree/main/Autism%20Predictor)
- [Face Mask Detection](https://github.com/Billa-Man/Mini-Projects/tree/main/Face%20Mask%20Detection)
- [Heart Disease Predictor](https://github.com/Billa-Man/Mini-Projects/tree/main/Heart%20Disease%20Predictor)
- [MNIST](https://github.com/Billa-Man/Mini-Projects/tree/main/MNIST)




