---
id: cs-analyze-text-lab4'
title: 'Lab# 4: Analyze Text'
sidebar_position: 4
slug: /content-safety-analyze-text
---

![](/img/tutorial/cs-text-filter.png)

When dealing with text, it is either user or application generated. With Generative AI, we need to be mindful that the text to be examined is either user input prompts or AI generated responses. For example, one of the challenges of using social media or Chat applications to a demographic of high school students is that it introduces system vulnerabilities for users to enter text that have profanity, bullying, harassment, derogatory implications etc. 

Let’s explore how the Content Safety API handles text.

1.	Open the *text_content_safety.ipynb* notebook.
2.	Click on **Select Kernel** on the upper right of the notebook.
3.	Select **Python Environments** in the kernel drop-down menu.

![](/img/tutorial/cs-select-kernel-python-env.png)

4.	Choose the conda **Python 3.8** kernel.
5.	Click **Run All** to execute the *text_content_safety.ipynb* notebook.
6.	Verify that all cells ran successfully.
7.	In cell #3, the input_text set to *“You are stupid.”*
8.	In the last cell, you’ll see that the Content Safety API found the input text to be “Hate” content with a severity of 2.
9.	Now try changing the input_text to your own text and see what the output will be.

**Note**: you can add code on how you want the application to behavior or what warning message to display, based on the severity level.


