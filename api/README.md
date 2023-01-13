# Objective

Fraud results in huge financial losses to financial institutions and their customers, depletion of shareholder funds and capital base as well as loss of confidence in financial institutions.
The objective of this project is to `distinguish between genuine and forged banknotes` as this happens to be a major area through which fraudulent entities penetrate financial institutions.

# Dataset

The banknote dataset involves predicting whether a given banknote is authentic given a number of measures taken from a photograph.
The dataset contains `1,372` rows with `5` numeric variables
Data were extracted from images that were taken from genuine and forged banknote-like specimens. For digitization, an industrial camera usually used for print inspection was used. The final images have 400x 400 pixels. Due to the object lens and distance to the investigated object gray-scale pictures with a resolution of about 660 dpi were gained. A Wavelet Transform tool was used to extract features from these images.

## Attributes of the dataset

- Variance: variance of Wavelet Transformed image (continuous)
- Skewness: skewness of Wavelet Transformed image (continuous)
- Curtosis: curtosis of Wavelet Transformed image (continuous)
- Entropy: entropy of image (continuous)
- Class (target): Presented as 1 for genuine and 0 for forged

# Training Strategy and Model Selection

## Random Forest Classifier

Random Forest is a powerful and versatile supervised machine learning algorithm that grows and combines multiple decision trees to create a “forest.” It can be used for both classification and regression problems.
Random Forest grows multiple decision trees which are merged together for a more accurate prediction.

## Why Random Forest

The logic behind the Random Forest model is that multiple uncorrelated models (the individual decision trees) perform much better as a group than they do alone. When using Random Forest for classification like in the case of this project, each tree gives a classification or a vote. The forest chooses the classification with the majority of the votes.

The key here lies in the fact that there is low (or no) correlation between the individual models—that is, between the decision trees that make up the larger Random Forest model. While individual decision trees may produce errors, the majority of the group will be correct, thus moving the overall outcome in the right direction.

# Testing Analysis

We evealuated the model using different metrics. Classification report tells us generally what kind of errors the model made, but it doesn’t give us specifics. The confusion matrix tells us exactly where mistakes were made, but it doesn’t give us summary metrics like precision, recall, or F1 score. Using both of these can give us a much more nuanced understanding of how our model performs, going far beyond what an accuracy score can tell us and avoiding some of its pitfalls.

### How to run the project

- Navigate to `api` directory
- Install the dependencies in the requirements.txt file
- Run the cells in the notebook(ModelTraining.ipynb) file `optional`
- run `uvicorn app:app --reload` in the terminal to start the fastapi server
- When the server starts at `http://127.0.0.1:8000`, navaigate to `http://127.0.0.1:8000/docs` and test the model with sample data

NB: If you notice any area this project could be improved, kindly provide feedback/sugestions
Thank you.