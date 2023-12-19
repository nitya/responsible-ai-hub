---
id: 'prompt-flow-lab1'
title: 'Exercise# 1: Build Workshop Environment'
sidebar_position: 1
slug: /build-workshop-enviroment
---

To get started, you can use a pre-built development environment. **Click the button below** to open the repo in GitHub Codespaces, and then continue the readme!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Azure-Samples/rai-prompt-flow-workshop?quickstart=1)  

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready, you can run the following commands to create the Azure resources and run the sample code.

**Note**: You can also access the codespaces by clicking on the green **Code** button in the top right of the repo.  Then selecting the "Codespaces" tab and clicking on the **Create codespace on main** button to launch the Codespaces environement.

![](/img/tutorial/gh-codespaces.png)

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready. This will take ~ 10 minutes.  

![](/img/tutorial/github-load-codespaces.png)

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
4.	Create a resource group in the region closest to you.
```shell
az group create --name <resource-group-name> --location <region-name>
```
5. Set the resource group as the default resource group for the Azure CLI.
```shell
az configure --defaults group=<resource-group-name>
```
6. If you **do not ** have an Azure OpenAI available in your subscription, complete the step.

Otherwise, run the following command.
```shell
az deployment group create --name rai-workshop --template-file main.bicep 
```
7. See the environment variables for your resources.
```shell
bash setenv.sh
```
The setup creates the following Azure resources:

-	Create Azure OpenAI
-	Add deployment OpenAI models
-	Create Azure ML workspace
-	Create Azure ML compute
