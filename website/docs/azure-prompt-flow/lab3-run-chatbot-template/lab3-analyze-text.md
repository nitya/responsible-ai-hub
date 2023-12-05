---
id: pf-run-chatbot-template-lab3'
title: 'Lab# 3: Run chatbot template'
sidebar_position: 3
slug: /run-chatbot-template
---

Azure Machine Learning studio promptflot provide a gallery of flows templates to build on.  We will start by using a basic chat template that interacts with prompts powered by an OpenAI model.

1.	In Visual Studio code editor, expand the **my-chatbot** folder.  Then open on the **flow.dag.yaml** file. 
2.	Scroll to the top of the file and click on the **Visual editor** option to open the logical flow graph.

![](/img/tutorial/chat-template-visualselect.png)

*Input Node*

On flow page, promptflow generates the Input fields need for the chat input node.  The inputs needed for the chat node are **chat_history** and **question**.  

Add Azure OpenAI connection for the Chat 

1.	Under the **chat** section on the right-side of the file, click on the **Add connection** button.

![](/img/tutorial/add-chat-connection.png)

2. Select the **AzureOpenAI** option on top of the page.

![](/img/tutorial/azureopenai-connect-option.png)

3. Enter a **name** for the connection 
4. For the **api_base**, enter your Azure OpenAI API endpoint url you copied earlier.
5. Save the file.
6. Click on **Create connection** 

![](/img/tutorial/add-connection.png)

7. Copy and paste the azure openai key you copied earlier in the **api_key** command prompt.

![](/img/tutorial/enter-api-key.png)

8. The api_key will be stored in the **secrets** section of the flow file.  This will enable you to use the api_key in other nodes in the flow.

![](/img/tutorial/azureopenai-connect-success.png)

9. Open the **flow.dag.yaml** file.  In the **chat** section, select connection name you just created in the **connection** drop-down menu.

10. For the **deployment_name**, enter the deployment name for the **gpt-35-turbo** model you copied earlier.

![](/img/tutorial/chatnode-connection-input.png)

*Output Node*

If you scroll back to the Output section, you’ll see that the **answer** is linked to the Chat nodes output.

*Run the Chat*

1.	To test the Chat flow, click on the **Run** icon

![](/img/tutorial/new-chat.png)

2. On top of the page, select **Run it with interactive mode (text-only)** option.

![](/img/tutorial/run-interactive-mode.png)
 
3. Enter the input below for the **User** prompt and click enter.

```shell
what's a tooth cavity?
```

![](/img/tutorial/what-is-cavity.png)

4.	Finally, enter the input below for the **User** prompt and click enter.

```shell
What is the address of your dental clinic?
```

![](/img/tutorial/dental-address.png)
 
As you can see the Chat is not able to answer specific questions about a business or dental clinic.   This makes some of the answers not reliable or available.  In the next exercise, you learn how to bring your custom data into the chat to provide response that are relevant to your data.