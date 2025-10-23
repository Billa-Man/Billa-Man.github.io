---
icon: fa-solid fa-book-open
order: 4
---

<div class="project-card research-card">
  <div class="project-card-content">
    <h3>Exoplanet Classification Through Vision Transformers with Temporal Image Analysis</h3>

    <div>
      <a href="https://pytorch.org/" aria-label="PyTorch" target="_blank" rel="noopener">
        <img alt="PyTorch"
             src="https://img.shields.io/badge/PyTorch-EE4C2C.svg?style=flat&amp;logo=pytorch&amp;logoColor=white">
      </a>
    </div>

    <!-- Abstract collapsible -->
    <details class="abstract">
      <summary>Abstract</summary>
      <p>
        The classification of exoplanets has been a longstanding challenge in astronomy, requiring significant computational and observational resources. Traditional methods demand substantial effort, time, and cost, highlighting the need for advanced machine learning techniques to enhance classification efficiency. In this study, we propose a methodology that transforms raw light curve data from NASA's Kepler mission into Gramian Angular Fields (GAFs) and Recurrence Plots (RPs) using the Gramian Angular Difference Field and recurrence plot techniques. These transformed images serve as inputs to the Vision Transformer (ViT) model, leveraging its ability to capture intricate temporal dependencies. We assess the performance of the model through recall, precision, and F1 score metrics, using a 5-fold cross-validation approach to obtain a robust estimate of the model's performance and reduce evaluation bias. Our comparative analysis reveals that RPs outperform GAFs, with the ViT model achieving an 89.46% recall and an 85.09% precision rate, demonstrating its significant capability in accurately identifying exoplanetary transits. Despite using under-sampling techniques to address class imbalance, dataset size reduction remains a limitation. This study underscores the importance of further research into optimizing model architectures to enhance automation, performance, and generalization of the model. 
      </p>
    </details>
  </div>

  <div class="project-media">
    <img src="/assets/research/exoplanet.png" alt="Exoplanet ViT study" />
  </div>
</div>
