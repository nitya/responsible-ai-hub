---
id: pf-evaluate-chatbot-lab7'
title: 'Lab# 7: Evaluate chatbot'
sidebar_position: 4
slug: /evaluate-chatbot
---

You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk. For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.  In this example, we’ll use the **QnA RAG Evaluation** template to test our flow.

## import chatbot flow from local to cloud

1. Open Azure Machine Learning Studio (https://ml.azure.com/). The click on the **Prompt flow** navigation option on the left-hand side of the screen.  

![](/img/tutorial/pf-prompt-flow-menu.png)

2. Click **+ Create** button.
3. Scroll down the pane and to the **Import** section.  Then click on the **Upload** button the **Upload from local** .
4. On the **Upload from local** pane, click on the **Browse** button and select the **master** folder from the workshop repo directory.
5. Enter **Folder Name**  pane (e.g. dental_chatbot).
6. Select **Chat** from the **Select flow type**.
7. Click on the **upload** button. The flow will be open in your Azure Machine Learning studio.

## Create connection to AzureOpenAI
1.  Click on the **Prompt flow** navigation option
2.	Click on the **Connections** tab on the Prompt Flow page
3.	Click on the **Create** button, then select **Azure OpenAI** option in the drop-down menu
4.	Enter a **Name** 
5.	The Azure OpenAI option should be selected for **Provider**.
6.	Select your subscription under **Subscription id**.
7.	Select your OpenAI instance name under **Azure OpenAI Account Names** drop-down menu.
8.	Paste the Key 1 value for Azure OpenAI you copied earlier in the **API key** textbox.
9.	Paste the Language API URL you copied earlier in the **API base** textbox.
10.	The **API type** should be set to the default value (e.g. azure)
11.	The **API version** should be set to the default value (e.g. 2023-07-01-preview)
12.	 Click **Save**

## Add AzureOpenAI connection to chatbot flow

1. Click on the **Flows** tab on the Prompt Flow page.
2. Select the **Flow name** you created earlier (e.g. dental_chatbot).
3. On the **embed_question** node, click on the **connection** textbox and select your AzureOpenAI connection name.
4. On the **prompt_answer** node, click on the **connection** drop-down menu and select your AzureOpenAI connection name.  Then select yoar AzureOpenAI **deployment_name**.
5. In the **Output** section, click on the **Add output**. Then enter **context** for the **Name** and *${search_vector_index.output}* for the **value**.
6. Click on **Save** button on the top right-hand side of the screen.

## Evaluate chatbot flow

1..Click on the **Evaluate** button on the top right-side of the screen.

![](/img/tutorial/evaluate.png)
 
2.	On the **Batch run & Evaluate** page, select the **Next** button
3.	On the Batch run settings page, click on **Add new data** link for the **Data** field.  
4.	Enter **Name** on the Add new data pane (e.g. Contoso-Dental). Then **Browse** to the workshop repo directory and select the **contoso-dental.csv** file from the */data* folder.   
5.	Click on the **Add** button.   A preview of the top 5 rows of the data should be displayed at the bottom of the page.
8.	Under Input mapping, enter the open and close brackets **[]** for the value of **chat_history**.
9.	Click in the Value textbox for the **question** field and enter *${data.question}*.

![](/img/tutorial/evaluate-input-flow.png)
 
10.	Click the **Next** button.
11.	On the **Select evaluation** page, select the checkbox for the **QnA RAG Evaluation**.

![](/img/tutorial/evaluation-gallery.png)
 
12.	Click the **Next** button.
13.	Click on the right arrow **“>”** to expand the **QnA RAG Evaluation** settings.

![](/img/tutorial/evaluate-qna-fields.png)
 
14.	Select the dataset your uploaded earlier for the **Choose data asset for evaluation** field.
15.	For the **metric** field, cope and paste the following text:
```bash
gpt_groundedness,gpt_retrieval_score,gpt_relevance  
```
16. Enter *${run.outputs.answer}* for the **answer** field.
17. Click on the Data Source textbox and enter *${data.question}* for the **question** field. 
18.	Enter *${run.outputs.context}* for the **documents**field.

![](/img/tutorial/pf-rag-eval-input.png)

19.	On the right-hand side of the page, scroll down to the bottom of the page.
20.	Select your AzureOpenAI connection name for the **Connection** fields.
21.	The **Deployment name / Model** should automatically population the your AzureOpenAI deployment name.
 
 ![](/img/tutorial/evaluate-connection.png)

20.	Click the **Next** button. 
21.	Finally, click on the **Submit** button.
22.	To monitor the run progress, click on the **Prompt flow** navigation option.  Then click on the **Runs** tab


![](/img/tutorial/start-evaluate.png)
 
23.	Click the Refresh button to update the run status. The run should take ~15 minutes.
24.	Click on the radio button for the QnA RAG Evaluation, the press the **Visualize outputs** to view the results.

![](/img/tutorial/pf-visualize-output.png)

25.	The **Runs & metrics** section shows a summary score for gpt_groundedness, gpt_retrieval_score, and gpt_relevance.  The **Outputs** section shows the detailed results for each of the 3 metrics.

 ![](/img/tutorial/evaluate-results.png)

27.	The score will range from 1 to 5, where 1 is the worst and 5 is the best performance.

## Summary

In this lab, we learned that while building generate AI solution, it is important to apply responsible AI principles. We learn that even when an AI app provides the correct answer, it is important to validate that the answer is grounded to the context it's data source.  Even when the answer is grounded, it is important to validate that the answer is relevant to the question.  Finally, it is important to validate that the answer is similar to the answer provided by the data source.  In the content of Contoso dental clinc, we learn the important of the chatbox giving out information that pertain to their specific clinic.

Next, we learn how vector index are useful in storing and retrieving custom data, instead of using a pre-trained LLM where the data may be out of date or not relevance to your unique use case.  

Finally, we learn how vector embedding is useful in converting text to numeric representation. This makes if useful in storing data base on thier relationship distance and similarity.  Search is quicker and more accurate when using vector embedding.  







