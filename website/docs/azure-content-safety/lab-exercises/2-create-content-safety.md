---
id: content-safety-lab2'
title: '2️⃣ | Create Azure Content Safety'
sidebar_position: 2
slug: /content-safety/resource
---

To complete this lesson, you would need a Azure OpenAI and Azure AI Content Safety. If you don't have OpenAI in your subscription, you'll only be creating an Azure AI Content Safety resource.

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

:::info AZURE-OpenAI-LOCATION
If you have **Azure OpenAI enabled** in your Azure subscription, pick a location name close to you that **GPT-3.5-Turbo** model is available: ***australiaeast***,
***canadaeast***, ***eastus***, ***eastus2***, ***francecentral***, ***japaneast***, ***southcentralus***, ***switzerlandnorth***, ***swedencentral***,
***uksouth***, ***westcentralus***, ***westus***, and ***westeurope***.

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

:::warning If you DO NOT Azure OpenAI available in your subscription, run the following command. Otherwise, use the command in the next step.
:::

6. Use if you **DO NOT HAVE Azure OpenAI** available in your subscription, run: 

```shell
az deployment group create --name rai-workshop --template-file no-openai/main.bicep 
```
**NOTE**:  You will receive an OpenAI error if you do not have OpenAI in your subscription.  

Otherwise, if you **HAVE Azure OpenAI** available in your subscription, run: 

```shell
az deployment group create --name rai-workshop --template-file use-openai/main.bicep 
```

7. See the environment variables for your resources.
```shell
bash setenv.sh
```
