---
id: pf-add-flow-connection-lab3'
title: '3️⃣ | Add Flow Connections'
sidebar_position: 3
slug: /add-flow-connections
---

To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:

1. Open [Azure ML studio](https://ml.azure.com/), verify that you have the **Prompt Flow** tab on the left-hand side of the navigation bar.  
 
    ![](/img/tutorial/00-enable-promptflow.png)

1. If you don’t see the **Prompt Flow** tab, click on the bullhorn icon on the upper right corner of the page.	Locate **Easily run prompt flow without worrying about compute and runtime life cycle**, switch it to **Enabled** the feature.
1. Close the features blade.

## Flow connections

As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Azure Content Safety or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets.  

Once a resource is connected, your Flow nodes have access to the resources metadata (e.g. name, api key, api_endpoint, or type).  In this workshop, we’ll be using the Azure OpenAI API.

First, confirm the Azure OpenAI API connection you created earlier, is listed.  

1.	Select the **Prompt Flow** tab, on the left-hand side of the navigation bar.
1.	Click on the **Connections** tab on the Prompt Flow page
1. Confirm that the **azure-openai-conn** connection is listed.  

    ![](/img/tutorial/00-confirm-flow-connection.png)

1. Click on the **azure-openai-conn** connection.  Then select the **Edit** button.
1. Select your **Subscription Id** and **Azure OpenAI Account Name**.  
6. Click on the **Save** button.


## Create a Runtime 

To run the Prompt Flow nodes, you need to create a Runtime.  Runtime serve as the compute with a docker environment for executing the flows.  The Compute instance are the VMs and the environment are create from a docker image that contains the Python packages and dependencies need to run the Flow.  

When creating a runtime, you have the option of choosing a default curated environment; or you can create your own custom environment.

To create runtime environment, complete the following steps:

1.	Click on the **Runtime** tab; than click **Create** button
1.	Enter a **Runtime name**
1.	Select the **prompt-compute** compute under the **Select Azure ML compute instance** drop-down menu.  

    ![](/img/tutorial/00-runtime-compute-running.png)

1.	For **Custom Application**, select the **New** option

1.	Under **Environment**, select **Use default environment**.

1.	Click on **Create**.  Then click **Confirm**, for auto compute restart.

1.  This can take ~3 mins. **Refresh** page to verify status is **Running**. 