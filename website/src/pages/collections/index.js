import React from 'react';
import Layout from '@theme/Layout';
import ListRowCard from '@site/src/components/ListRowCard';

const ItemList = [
  {
    title: '01 | Get Started with Azure Machine Learning Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        The Responsible AI (RAI) Dashboard is core part of the Responsible AI Toolkit, a suite of tools for a customized, responsible AI experience with unique and complementary functionalities.  In this multi-part tutorial, we teach you to create an Azure Machine Learning workspace and access RAI components including: Error Analysis, Explanations, Fairness Assessment, Counterfactual/What-If, Causal and Scorecard capabilities.
      </>
    ),
  },
  {
    title: '02 | Train an ML Model to be analyzed for issues',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-train-a-machine-learning-model-to-be-analyzed-for-issues/ba-p/3755097??WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the prior tutorial, we covered how to create an Azure Machine Learning workspace with Responsible AI (RAI) Components. In this tutorial, we’ll train a model that will be used to analyze and resolve issues we find using the Azure Machine Learning Responsible AI dashboard. We will be using the Diabetes Hospital Readmission dataset to predict whether or not a diabetic patient will be readmitted back to a hospital in less than 30 days.
      </>
    ),
  },
  {
    title: '03 | Create a Responsible AI Dashboard to debug AI models',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-create-a-responsible-ai-dashboard-to-debug-ai-models-part/ba-p/3766710?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the last tutorial, we trained a model, to predict diabetes patient hospital readmission, that we will be using to analyze and identify issues from the Azure Machine Learning’s Responsible AI dashboard. In this tutorial, we’ll learn how to create a Responsible AI (RAI) dashboard with its python SDK.
      </>
    ),
  },
  {
    title: '04 | Perform Error Analysis on a model with Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-perform-error-analysis-on-a-model-with-the-responsible-ai/ba-p/3775442?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the last tutorial, we created an RAI dashboard with a diabetes hospital readmission classification model we trained. In this tutorial, we are going to explore how data scientists and AI developers can use Error Analysis to identify the error distribution in the test records and discover where there is a high error rate from the model.
      </>
    ),
  },
  {
    title: '05 | Find model performance inconsistencies with Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-find-model-performance-inconsistencies-with-responsible/ba-p/3790181?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the previous tutorial, we showed you how you can leverage the Error Analysis component within the RAI dashboard to discover cohorts where the model had highest error-rates, as well as cohort with the lowest errors. Now, we’ll investigate why the model’s behavior performs better in one cohort versus another cohort using the Model Overview component.
      </>
    ),
  },
  {
    title: '06 | Expose data biases from debugging models with Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-expose-data-biases-from-debugging-your-model-with/ba-p/3791444?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the prior tutorial, we used the Model Overview component to explore dataset cohorts and feature cohorts to conduct a comparative analysis across cohorts to discover where the model was performing well or poorly.  In this tutorial, we will explore how to use the Data Analysis component of the Azure Responsible AI (RAI) dashboard to discover the root-cause of the model’s poor performance
      </>
    ),
  },
  {
    title: '07 | Explain and interpret a model with Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-explain-and-interpret-a-model-using-responsible-ai-part-7/ba-p/3797805?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In the prior tutorial, we discovered gaps in our dataset distribution where the data was over- or under- represented, causing our model to have fairness, inclusivity, and reliability issues. We used the Data Analysis feature of the RAI dashboard to investigate where the model was performing poorly. Now, let us explore why it performed poorly, using Feature Importance.
      </>
    ),
  },
  {
    title: '08 | Generate counterfactuals for a model with Responsible AI',
    img: require('@site/static/img/collections/responsible-ai-lab.png'),
    link: "https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/how-to-generate-counterfactuals-for-a-model-with-responsible-ai/ba-p/3803934?WT.mc_id=aiml-114127-cxa",
    description: (
      <>
        In this tutorial, we will explore how to use the Counterfactual section of the RAI dashboard. This is a continuation of our Diabetes Hospital Readmission use case we’ve been using in this tutorial series. In the prior tutorial, we were able to discover key feature contributors driving our model’s prediction for explainability and interpretability. Now, let us explore how to generate opposite model predictions by slightly changing data features.
      </>
    ),
  },
];

export default function Sprints() {
  const title = "Responsible AI Dashboard"
  const description = "A multi-part series diving into Responsible AI dashboard features and components."

  return (
    <Layout
      title={title}
      description={description}>
      <main>
        <div class="hero">
          <div class="container">
            <h1 class="hero__title">{title}</h1>
            <p class="hero__subtitle">{description}</p>
            <div>
              <a class="button button--primary button--outline" href="https://www.microsoft.com/ai/ai-lab-responsible-ai-dashboard">Visit The Website</a>
            </div>
          </div>
        </div>
        <ListRowCard itemList={ItemList} />
      </main>
    </Layout>
  );
}

