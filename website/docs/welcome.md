---
id: welcome
sidebar_position: 1
---

# 1. Introduction

This workshop is for participants to get hands-on learning on how to use the Responsible AI dashboard to debug their machine learning model in order to improve the model's performance to be more fair, inclusive, safe & reliable, and transparent.  The workshop will cover how to use Error Analysis, Model Overview, Data Analysis and Feature Importance in end-to-end machine learning life cycles.  After completing this workshop, participant will learn best practices of using Azure Responsible AI dashboard to produce AI solution that are less harmful to society and more trustworthy.

# Data
We will be using the [UCI's Diabetes 130-US hospitals for years 1999–2008](https://archive.ics.uci.edu/ml/datasets/Diabetes+130-US+hospitals+for+years+1999-2008#) dataset for this workshop.  The original UCI dataset is large with ~101,700 records. So, we reduced the data sample size and used the SMOTE technique to balance out the minority class during the data cleansing process for our training. We dropped the columns that had a huge number of missing values or were not relevant to a diabetic patient returning back to the hospital within 30 days. For example, having 20+ columns of whether or not a patient took a certain diabetic medication (*rosiglitazon*, *citoglipton*, *metformin* etc.) had no correlation on a patient's return to the hospital. A patient's *Weight* has impact on a patients return, however more than 30% of the data had missing values. The patient's form of payment does not have impact on the return to the hospital, so we dropped the *Payer_Code*. However, we added the *Medicare* and *Medicaid* column to indicate whether or not the Payer_Code for the hospital bill used a subsidize government medical assistance for low-income patients. This is to help us understand if there are any socioeconomic gaps in the diabetic patient demographic.

The dataset also contains an indicator of whether diabetic patients that were discharged form a hospital ended up being readmitted back to a hospital in less than 30 days or not.  The pretrained model that you'll be using in this workshop is a classification model for the ***Diabetes Hospital Readmission*** use case.  It will classify if a diabetic patient will be *Readmitted* or *Not Readmitted* back to a hospital in < 30 days after they have been discharged.

# Objectives
* Work with an interactive UI dashboard to debug and mitigate model issues faster
* Produce AI systems that are more reliable and trustworthy
* Provide AI model explanability for compliance regulations or auditors better
* Helpful for decision-makers and stakeholders to be able to understand and make well informed decisions based on the model's outcomes and behavior

## Duration
Let's uncover the benefits of using Azure Machine Learning's **Responsible AI dashboard in 2 hour**.

## Tip
To preserve your Azure credits, be sure to [shutdown your compute](/docs/stop-compute) instance at the end of the workshop.
