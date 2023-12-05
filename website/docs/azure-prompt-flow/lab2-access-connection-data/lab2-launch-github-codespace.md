---
id: pf-access-conn-keys-lab2'
title: 'Lab# 2: Access Connection Keys'
sidebar_position: 2
slug: /access-connection-keys
---

Before we can run promptflow, we’ll need to retrieve details on the Azure OpenAI API instance provisioned in your Azure account.

Azure OpenAI
1.	Open the [Azure portal](http://portal.azure.com/), in the search box type **Azure OpenAI**, then press enter to search your resource.
2.	Click on Azure OpenAI from the list of services.  You should see your OpenAI name list on the Azure AI Services page for Azure OpenAI

![](/img/tutorial/azure-open-ai.png)

3.	Click on your OpenAI instance.
4.	Under Resource Management, select the Keys and Endpoint on the left-hand side of the navigation bar
5.	Copy **Key 1** and the **Language APIs URL**.  Store both values in a clipboard for later use

![](/img/tutorial/azure-open-ai.png)
 
6.	Click on Overview on the left-hand side of the navigation bar.
7.	On the Overview page, click on the Explore button
8.	Click on Deployments on the left side of the navigation
9.	Copy both the deployment name for the gpt-35-turbo model and text-embedding-ada-002

![](/img/tutorial/openai-deployment.png)
	  
11.	 Close the browse tab for the Azure OpenAI Studio

## Add Flow connections

As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets (e.g. name, api key, api_endpoint, or type).  

We’ll add the connection for Azure OpenAI API.  

1.	Open the browser the tab for the GitHub Codespaces for Visual Studio Code.

2.  Run the following command to create a connect to Azure OpenAI:

```shell
pf connection create --file connection/openai.yml --set api_key=your_api_key --name open_ai_conn
```


