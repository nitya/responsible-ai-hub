---
id: content-safety-lab2'
title: '2️⃣ | Create Azure Content Safety'
sidebar_position: 2
slug: /content-safety/resource
---

To complete this lesson, you would need a Azure OpenAI and Azure Content Safety. If you don't have OpenAI in your subscription, you'll only be creating an Azure Content Safety resource.

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
4.	Create a resource group in the region closest to you.
```shell
az group create --name <resource-group-name> --location <region-name>
```

- To find an Azure region that is closest to you. Pick a location name close to you to use for this workshop (e.g. ***westus***,  ***eastus*** ***westeurope***, ***southafricanorth***,... etc).  
```shell
az account list-locations --query "[*].name" --out tsv | sort
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
7. Use if you **HAVE Azure OpenAI** available in your subscription, run: 

```shell
az deployment group create --name rai-workshop --template-file use-openai/main.bicep 
```
**NOTE**:  You will receive an OpenAI error if you do not have OpenAI in your subscription.  

7. See the environment variables for your resources.
```shell
bash setenv.sh
```
