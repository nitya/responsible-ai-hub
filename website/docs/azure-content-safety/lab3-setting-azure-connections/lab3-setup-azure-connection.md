---
id: cs-setup-azure-conn-lab3'
title: 'Lab# 3: Setup Azure connections'
sidebar_position: 3
slug: /setup-azure-connections
---

You run this lab you will need to authenticate to Azure and set your Azure subscription.  You will also need to set the Azure Content Safety endpoint and key as environment variables in the notebook.  The following steps will walk you through the process.


1. Set your conda environment to Python 3.8

```shell
conda activate py38_env
```

2. At the commmand prompt, authenticate to Azure by running the following command:

```shell
az login --use-device-code
```

3. Enter the code provided in the browser to authenticate to Azure.  Once authenticated, you need to set your Azure subscription.

```shell
az account set --subscription <your-subscription-id>
```


