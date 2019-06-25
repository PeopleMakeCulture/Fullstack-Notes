# AWS AI/ML Boot Camp

TOOLS:

-  Amazon Comprehend,
-  Amazon Rekognition,
-  Amazon SageMaker,
-  Amazon Polly,
-  Amazon Transcribe,
-  Amazon Translate

Mon 6/3

## Keynote

Mohit Mehta

-  overview of AWS ML services
-  goal: make ML easier for everyone to use
-  close the gap btwn proof of concept POC and production

### AWS ML Stack - AI : NLP, CV, Polly, etc - directly make API calls - ML Services: SageMaker - Notebooks, implementation and deployment Trainging, etc - ML Frameworks/Infrastructure -

### Resources:

-  ML University: aws.training/machinelearning
-  based on internal curriculum
-  Amazon has an annual conference called ReInvent
-  Amazon DeepLens: (2017) First deep learning enabled video camera for devs (available on Amazon marketplace)
   -  Camera on a compute lens
   -  Use examples: - Reading/translating sign language; figure out what's that bird?
-  Amazon DeepRacer: (2018) Build ML models in Amazon SageMaker

### Challenges for working with ML

1. Flexibility and Cost

   -  Bottom of stack problems (frameworks and infrastructure)
   -  Efficiency, GPUs, for training
   -  85% of TF workloads run on AWS
   -  once you have the data, how do you mine it for insights
   -  Inference costs (making predictions)
   -  Amazon Elastic Inference

2. Data
   Problem: labeling data is costly and time-consuming
   Solution: SageMaker Ground truth - a service that uses ML to label training data; can also integrate with human label-ers
   Problem: How to learn w/ no training data?
   Solution: SageMaker Reinforcement Learning (RL) Toolkit

   -  Use case: Amazon warehouse robotics use SageMaker RL to optimize movements through warehouse

3. Ease of Use
   Problem: How to we go from Proof of Concept (POC) to Production?
   Probelm: Deploying models across multiple platforms is too time-consuming (eg Android and Apple OS)
   Solution: SageMaker Neo allows you to train once, run anywhere
   Problem: PDF Reading
   Solution: Amazon Textract (preview) - extract text and data from any doc, including tables; lowers document processing costs

   -  OCR++
   -  Table Detection
   -  Key-value pair detection
   -  Bounding box coordinates
   -  Adjustable confidence thresholds
   -  Use case: reading a check image

   Recommendations: Amazon Personalize (preview) Custom Rocommendation API
   Forcasting (esp for product demand): Amazon Forcast (preview)

   -  import time series data, information about customers, plan production vertical
      Medical:
   -  Challenge: working with unstructured data (X-rays, transcripts of dr's notes) [eg not in a table]
   -  Product: Amazon Comprehend Medical

### Use Cases

1. Chick-fil-A using CV to detect fries that exceeded hold time (also Tyson Foods)

## AWS DeepRacer

-  Kunal:

   -  interested in CV
   -  Built an image classification algo app to say if garage door is open or closed
   -  Can contact via Twitter

-  Sagemaker launch: 2017

## NLP

## Recommendations and Forcasting

Tues 6/4

## SageMaker
