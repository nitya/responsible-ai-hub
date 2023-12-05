---
id: pf-chatbot-with-your-data-lab5'
title: 'Lab# 5: Chatbot to use your data'
sidebar_position: 4
slug: /chatbot-with-your-data
---

In the precise exercise you create a vector index and train to search for your vector embeddings.  In the exercise, you’ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we’ll use the numeric embedding to search the numeric vector.  Next, we’ll use the prompt to set rules with restrictions and how to display the data to the user.

We'll be using the following tools:
-	**Embedding**: converts text to number tokens.  Store to token in vector arrays based on then relation to each other.
-	**Vector index lookup**: Takes user input question and queries the vector index with the closest answers to the question.
-	**Prompt**: enters user to add rules on the response show be sent to user
-	**LLM**: provides the LLM prompt or LLM model response to user
 
1.	Open Prompt Flow service for Visual Studio code, by clicking the icon.

![](/img/tutorial/promptflow-icon.png)

2.	On the **TOOLS** toolbar, select the **Embedding** tool by clicking on plus icon **+**.  

![](/img/tutorial/flow-tools.png)
 
3.	Enter **Name** for the node (e.g. embed_question) in the pop-up entry on top of the page. Then press **Enter**.  This will generate a new Embedding section at the bottom of the flow.

![](/img/tutorial/add-embedding-node.png)

4.	Select the **AzureOpenAIconnection** name you created earlier.
5.	Select **Text-embedding-ada-002** deployment name you created earlier
6.	For **Input**, select *${inputs.question}*.  This should create a node under the input node.

![](/img/tutorial/embed-section.png)
 
* Vector Index Lookup*

1.	On the **TOOLS** toolbar, select the **Vector Index Lookup** tool by clicking on plus icon **+**.  
2.	Enter **Name** for the node (e.g. search_vector_index).  This will generate a new **Vector Index Lookup** section at the bottom of the flow.
3.	For **Path**, copy and paste the Datastore URI you retrieve earlier for the vector index.
4.	Select the embedding output as the **query** field (e.g. *${embed_question.output}*).
15.	Leave default value for **top_k**.

**NOTE**: Feel free move the nodes around to make it easier to view the flow.

![](/img/tutorial/search-vector.png)
 
*Construct Prompt*

1.	On the **TOOLS** toolbar, select the **Prompt** tool by clicking on plus icon **+**.  This will generate a new Prompt section at the bottom of the flow.
2.	Enter a **Name** for the node (e.g. generate_prompt).  This will generate a new Prompt section at the bottom of the flow.
3. Click on the **.jinja2** link to open the prompt editor.  This will open a new tab in the editor.
4.	Delete all the text in the file.  Then, copy the following text in the Prompt textbox:
```bash
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
![](/img/tutorial/construct-prompt.png)

5.	Close the .jinja2 prompt editor tab.  Then return to the flow.dag.yaml tab.
6. In your prompt section of the flow, you would see the prompt flow automatically generated the input fields from the placeholder fields in your .jinja2 file.
7.	Select ${inputs.question} for the **question** field.
8.	For **contexts**, select ${Search_Vector_Index.output}.
9.	Select the ${inputs.chat_history} for **chat_history**

![](/img/tutorial/prompt-inputs.png)

*chat*

1.	Click on the **chat** node and drag it below the **generate_prompt** node.

![](/img/tutorial/chat-node.png)
 
2.	Click on the **chat** to scroll up to the *chat* section.
3. Click on the **.jinja2** link for the chat to open the prompt editor.  This will open a new tab in the editor.

![](/img/tutorial/chat-jinja2.png)

4.	Delete all the text in the file.  Then, copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:
```bash
{{prompt_response}}
```
5.	Close the **.jinja2** prompt editor tab.  Then return to the **flow.dag.yaml** tab.
6. In your chat section of the flow, you would see that prompt flow automatically generated a **prompt_response** input fields from the placeholder fields in your .jinja2 file.
7.	In the *prompt_response* value, select ${generate_prompt.output}.

