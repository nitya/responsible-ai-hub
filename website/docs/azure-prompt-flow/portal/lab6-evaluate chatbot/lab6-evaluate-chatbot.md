---
id: pf-evaluate-chatbot-lab6'
title: 'Lab# 6: Evaluate chatbot'
sidebar_position: 6
slug: /evaluate-chatbot
---

You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk.  For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.   In this example, we’ll use the **QnA RAG Evaluation** template to test our flow.

## Prequisites
- Clone the lab repo to your local machine:
```bash
git clone https://github.com/Azure-Samples/rai-prompt-flow-workshop.git
```

## Evaluate chatbot flow

1. On the **Outputs** section, click on the **+ Add output** button.  Then enter **context** for the **Name** field and `${response.output}` for the value.

![](/img/tutorial/00-output-eval-content.png)

2. Click **Save** button

3. Click on the **Evaluate** button on the top right-side of the screen.

![](/img/tutorial/evaluate.png)

4.	On the **Batch run & Evaluate** page, select the **Next** button
4.	On the Batch run settings page, click on **Add new data** link for the **Data** field.  
5.	Enter **Name** on the Add new data pane (e.g. Contoso-Dental). 

6.  Select **Upload from local folder**. Then **Browse** to the lab repo */rai-prompt-flow-workshop/data* folder. 
7.  Click on the **Upload** button.  Then **Upload** button again on the browser pop-up pane accepting *This will upload all file from "data"..."
8.	Click on the **Add** button.   A preview of the top 5 rows of the data should be displayed at the bottom of the page.
9.	Under Input mapping, enter the open and close brackets **[]** for the value of **chat_history**.
10.	Click in the Value textbox for the **question** field and enter `${data.question}`.

![](/img/tutorial/evaluate-input-flow.png)
 
9.	Click the **Next** button.
10.	On the **Select evaluation** page, select the checkbox for the **QnA RAG Evaluation**.

![](/img/tutorial/evaluation-gallery.png)
 
11.	Click the **Next** button.
12.	Click on the right arrow **“>”** to expand the **QnA RAG Evaluation** settings.

![](/img/tutorial/evaluate-qna-fields.png)
 
13.	Select the dataset your uploaded earlier for the **Choose data asset for evaluation** field.
14.	For the **metric** field, cope and paste the following text:
```bash
gpt_groundedness,gpt_retrieval_score,gpt_relevance  
```
15. Enter `${run.outputs.answer}` for the **answer** field.
16. Click on the Data Source textbox and enter `${data.question}` for the **question** field. 
17.	Enter `${run.outputs.context}` for the **documents**field.

![](/img/tutorial/pf-rag-eval-input.png)

18.	On the right-hand side of the page, scroll down to the bottom of the page.
19.	Select your AzureOpenAI connection name (e.g. azure-openai-conn) for the **Connection** fields.
20.	The **Deployment name / Model** should automatically population the your AzureOpenAI deployment name.
 
 ![](/img/tutorial/evaluate-connection.png)

21.	Click the **Next** button. 
22.	Finally, click on the **Submit** button.
23.	To monitor the run progress, click on the **Prompt flow** navigation option.  Then click on the **Runs** tab


![](/img/tutorial/start-evaluate.png)
 
24.	Click the Refresh button to update the run status. The run should take ~15 minutes.
25.	Click on the radio button for the QnA RAG Evaluation, the press the **Visualize outputs** to view the results.

![](/img/tutorial/pf-visualize-output.png)

26.	The **Runs & metrics** section shows a summary score for gpt_groundedness, gpt_retrieval_score, and gpt_relevance.  The **Outputs** section shows the detailed results for each of the 3 metrics.

 ![](/img/tutorial/evaluate-results.png)

27.	The score will range from 1 to 5, where 1 is the worst and 5 is the best performance.

## Summary

In this lab, we learned that while building generate AI solution, it is important to apply responsible AI principles. We learn that even when an AI app provides the correct answer, it is important to validate that the answer is grounded to the context it's data source.  Even when the answer is grounded, it is important to validate that the answer is relevant to the question.  Finally, it is important to validate that the answer is similar to the answer provided by the data source.  In the content of Contoso dental clinc, we learn the important of the chatbox giving out information that pertain to their specific clinic.

Next, we learn how vector index are useful in storing and retrieving custom data, instead of using a pre-trained LLM where the data may be out of date or not relevance to your unique use case.  

Finally, we learn how vector embedding is useful in converting text to numeric representation. This makes if useful in storing data base on thier relationship distance and similarity.  Search is quicker and more accurate when using vector embedding.  