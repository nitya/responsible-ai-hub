---
id: 'prompt-flow-lab1'
title: 'Exercise# 1: Build Workshop Environment'
sidebar_position: 1
slug: /build-workshop-enviroment
---

To get started, you can use a pre-built development environment. **Click the button below** to open the repo in GitHub Codespaces, and then continue the readme!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Azure/azure-prompt-flow?quickstart=1)  

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready, you can run the following commands to create the Azure resources and run the sample code.

**Note**: You can also access the codespaces by clicking on the green **Code** button in the top right of the repo.  Then selecting the "Codespaces" tab and clicking on the **Create codespace on main** button to launch the Codespaces environement.

![](/img/tutorial/gh-codespaces.png)

This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready. This will take ~ 10 minutes.  

![](/img/tutorial/github-load-codespaces.png)

When the environment is ready, a Visual Studio Code editor will open.

![](/img/tutorial/vsc-prompt.png)

First, set the python environment to Python 3.8

```shell
conda activate py38_env
```

At the commmand prompt, authenticate to Azure by running the following command:

```shell
az login --use-device-code
```

Enter the code provided in the browser to authenticate to Azure.  Once authenticated, you need to set your Azure subscription.

```shell
az account set --subscription <your-subscription-id>
```

Now, we are ready to run the setup create the Azure resources, run the following command:

```shell
bash setup.sh
```
The setup creates the following Azure resources:

-	Create Azure OpenAI
-	Add deployment OpenAI models
-	Create Azure ML workspace
-	Create Azure ML compute
-	Create Azure ML custom environment
-	Launch AzureML studio