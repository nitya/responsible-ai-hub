---
id: cs-analyze-image-lab4'
title: 'Lab# 5: Analyze Image'
sidebar_position: 5
slug: /content-safety-analyze-image
---

![](/img/tutorial/cs-image-filter.png)

There are tons of applications and social medial sites that enable users to upload images. This opens a flood gate of opportunities for users to upload sexual derogative content, violence, or harmful content. Similar to text, it’s not realistic to rely on users to flag inappropriate content or the staff to manually see the content when it’s uploaded.  Even with manual monitors, images are subjected to each individual evaluator to determine if it is risky. 

In this lab, we will see examples of how one image is clearing inappropriately and another image can be subjective.

1.	Open the *text_content_safety.ipynb* notebook.
2.	Click on **Select Kernel** on the upper right of the notebook.
3.	Select **Python Environments** in the kernel drop-down menu.
4.	Choose the conda **Python 3.8** kernel.
5.	Open the *image_content_safety.ipynb* notebook.
6. Click **Run All** to execute the notebook.
7.	Verify that all cells ran successfully.
8.	In the project explorer, navigate to the “img” folder and click on the **image1.jpg** to open it.
9.	In the last cell, you’ll see that the Content Safety API found the image of a gun and bullet to be “Violence” content with a severity of 2.
10.	Now…in cell#4, try changing image1.jpg to **image2.jpg** and see what the output will be.

**Note**: you can add code on how you want the application to behavior or what warning message to display, based on the severity level.



