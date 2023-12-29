---
id: pf-create-chatbot-template-lab4'
title: 'Lab# 4: Create chatbot template'
sidebar_position: 4
slug: /create-chatbot-template
---

We will learn how to create a basic chat agent that interacts with prompts power by an OpenAI model.
 
1.	On the Prompt flow page, select the **Flow** tag.   Then click on **Create** button.

![](/img/tutorial/00-chatflow-template.png)

This displays a gallery of different types of flows and evaluation templates you can clone.  

2.	Under **Chat Flow**, click on the Create button.

3.	Enter a **Folder name** on the Create a new file blade (e.g contoso-dental-chat).

4.	Press **Create**.

## Input Node

On flow page, Prompt generates the Input fields need for the chat input node.  The right side of the page displays a pipeline containing action nodes with logic needed to build the flow.

*Add Azure OpenAI to power the chat*

1.	Under the **Connection** drop-down menu, select the name for the *Azure OpenAI connection* created earlier.

![](/img/tutorial/00-add-chat-gpt-conn.png)

2.	Make sure Chat is select for **Api**
3.	Select **deployment_name**
4.	Skip the **Advanced** and **Function** calling section.
5.	The **Prompt** section is already prepopulated for you:

* **System**: States what the chat does, as well as rules & restrictions for it.  You can enter instructions on how to handle use inquiries.
* Since the Chat flow keeps the context and dialogue of the conversation, the prompt loops through the chat history to display the chat responses and user inputs.

6. Click **Save** on the top right corner of the page.


## Output Node

If you scroll back to the Output section, you’ll see that the **answer** is linked to the Chat nodes output.

![](/img/tutorial/00-output-node.png)

## Run the Chat

1.	To test the Chat flow, click on the **Chat** icon
 
2.	In the text box and click submit the following question:

```shell
what is prompt engineering?
```

![](/img/tutorial/what-is-prompt.png)

3.	Next, enter: 

```shell
My molar tooth is aching so bad.  What could be the cause?
```

4.	Finally, to test if the chat can provide specific information about a specific dental office, enter:

```shell
What is the address of your dental clinic?
```

![](/img/tutorial/dental-address.png)
 
As you can see the openAI Chat is able to successfully provide answers to the user's question.  However, it was not able to answer specific questions about a business or dental clinic.   This makes some of the answers not reliable or available.  In the next exercise, you learn how to bring your custom data into the chat to provide response that are relevant to your data.

