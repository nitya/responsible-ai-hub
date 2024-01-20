---
id: rai-contentsafety-walkthru
title: Video Walkthrough
sidebar_position: 3
slug: /rai-contentsafety-walkthru
---

The **Azure Content Safety** labs takes about an hour to complete end-to-end. It can take longer if you factor in time for exploration and data entry. You might also run into issues or have questions about what _should have happened_ at a specific point in the lab, to help you debug or understand concepts better.

**This video recording of the labs can help**. The tables below show you the timestamps for each relevant step, within this video. Just visit the YouTube page and open the description to get _pre-linked_ key moments to jump directly to the relevant segments to review walkthrough steps for reference.

<iframe width="600" height="400" src="https://www.youtube.com/embed/UM9Ohefo4zU" title="Azure Content Safety for OpenAI - Exercise Walkthrough" frameborder="0" allowfullscreen></iframe>

### 1. Prepare Environment

- [**00:12:41**](https://youtu.be/OZpgOToBDqw?t=271) | Content Safety overview (PowerPoint)
- [**00:47:46**](https://youtu.be/UM9Ohefo4zU?t=2866) | Launch GitHub codespace for Lab
- [**00:50:03**](https://youtu.be/UM9Ohefo4zU?t=3003) | Open VS Code. Login to Azure.
- [**00:53:20**](https://youtu.be/OZpgOToBDqw?t=2377) | Create Azure resource Set env variables. 


### 2. Analyze Text and Image

- [**01:05:02**](https://youtu.be/UM9Ohefo4zU?t=3902) | Open analyze Text Notebook. Select Kernel, Run All.
- [**01:08:03**](https://youtu.be/UM9Ohefo4zU?t=4083) | Open analyze Image Notebook. Select Kernel, Run All.


### 3. Playground for NO OpenAI azure subscriptions

- [**01:11:39**](https://youtu.be/UM9Ohefo4zU?t=4299)  |  Requst Access key. 
- [**01:13:12**](https://youtu.be/UM9Ohefo4zU?t=4392)  |   Launch OpenAI Playground proxy. Authenticate API key.
- [**01:14:28**](https://youtu.be/UM9Ohefo4zU?t=4468)  |  Enter user input prompts
- [**01:16:58**](https://youtu.be/UM9Ohefo4zU?t=4618)  |  Add System Prompt rules. Test user input prompts. 
- [**01:20:15**](https://youtu.be/UM9Ohefo4zU?t=4815)  |  Jailbreaking


### 4. Playground for Azure OpenAI enabled subscriptions

- [**01:25:41**](https://youtu.be/UM9Ohefo4zU?t=5141) |  Launch Azure portal.  Open Azure OpenAI Playground. (portal.azure.com)
- [**01:28:38**](https://youtu.be/UM9Ohefo4zU?t=5318)  |  Enter user input prompts
- [**01:29:46**](https://youtu.be/UM9Ohefo4zU?t=5386)  |  Add System Prompt rules. Clear Chat. Test user input prompts


### 5. Handle Jailbreaks

- [**01:34:13**](https://youtu.be/UM9Ohefo4zU?t=5653)  |  Jailbreaks
- [**01:36:34**](https://youtu.be/UM9Ohefo4zU?t=5794)  |  Add Content Safety severity levels. Enable Jailbreak detection. 
- [**01:40:29**](https://youtu.be/UM9Ohefo4zU?t=6029)  |  Add Jailbreak, content severity levels to GPT-3 deployment.
- [**01:41:45**](https://youtu.be/UM9Ohefo4zU?t=6105)  |  Test jailbreak detection.