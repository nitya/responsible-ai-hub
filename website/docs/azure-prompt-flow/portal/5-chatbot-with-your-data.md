---
id: pf-chatbot-with-your-data-lab5'
title: '5️⃣ | Chat With Your Data'
sidebar_position: 5
slug: /chatbot-with-your-data
---

In the precise exercise you create a vector index and train to search for your vector embeddings.  In this exercise, you’ll be expanding the Chat pipeline logic to take the user question .  Then we’ll use the question to search the numeric vector.  Next, we’ll use the prompt to set rules with restrictions and how to display the data to the user.

We'll be using the following tools:
-	**Embedding**: converts text to number tokens.  Store to token in vector arrays based on then relation to each other.
-	**Vector index lookup**: Takes user input question and queries the vector index with the closest answers to the question.
-	**Prompt**: enters user to add rules on the response show be sent to user
-	**LLM**: provides the LLM prompt or LLM model response to user
 
1.	Open the Flow page, by clicking **Prompt Flow**.
2.  Close the **Chat** dialog pane.

![](/img/tutorial/00-close-chat-window.png)


*Add Vector Index Lookup tool*

2.	On the Flow toolbar, click on **More tools**.  Then select the Index Lookup tool.  

![](/img/tutorial/more-tools.png)

This will generate a new **Index Lookup** section at the bottom of the flow.
3.	Enter **Name** for the node (e.g. search_vector_index).
4.	Click the **Add** button
5.  Click on the **mlindex-content** textbox.  This will option a new window pane.

![](/img/tutorial/select-mlidex.png)

6.  Select the **MLIndex file from path** option for the **index_type**.
7.  For **mlindex_path**, copy and paste the Datastore URI you retrieve earlier for the vector index (e.g. `azureml://subscriptions/...` ).
8.  Click the **Save** button.
9.  Select the input question as the **query** field (e.g. `${inputs.question}` ).
10. Select the **Vector** option for the **query_type** field.
11.	Leave default value for **top_k**.

![](/img/tutorial/search-vector.png)
 
12.	Click the **Save** button

*Add Prompt tool*

13.	On the Flow toolbar, click on **Prompt** tool. This will generate a new Prompt section at the bottom of the flow.

![](/img/tutorial/00-prompt-tool.png)

14.	Enter a **Name** for the node (e.g. generate_prompt).  Then click the **Add** button.
15.	Copy the following text in the Prompt textbox:
```shell
system:
You are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the answer, simply respond with "I don't know".    

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
16.	Click the **Validate and parse input** button to generate the input fields for the prompt.
17.	Select the `${inputs.chat_history}` for **chat_history**
18.	For **contexts**, select `${search_vector_index.output}`.
19.	Select `${inputs.question}` for the **question** field.
 
![](/img/tutorial/output_prompt.png)

20.	Click on the **Save** button
21.	Click on the **chat** node and drag it below the **generate_prompt** node

![](/img/tutorial/chat-node.png)
 
22.	Under the **Flow** pane, scroll up to the **chat** section.  Delete the existing text in the **Prompt** textbox.  
 
![](/img/tutorial/chat-node-input.png)

*Update Chat node*

23.	Copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:

```shell
{{prompt_response}}
```
24.	Click on the **Validate and parse input** button to regenerate a new input field. Prompt Flow will generate the text metadata you specified in the Prompt textbox.
25.	In the **Prompt_response** value, select `${generate_prompt.output}`.
26.	Click on the **Save** button

## Test Chat with your own data

Now that you have updated the prompt flow logic to you use your own data and process the output, let’s see if the Chat will generate more relevant information pertaining to our Contoso dental data.  First let clear the chat history, so the question is not base not the prior responses from our OpenAI model.

1. Click on the **Chat** icon on the top right corner of the page.

2. To clear the prior chat history, click on the dialog icon next to the input textbox (**Note**:  Make sure to clear all chat history).

![](/img/tutorial/00-clear-chat-history.png)

3.	Enter the following question:
```shell
what is the dental hospital address?
```
4.	You should get the following response:

![](/img/tutorial/dental-clinic-address.png)
 
6.	Next, enter the following question:

```shell
What is the clinic's phone number?
```

7.	You should get the following response:

![](/img/tutorial/dental-clinic-phone.png)
 
8.	Finally, enter the following what questions:
```shell
Which supplements are good for teeth?
```

9.	You should get the following response:
 
![](/img/tutorial/00-teeth-vitamins.png)

As you can see, our chat produces a response that is factual but not in our Contoso dental data. This is an example of a groundedness issue. This is a safety risk, because if the recommendation provided makes a user sick or have a bad reaction. It can have negative consequences for Contoso dental clinic.


## Handle Groundedness & Hallucinations

Always an LLM model may be eager to provide the user with a response.  It’s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences.

Grounding test
1.	On the **generate_prompt** section of the Flow pane, click on **Generate variants** button. 
2.	Select **Connection** for your Azure OpenAI 
3.	Next, select the **Deployment** name (e.g. gpt-35-turbo).
4.	Click **Submit** button.  

![](/img/tutorial/00-generate-variant.png)

5. On the **generate_prompt** section, click on the **Show variants** button.
This will expand the section with **Variant_0** generated and **Variant_1** generated.  The **Variant_0** is the original prompt you created.  The **Variant_1** is the new prompt generated by the LLM model. 

6.	In the prompt textbox for **Variant_1**, copy and paste the following text.  

```shell
system:
You are an AI dental assistant designed to answer questions. I need you to generate a response to the user's question based only on context and information from the dental documents.  You *must only* provide responses from the vector dental documents. I want a well-informed and polite response. Please provide a unique, honest and relevant answer. If you are not sure about the answer, kindly respond with "I don't know."

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
7. Click on the **Set as default** button to set the new prompt as the default prompt for the **generate_prompt** node.
8.	Click the **Save** button
9.  Click on the **Chat** icon on the top right corner of the page.
10. Clear the prior chat history by click on the dialog icon next to the input textbox.  (**Note**:  Make sure to clear all chat history).
11.	Now, enter the following question:
```shell
Which supplements are good for teeth?
```

![](/img/tutorial/00-i-dont-know.png)

Fantastic!....as you can see, since our contoso dental data does not contain supplements for teeth, our chat response with **I don't know*. 
 
