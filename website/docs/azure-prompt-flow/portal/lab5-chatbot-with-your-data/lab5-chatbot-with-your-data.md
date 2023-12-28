---
id: pf-chatbot-with-your-data-lab5'
title: 'Lab# 5: Chatbot with your data'
sidebar_position: 5
slug: /chatbot-with-your-data
---

In the precise exercise you create a vector index and train to search for your vector embeddings.  In the exercise, you’ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we’ll use the numeric embedding to search the numeric vector.  Next, we’ll use the prompt to set rules with restrictions and how to display the data to the user.

We'll be using the following tools:
-	**Embedding**: converts text to number tokens.  Store to token in vector arrays based on then relation to each other.
-	**Vector index lookup**: Takes user input question and queries the vector index with the closest answers to the question.
-	**Prompt**: enters user to add rules on the response show be sent to user
-	**LLM**: provides the LLM prompt or LLM model response to user
 
1.	Open the Flow page, by clicking **Prompt Flow**.
2.	Click you the Chat flow you created in Exercise 1.
3.	On the Flow toolbar, click on **More tools**.  Then select the **Embedding tool**.

![](/img/tutorial/flow-tools.png)
 
4.	Enter **Name** for the node (e.g. embed_question).
5.	Click the **Add** button.
6.	Select the **AzureOpenAIconnection** name you created earlier.
7.	Select **Text-embedding-ada-002** deployment name you created earlier
8.	For **Input**, select `${inputs.question}`.  This should create a node under the input node.

![](/img/tutorial/search-vector.png)
 
9.	Click the Save button
10.	On the Flow toolbar, click on **More tools**.  Then select the Vector Index Lookup tool.  This will generate a new **Vector Index Lookup** section at the bottom of the flow.
11.	Enter **Name** for the node (e.g. search_vector_index).
12.	Click the **Add** button
13.	For **Path**, copy and paste the Datastore URI you retrieve earlier for the vector index.
14.	Select the embedding output as the **query** field (e.g. `${embed_question.output}*)`.
15.	Leave default value for **top_k**.

![](/img/tutorial/search-vector.png)
 
16.	Click the **Save** button
17.	On the Flow toolbar, click on **Prompt** tool. This will generate a new Prompt section at the bottom of the flow.
18.	Enter a **Name** for the node (e.g. generate_prompt).  Then click the **Add** button.
19.	Copy the following text in the Prompt textbox:
```shell
system:
You are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the potential answers, simply respond with "I don't know.  

context: {{contexts}}

{% for item in chat_history %}
user:
{{item.inputs.question}}
assistant:
{{item.outputs.answer}}
{% endfor %}

user:
{{question}}
```
20.	Click the **Validate and parse input** button to generate the input field for the prompt.
21.	Select the `${Search_Vector_Index.output}` for **chat_history**
22.	For **contexts**, select `${inputs.chat_history}`.
23.	Select `${inputs.question}` for the **question** field.
 
![](/img/tutorial/output_prompt.png)

24.	Click on the **Save** button
25.	Click on the **chat** node and drag it below the **generate_prompt** node

![](/img/tutorial/chat-node.png)
 
26.	Under the **Flow** pane, scroll up to the **chat** section
 
![](/img/tutorial/chat-node-input.png)

27.	Copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:

```shell
{{prompt_response}}
```
28.	Click on the Validate and parse input button to regenerate a new input field. Prompt Flow will generate the text metadata you specified in the Prompt textbox.
29.	In the Prompt_response value, select `${generate_prompt.output}`.
30.	Under the Flow pane, scroll up to the output section.
31.	Replace the answer to `${chat.output}`
32.	Click on the Save button

## Test Chat with your own data

Now that you have updated the prompt flow logic to you use your own data and process the output, let’s see if the Chat will generate more relevant information pertaining to our Contoso dental data.  First let clear the chat history, so the question is not base not the prior responses from our OpenAI model.

1.	Click on the edit icon for the chat history field on the Inputs flow section.  This will open an Edit text window.
2.	Select all the text with the open and close brackets “[ ]”
3.	Click on the Chat button to test the new flow
4.	Enter the following question:
```shell
what is your dental clinic address?
```
5.	You should get the following response:

![](/img/tutorial/dental-clinic-address.png)
 
6.	Next, enter the following question:

```shell
What is the clinic's phone number?
```

7.	You should get the following response:

![](/img/tutorial/dental-clinic-phone.png)
 
8.	Finally, enter the following what questions:

```shell
My tooth is aching really bad.  What could be the cause?
```

9.	You should get the following response:
 
![](/img/tutorial/toothache.png)

## Handle Groundedness & Hallucinations

Always an LLM model may be eager to provide the user with a response.  It’s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences.

Grounding test
1.	On generate_prompt section of the Flow pane, click on Generate variants button. 
2.	Select Connection for your Azure OpenAI 
3.	Next, select the Deployment name.
 
4.	Click Submit button.  These will generate a Variant_1 prompt section.
5.	In the prompt textbox, copy and paste the following text:

```shell
System: 
As an AI Assistant Prompt Engineer, I need you to generate a response to the user's question.  Please cite your sources.

context: {{contexts}}

{% for item in chat_history %}
user:
{{item.inputs.question}}
assistant:
{{item.outputs.answer}}
{% endfor %}

user:
{{question}}
```
6.	Click the **Save** button
7.	Now, enter the following question:
```shell
Which supplements are good for teeth?
```
As you can see, our chat produces a response that is factual but not in our Contoso dental data. This is an example of a groundedness issue. This is a safety risk, because if the recommendation provided makes a user sick or have a bad reaction. It can have negative consequences for Contoso dental clinic.
 
