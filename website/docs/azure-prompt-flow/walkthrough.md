---
id: rai-promptflow-walkthru
title: Video Walkthrough
sidebar_position: 3
slug: /rai-promptflow-walkthru
---

The **Azure ML Prompt Flow** labs takes about an hour to complete end-to-end. It can take longer if you factor in time for exploration and data entry. You might also run into issues or have questions about what _should have happened_ at a specific point in the lab, to help you debug or understand concepts better.

**This video recording of the labs can help**. The tables below show you the timestamps for each relevant step, within this video. Just visit the YouTube page and open the description to get _pre-linked_ key moments to jump directly to the relevant segments to review walkthrough steps for reference.

<iframe width="600" height="400" src="https://www.youtube.com/embed/OZpgOToBDqw" title="Azure ML Prompt Flow - Exercise Walkthrough" frameborder="0" allowfullscreen></iframe>

### 1. Prepare Environment

- [**00:03:30**](https://youtu.be/OZpgOToBDqw?t=210) | Launch GitHub codespace for Lab
- [**00:04:31**](https://youtu.be/OZpgOToBDqw?t=271) | Prompt Flow overview (PowerPoint)
- [**00:36:44**](https://youtu.be/OZpgOToBDqw?t=2204) | Open VS Code. Login to Azure.
- [**00:39:37**](https://youtu.be/OZpgOToBDqw?t=2377) | Create Azure resource Set env variables. Save config to conflig.json
- [**00:50:18**](https://youtu.be/OZpgOToBDqw?t=3018) | Download conflig.json. Select Kernel. Run All.


### 2. Load Data into Vector Datastore

- [**00:52:51**](https://youtu.be/OZpgOToBDqw?t=3171) | Authenticate to Azure ML Studio
- [**00:53:32**](https://youtu.be/OZpgOToBDqw?t=3212) | load your data source and destination
- [**00:55:20**](https://youtu.be/OZpgOToBDqw?t=3320) | create compute instance
- [**00:55:25**](https://youtu.be/OZpgOToBDqw?t=3325) | create OpenAI connection
- [**00:55:55**](https://youtu.be/OZpgOToBDqw?t=3355) | use text embedding model deployment. submit pipeline job
- [**00:56:47**](https://youtu.be/OZpgOToBDqw?t=3407) | ⏳ Takes ~10 mins. Monitor Vector Index job. 
- [**00:57:12**](https://youtu.be/OZpgOToBDqw?t=3432) |  Get vector datastore path.


### 3. API connections and Compute runtime 

- [**00:58:56**](https://youtu.be/OZpgOToBDqw?t=3536)  |  Add or Update API Connection
- [**00:59:45**](https://youtu.be/OZpgOToBDqw?t=3585)  |  Create a Runtime 


### 4. Create a Chat Agent

- [**01:09:45**](https://youtu.be/OZpgOToBDqw?t=4185) |  Add Embeddings for input
- [**01:12:08**](https://youtu.be/OZpgOToBDqw?t=4329)  |  Add Vector db Lookup. Use your own data
- [**01:14:17**](https://youtu.be/OZpgOToBDqw?t=4457)  |  Add System Prompt and rules
- [**01:18:01**](https://youtu.be/OZpgOToBDqw?t=4681)  |  Add response field
- [**01:20:10**](https://youtu.be/OZpgOToBDqw?t=4810)  |  Test the chat agent
- [**01:24:33**](https://youtu.be/OZpgOToBDqw?t=5073)  |  Add prompt variants
- [**01:29:12**](https://youtu.be/OZpgOToBDqw?t=5352)  |  Test Chat with another prompt variant


### 5. Evaluate Chat flow performance

- [**01:31:46**](https://youtu.be/OZpgOToBDqw?t=5506) | Add Evaluation
- [**01:33:08**](https://youtu.be/OZpgOToBDqw?t=5588) | Choose variant(s) to evaluate
- [**01:33:41**](https://youtu.be/OZpgOToBDqw?t=5621) | Add test data
- [**01:34:50**](https://youtu.be/OZpgOToBDqw?t=5690) | Select Evaluation template
- [**01:36:00**](https://youtu.be/OZpgOToBDqw?t=5760) | Select performance metrics.  Mapping test data fields
- [**01:38:33**](https://youtu.be/OZpgOToBDqw?t=5913) | ⏳ Run Evaluation. Takes ~20 mins.
- [**01:39:18**](https://youtu.be/OZpgOToBDqw?t=5958) | View Evaluation results