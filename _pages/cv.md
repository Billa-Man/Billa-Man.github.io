---
layout: page
title: "Computer Vision Projects"
---

<div class="project-card">
  <div class="project-card-content">
    <h3>BirdCLEF - 2023</h3>
    <p><strong>Tech Stack:</strong> PyTorch</p>
      <ul>
        <li>Developed solution to process continuous audio data and identify Eastern African bird species by sound.</li>
        <li>The audio files were sliced, preprocessed and converted into audio spectrograms. These images served as the input data to train a customised Vision Transformer built from scratch to yield desirable results. The vision transformer was experimented with to handle long and varying spectrograms by using the sliding window technique.</li>
      </ul>
    <p><a href="https://github.com/Standby-Coder/InterIITTech11.0-DevRev-QA">View Project</a></p>
  </div>
  <img src="assets/jio.png" alt="Jio" class="project-card-img" />
</div>


<div class="project-card">
  <div class="project-card-content">
    <h3>Google Research - Identify Contrails</h3>
    <p><strong>Tech Stack:</strong> PyTorch</p>
    <ul>
        <li>Used geostationary satellite images and trained a machine learning model to identify aviation contrails.</li>
        <li>Designed a custom fine-tuned version of a Fully Convolutional Network (FCN) architecture from scratch. Successfully applied this model on a dataset enhanced through various augmentation techniques. Improved the performance of the model by implementing a multi-branch model for each of the 9 bands (channels) in the image.</li>
      </ul>
    <p><a href="https://github.com/Standby-Coder/InterIITTech11.0-DevRev-QA">View Project</a></p>
  </div>
  <img src="assets/jio.png" alt="Jio" class="project-card-img" />
</div>


<div class="project-card">
  <div class="project-card-content">
    <h3>HuBMAP - Hacking the Human Vasculature</h3>
    <p><strong>Tech Stack:</strong> PyTorch, YOLO</p>
    <ul>
        <li>Segmented instances of micro-vascular structures from healthy human kidney tissue slides.</li>
        <li>Utilised semi-supervised learning (SSL) for training a YOLOv8x model in instance segmentation with only 20% labeled data. Implemented self-training to utilise both labelled and unlabelled data, effectively optimizing model performance and utilising 56% of the data.</li>
        <li>Achieved substantial enhancement in instance segmentation, raising overall <b>mAP50-95</b> score from 0.47 to a remarkable <b>0.593</b>.</li>
      </ul>
    <p><a href="https://github.com/Standby-Coder/InterIITTech11.0-DevRev-QA">View Project</a></p>
  </div>
  <img src="assets/jio.png" alt="Jio" class="project-card-img" />
</div>
