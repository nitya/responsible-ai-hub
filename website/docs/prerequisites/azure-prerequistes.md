---
title: 2.1 Azure RAI dashboard
sidebar_position: 1
slug: /azure-prerequistes
---

# (Azure) Prerequisites

## Azure subscription account

In order to successfully complete this workshop you'll need Azure credits.  The instructor will provide you with your account promo code.  You'll need to successfully complete the azure pass redemption process for setting up your account before you can start the steps below.

To redeem a promo code, visit [microsoftazurepass.com](https://www.microsoftazurepass.com/) and follow these [Azure Pass redemption instructions](https://www.microsoftazurepass.com/Home/HowTo).

## Setup your cloud resources

We'll be using Azure Cloud Shell to create your Azure Machine Learning workspace; as well as running the jobs to train and register your model. And finally, create the Responsible AI dashboard that you'll be using in this workshop.  

1. To start, log into the [Azure portal](http://portal.azure.com/) with your account subscription.

2. Click on the "Subscriptions" icon, to access your **subscription ID**.

![Azure subscription icon](/img/tutorial/azure-subscriptions.png "Azure subscription icon")

3. On the "Subscriptions" page, copy the "subscription Id" and store it to use later.

![Azure subscription id](/img/tutorial/azure-subscriptions-copy.png "Azure subscription id")

4. Select the "Azure Cloud Shell" icon.  

![Azure Cloud Shell icon](/img/tutorial/azure-cloud-shell.png "Azure Cloud Shell icon")

5. A command terminal will open at the bottom of the page.  Select the "Bash" option.

![Cloud Shell bash](/img/tutorial/cloud-shell-bash.png "Cloud Shell bash")	

6. A Cloud Shell needs to create a storage account and mount a file system for you.  Under the "Subscription" drop-down menu, select your subscription.  Then, click on the "Create storage" button.

![Cloud Shell bash](/img/tutorial/cloud-shell-create-storage.png "Cloud Shell bash")	

7. This should open a Cloud Shell command line terminal.

![Azure Cloud Shell terminal](/img/tutorial/cloud-shell-terminal.png "Azure Cloud Shell terminal")	

8. In Azure Cloud Shell command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:
```shell
git clone https://github.com/ruyakubu/RAI-Diabetes-Hospital-Readmission-classification.git
```
9. Change to the project directory
```shell
cd RAI-Diabetes-Hospital-Readmission-classification
```

### Azure Login

10. At the terminal command prompt, enter the following Azure CLI command to log into your Azure account. 

```shell
az login --use-device-code
```
Then, open the link provided and enter the access code from the Cloud Shell message.

![Device Login URL](/img/tutorial/device-login-url.png "Device Login URL")	

11. This will open a new browser window.  Enter the access code and click on the "Next" button.

12.  Pick the account you used to setup the Azure subscription which shows the name and email your used. Then, click on the "Continue" button to sign into the Microsoft Azure CLI.  After you have successfully signed in, closed the browser window tab.  Return back to the Azure portal tab.

13. Once you have successfully logged in, set your account to your subscription.  Use the **subscription Id** that you copied earlier.
```shell
az account set -s <enter-your-subscription-id-here>
```
### Create Resource Group and Azure ML workspace

14.  Find an Azure region that is closest to you. Pick a location name close to you to use for this workshop (e.g. ***westus***,  ***eastus*** ***westeurope***, ***southafricanorth***,... etc).  
```shell
az account list-locations --query "[*].name" --out tsv | sort
```
15. Create an Azure resource group.  
```shell
az group create --name <resource-group-name> --location <location>
```
16. Create an Azure Machine Learning workspace using the resource group name you created.
```shell
az ml workspace create -n <workspace-name> -g <resource-group-name>
```
17. Set your environment default to the resource group and Azure ML workspace.
```shell
az configure --defaults group="<resource-group-name>" workspace="<workspace-name>"
```

###  Run jobs for training the model and creating the RAI dashboard

18. Register the training and testing dataset to the Azure Machine Learning workspace.
```shell
az ml data create -f cloud/train_data.yml

az ml data create -f cloud/test_data.yml
```

19. Create a compute instance for running the jobs.  Then, copy the compute name (e.g., ***compute-xxxxxxxxxxxx***) at the end of the run to use later.
```shell
uuid=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w 12 | head -n 1)
computename=compute-$uuid

az ml compute create --name $computename --type computeinstance --size STANDARD_DS12_V2

echo 'copy the compute name to use later:' 
echo $computename
```

20. On the Cloud Shell menu, click on the "Open editor" pane to edit some of the files.

![Open editor](/img/tutorial/open-editor.png "Open editor")	

21. Click on the *RAI-Diabetes-Hospital-Readmission-classification* folder to expand the directory.

![Expand directory](/img/tutorial/expand-project-directory.png "Expand directory")	

22. Navigate to the "cloud/training_job.yml" file.  Then replace the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ***"compute: azureml:compute-xxxxxxxxxxxx"***.

![Training job update](/img/tutorial/training-job-compute-update.png "training job update")	

23. Right-click anywhere in the file, then select the "Save" option to save the file.  You can use Save short-cut keys as well.

![Save editor](/img/tutorial/save-open-editor.png "Save edit")	

24. Next, navigate to the "cloud/rai_dashboard_pipeline.yml" file.  Then update the placeholder for the compute name with your compute instance name that you copied earlier.  E.g., ***"compute: azureml:compute-xxxxxxxxxxxx"***.

![Rai pipeline update](/img/tutorial/rai-pipeline-compute-update.png "Rai pipeline update")	

25. Right-click anywhere in the file, then select the "Save" option to save the file.  You can also use Save short-cut keys as well.

26. Right-click anywhere in the file, then select the "Quit" option to close the editor window.

27. Back at the Cloud Shell command prompt, submit the job to train the model.  Wait for the job to update its run status during the training.

```shell
run_id=$(az ml job create --name my_training_job -f cloud/training_job.yml --query name -o tsv)

# wait for job to finish while checking for status
if [[ -z "$run_id" ]]
then
  echo "Job creation failed"
  exit 3
fi
status=$(az ml job show -n $run_id --query status -o tsv)
if [[ -z "$status" ]]
then
  echo "Status query failed"
  exit 4
fi
running=("Queued" "Starting" "Preparing" "Running" "Finalizing")
while [[ ${running[*]} =~ $status ]]
do
  sleep 8 
  status=$(az ml job show -n $run_id --query status -o tsv)
  echo $status
done
```

28. After the training job has completed successfully, register the model to the Azure Machine Learning workspace.
```shell
az ml model create --name rai_hospital_model --path "azureml://jobs/$run_id/outputs/model_output" --type mlflow_model
```

29. Submit the job pipeline to create the RAI dashboard.
```shell
az ml job create --file cloud/rai_dashboard_pipeline.yml
```

30.  Log into [Azure Machine Learning studio](https://ml.azure.com) to monitor the pipeline job for creating the RAI dashboard.  

![Azure ML studio](/img/tutorial/azureml-studio.png "Azure ML studio page")

31.  Click on your Azure ML workspace name.  Then, click on the **Pipelines** tab to get the job status.

![Azure ML Job status](/img/tutorial/azureml_jobs_page.png "Azure ML job status page")	

32.  To view the progression of the pipeline job creating the RAI dashboard, click on the job "Display name". 

![RAI dashboard pipeline](/img/tutorial/rai_dashboard_pipeline.png "RAI dashboard pipeline")	

33.  Click on the **Models** tab on the left-hand navigation.  Then click on the name of the model to open the details page.

34.  Lastly, click on the *"Responsible AI"* tab to view the RAI dashboard.  Then, click on the "Name" to view the dashboard.

![RAI dashboard tab](/img/tutorial/rai-dashboard-tab.png "RAI dashboard tab")	

35. Terrific...you're ready to start using the dashboard!  

36. Click on the "Next" button below to proceed to the *Error Analysis* lab.
