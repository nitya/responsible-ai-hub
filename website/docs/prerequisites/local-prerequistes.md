---
title: 2.2 Open-Source RAI dashboard
sidebar_position: 2
slug: /opensource-prerequistes
---

# (OSS) Prerequisites

## Open-source Responsible AI Toolbox

To use the open-source Responsible AI Toolbox, you'll need a notebook to successfully complete this workshop.  We'll be using Visual Studio code in this lab. 

## Clone the project repository

You'll need to clone the project repository to your local machine.  If you don't already have Git installed, you can download it from [git-scm.com](https://git-scm.com/downloads).

1. From the command prompt, clone the Diabetes Hospital Readmission project github repository by copying and pasting the command below:
```shell
git clone https://github.com/ruyakubu/responsibleai-toolbox-diabetes-hospital-readmission.git
```
2. Change to the project directory.
```shell
cd responsibleai-toolbox-diabetes-hospital-readmission
```

## Python and Conda environment

We'll also be using conda to manage our Python environment in this workshop.  If you don't have Anaconda or Miniconda installed, you can download it from [docs.conda.io](https://docs.conda.io/en/latest/miniconda.html).  You'll need the directory path to where you installed conda later.  For example, for Windows users, if you are using Anaconda, the path is usually located at **C:\Users\\[username]\Anaconda3\Scripts**.

1. From the command prompt, confirm your installation by typing the following command below:
```shell
conda --version
```

2. If conda is not recognized, locate that the path to where you installed Conda is set in your system environment variables path.  Run the following command to add the path to your system path:

```shell
setx PATH "%PATH%;C:\Users\\[username]\Anaconda3\Scripts"
```

## Install Visual Studio Code

We'll be using Visual Studio Code to train your model; and create the Responsible AI dashboard with insights that you'll be using in this workshop.  If you don't have Visual Studio Code already installed, you can download it from [code.visualstudio.com](https://code.visualstudio.com/download).

1. To start, launch the **Visual Studio Code** application.

![Visual Studio Code welcome](/img/tutorial/00-vscode-welcome.png "visual studio code")

2. Click on the "Extensions" icon, then type **Python Extension Pack** in the search box.  Then, click on the "Install" button for the "Python Extension Pack".  This will automatically install Python and all of its dependencies.

![Python Extensions](/img/tutorial/00-vscode-pythonExtensionPack.png "Python Extensions Pack")

3. To configure your python settings, search for the **Python** extension in the search box.  Then, click on the Python link.

4. On the Python extension page, click on the settings gear icon.  Then, select the "Extension Settings" option.

![Python Extension Settings](/img/tutorial/00-vscode-pythonSettings.png "Python Settings")

5. Under the "Python: Conda Path" section, enter the path to where your conda executable is installed.  For example, if you are using Anaconda, the Windows path is usually located at **C:\Users\\[username]\Anaconda3\Scripts**.  

![Conda path](/img/tutorial/00-vscode-condaPath.png "Conda")


## Create python environment

1. From the "File" menu, select "Open Folder".  Then, select the ***"responsibleai-toolbox-diabetes-hospital-readmission"*** folder that you cloned from the github repository.

2. Then click on the "diabetes-hospital-readmission.ipynb" file to open the notebook.

3. Click on the "Terminal" menu, then select "New Terminal".  This will open a new terminal window at the bottom of the screen.

![Visual Studio Code terminal](/img/tutorial/00-vscode-terminal.png "Visual Studio Code terminal")

4. On the right-hand side of the terminal window, click on the "+" icon to switch the shell to "Command Prompt".

![Terminal shell change](/img/tutorial/00-vscode-commandshell.png "shell change")

5. At the command prompt, type the following command to create a conda environment:

```shell
conda env create -n py39_env --file libs/env.yaml
```

5. Confirm that the conda environment was created from the command prompt:

![Create env](/img/tutorial/00-vscode-create-env.png)

6. Select the conda environment by clicking on the "Select Kernel" icon on the top right-hand side of the notebook.  This will open a search box where you can select a kernel.

![Select kernel](/img/tutorial/00-vscode-selectkernel.png)

7. On the kernel search box, click on the "Select Another Kernel" option.  Then, select the "Python Environments..." option.

![Python Environments](/img/tutorial/00-vscode-pythonEnvironments.png)

8. On the "Select Python Environment" dialog, select the "py39_env" environment that you created earlier.  

![Select Environment](/img/tutorial/00-vscode-selectEnv.png)

## Run the notebook

1. Click on the "Run All Cells" button to run the notebook.  This will take 5 minutes to complete.

2. After the notebook has completed running, a link to the generated Responsible AI dashboard will be displayed.  Click on the link to launch a browser window with the dashboard.

![RAI dashboard link](/img/tutorial/00-vscode-raidashboardlink.png "RAI dashboard link")	

3. Terrific...you're ready to start using the dashboard!  

![RAI dashboard](/img/tutorial/00-vscode-rai-page.png "RAI dashboard")	


