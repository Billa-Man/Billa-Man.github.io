---
layout: page
title: "Computer Vision Projects"
---

<div class="project-card">
  <div class="project-card-content">
      <h3>Implementing Models from scratch</h3>
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="PyTorch">
      <ul>
        <li>Designed and trained a ViT model from scratch, comparing its performance to UNet and Fully Convolutional Network (FCN) (both written from scratch) on the Kaggle Ultrasound Nerve Segmentation dataset.</li>
        <li>Standardized preprocessing and ensured consistent training parameters across models, analyzing computational trade-offs and segmentation accuracy.</li>
        <li>Evaluated models using Intersection over Union (IoU), where UNet achieved the highest IoU (0.3129) and FCN demonstrated competitive accuracy (IoU: 0.3099), while highlighting areas for improvement in ViT (IoU: 0.2281).</li>
      </ul>
      <p><a href="https://github.com/Billa-Man/cs-gy-6923-final-project">View Project</a></p>
  </div>
      <img src="/assets/projects/three_models.png" alt="from-scratch" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>HuBMAP - Hacking the Human Vasculature</h3>
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="PyTorch">
    <ul>
        <li>Segmented instances of micro-vascular structures from healthy human kidney tissue slides.</li>
        <li>Utilised semi-supervised learning (SSL) for training a YOLOv8x model in instance segmentation with only 20% labeled data. Implemented self-training to utilise both labelled and unlabelled data, effectively optimizing model performance and utilising 56% of the data.</li>
        <li>Achieved substantial enhancement in instance segmentation, raising overall <b>mAP50-95</b> score from 0.47 to a remarkable <b>0.593</b>.</li>
      </ul>
    <p><a href="https://www.kaggle.com/code/sohithbandari/hubmap-yolov8-semi-supervised">View Project</a></p>
  </div>
  <img src="/assets/projects/hubmap.png" alt="hubmap" class="project-card-img" />
</div>

<div class="project-card">
  <div class="project-card-content">
    <h3>Google Research - Identify Contrails</h3>
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="PyTorch">
    <ul>
        <li>Used geostationary satellite images and trained a machine learning model to identify aviation contrails.</li>
        <li>Designed a custom fine-tuned version of a Fully Convolutional Network (FCN) architecture from scratch. Successfully applied this model on a dataset enhanced through various augmentation techniques. Improved the performance of the model by implementing a multi-branch model for each of the 9 bands (channels) in the image.</li>
      </ul>
    <p><a href="https://www.kaggle.com/code/sohithbandari/identify-contrails-fcn">View Project</a></p>
  </div>
  <img src="/assets/projects/identify_contrails.png" alt="contrails" class="project-card-img" />
</div>



