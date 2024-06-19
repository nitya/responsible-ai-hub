---
id: 'prompt-flow-lab1'
title: '1️⃣ | Build Lab Environment'
sidebar_position: 1
slug: /build-workshop-enviroment
---

As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to, such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets (e.g. name, api key, api_endpoint, or type).  

## Launch Codespaces

To get started, you can use a pre-built development environment. **Click the button below** to open the repo in GitHub Codespaces, and then continue the readme!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/nitya/rai-prompt-flow-workshop?quickstart=1)  

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready, you can run the following commands to create the Azure resources and run the sample code.

**Note**: You can also access the codespaces by clicking on the green **Code** button in the top right of the repo.  Then selecting the "Codespaces" tab and clicking on the **Create codespace on main** button to launch the Codespaces environement.

![](/img/tutorial/gh-codespaces.png)

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready. This will take ~ 10 minutes.  

![](/img/tutorial/github-load-codespaces.png)

## Open VS Code

When the environment is ready, a Visual Studio Code editor will open.

![](/img/tutorial/vsc-prompt.png)

1. At the commmand prompt, set the python environment to Python 3.8

```shell
conda activate py38_env
```

2. Authenticate to Azure by running the following command:

```shell
az login --use-device-code
```

Enter the code provided in the browser to authenticate to Azure.  

3. Once authenticated, you need to set your Azure subscription.

```shell
az account set --subscription <your-subscription-id>
```

:::info GPT-3.5-Turbo LOCATIONS
If you have **Azure OpenAI enabled** in your Azure subscription, pick a location name close to you that **GPT-3.5-Turbo** model is available: ***australiaeast***,
***canadaeast***, ***eastus***, ***eastus2***, ***francecentral***, ***japaneast***, ***southcentralus***, ***switzerlandnorth***, ***uksouth***, ***westcentralus***, ***westus***, and ***westeurope***.

Otherwise, use a general Azure location lookup by running this script `az account list-locations --query "[*].name" --out tsv | sort`

:::

4.	Create a resource group in the region closest to you.
```shell
az group create --name <resource-group-name> --location <region-name>
```

5. Set the resource group as the default resource group for the Azure CLI.
```shell
az configure --defaults group=<resource-group-name>
```
6. Run the following command to create your Azure openAI, content safety and Azure Machine Learning resources:

```shell
az deployment group create --name rai-workshop --template-file main.bicep
```

NOTE: For **AzureMLname**, use only lowercase letters (6 - 8 character long). **DO NOT** use numbers or special characters.  Use unique names to make sure the name does not match another instance name.  Here's an example:

![](/img/tutorial/bicep-param-pf.png)


7. See the environment variables for your resources.
```shell
bash setenv.sh
```
The setup creates the following Azure resources:

-	Create Azure OpenAI
-	Add deployment OpenAI models
-	Create Azure ML workspace


