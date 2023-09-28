# COVID-19 Article Summarizer and QA System

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
    1. [Prerequisites](#prerequisites)
    2. [Installation](#installation)
3. [System Architecture](#system-architecture)
4. [Dataset](#dataset)
5. [Model](#model)
6. [MLOps and CI/CD Pipeline](#mlops-and-ci-cd-pipeline)
7. [User Interface](#user-interface)
8. [Usage](#usage)
9. [Testing](#testing)
10. [Contributing](#contributing)
11. [License](#license)
12. [Acknowledgements](#acknowledgements)

## Project Overview

This project aims to create an interactive summarizer using Large Language Models (LLMs) to analyze and summarize articles related to COVID-19. The application is built with an emphasis on engineering applicability and serves as a proof-of-concept for integrating AI/ML in real-world applications. It has several components:

- Data engineering to handle COVID-19 articles
- Fine-tuned Large Language Model for summarization and Q&A
- MLOps and CI/CD pipeline for model training, validation, and deployment
- User interface for interaction

## Getting Started

### Prerequisites

- Python 3.x
- Git
- Docker
- Node.js (for frontend)

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/COVID-19-Article-Summarizer.git
   ```

2. Navigate to the directory
   ```bash
   cd COVID-19-Article-Summarizer
   ```

3. Install Python dependencies
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application
   ```bash
   python app.py
   ```

## System Architecture

The system comprises four primary components:

1. **Data Ingestion**: Scripts to fetch and pre-process articles.
2. **Model Training**: Fine-tuning a pre-trained LLM.
3. **MLOps and CI/CD Pipeline**: Jenkins pipeline to train, test, and deploy the model.
4. **User Interface**: A web interface built using React.js.

## Dataset

The dataset comprises scholarly articles, research papers, and news reports concerning COVID-19. All data sources are credible and peer-reviewed, ranging from repositories like arXiv, PubMed, and trusted news outlets.

## Model

We utilize a fine-tuned version of the GPT-3 model for both summarization and question-answering tasks. The model is fine-tuned on the COVID-19 dataset to improve its relevance and accuracy for this particular domain.

## MLOps and CI/CD Pipeline

1. **Training Pipeline**: Automatic training is set up using Jenkins. It fetches the latest data, trains the model, and validates it.
2. **Deployment Pipeline**: Upon successful validation, the model is containerized using Docker and deployed.
3. **Continuous Monitoring**: Metrics like model accuracy, latency, and throughput are continuously monitored.

## User Interface

The UI is developed using React.js and provides an interactive way for users to upload articles and receive summaries and answers to specific questions.

## Usage

1. Open the web interface.
2. Upload or paste the COVID-19 article you wish to analyze.
3. Click on "Summarize" to get the article summary.
4. Optionally, you can ask questions related to the article.

## Testing

The application has undergone rigorous testing to validate its functionality and performance. Unit tests and end-to-end tests are implemented to ensure system robustness.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

Special thanks to the course "AI/ML for Engineering Applications" for providing the motivation and foundational knowledge required for this project.