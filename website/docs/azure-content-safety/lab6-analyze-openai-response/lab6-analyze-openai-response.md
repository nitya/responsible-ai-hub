---
id: cs-analyze-openai-lab6'
title: 'Lab# 6: Analyze OpenAI Response'
sidebar_position: 6
slug: /content-safety-analyze-openai
---

![](/img/tutorial/cs-image-filter.png)

OpenAI produces dynamic responses where one response to the same inquiry does not alway yeild the same output.  In addition, we cannot always anticipate the risks that are in the response that can could be harmful to users.  Azure Content Safety help you to add content filter and guardrails for categories such as sexual derogative content, violence, or harmful content. 

In this lab, we will see examples of how content safety is able to detect risky content from OpenAI chatGPT and enable you to mitigate the problem. 

1.	Open the *use-openai/openai-text_content_safety.ipynb* notebook.
2.	Click on **Select Kernel** on the upper right of the notebook.
3.	Select **Python Environments** in the kernel drop-down menu.
4.	Choose the conda **(py38_env) Python 3.8** kernel.
5. Click **Run All** to execute the notebook.
6.	Verify that all cells ran successfully.
7.	Set the input_text to *“What is John's job in the movie John Wick?”*
8.	In the last cell, you’ll see that the Content Safety API found the input text to be “Hate” content with a severity of 2.
9.	Now try changing the input_text to your own text and see what the output will be.

**Note**: you can add code on how you want the application to behavior or what warning message to display, based on the severity level.



