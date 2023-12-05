---
id: pf-run-custom-chatbot-lab6'
title: 'Lab# 6: Run custom chatbot'
sidebar_position: 4
slug: /run-custom-chatbot
---

Now that you have updated the prompt flow logic to you use your own data and process the output, let’s see if the Chat will generate relevant information pertaining to our Contoso dental data.  

*Run the Chat*

1.	To test the Chat flow, click on the **Run** icon
2. On top of the page, select **Run it with interactive mode (text-only)** option. 
3. Enter the input below for the **User** prompt and click enter.

```shell
what is your dental clinic address?
```

![](/img/tutorial/what-is-address-grnd.png)

4.	Finally, enter the input below for the **User** prompt and click enter.

```shell
what is your dental clinic's phone number?
```

![](/img/tutorial/what-is-phone-grnd.png)
 
5.	Now, let's try a question that is not in our data to test if AI chatbot is grounded our custom data. Enter the following question:

```shell
Who is the author of Hamlet?
```
6.	You should get the following response:

![](/img/tutorial/what-is-hamlet-grnd.png)

As you can see, our chat produces a response that is factual but *Hamlet* not in our Contoso dental data.As you can see Hamlet is not is our contoso dental data. This show that our chatbot is has problems still grounded to our data.  In the next exercise, we’ll learn how to use the prompt engineering to add rules to our chatbot to restrict its response.

Handle Groundedness issues

Always an LLM model may be eager to provide the user with a response.  It’s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences.

*Grounding outputs*

1. Open the **flow.dag.yaml** file.  In the **promt** section, 
2. Click on the **.jinja2** link to open the prompt editor.  This will open a new tab in the editor.
4.	Modify the **system** text.  Then, copy the following text:
```bash
system:
 You are an AI system designed to answer questions from users in a designated context. When presented with a scenario, you must reply with accuracy to inquirers' inquiries using only descriptors provided in that same context. Only provided information in the vector index scope. If there is ever a situation where you are unsure of the potential answers, simply respond with "I don't know.
Please add citation after each sentence when possible in a form. 
```

![](/img/tutorial/update-prompt-grnd.png)

5. Close the .jinja2 prompt editor tab.  Then return to the flow.dag.yaml tab.
6. To test the Chat flow, click on the **Run** icon. Then select **Run it with interactive mode (text-only)** option.
7. Now, let's enter the following question again:

```shell
Who is the author of Hamlet?
```

![](/img/tutorial/what-is-hamlet-dontknow.png)

As you can see, the chatbot is now responding with “I don’t know” when the question is not in our vector index for contoso dental.

8. Let's verify again the address our the dental clinic.  Enter the following question:

```shell
what is the dental clinic address?
```

7.	Finally, enter the following question:

```shell
My tooth is aching really bad.  What could be the cause?
```
![](/img/tutorial/toothache-decay.png)