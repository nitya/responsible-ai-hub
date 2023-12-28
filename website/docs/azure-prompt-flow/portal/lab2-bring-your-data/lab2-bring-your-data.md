---
id: pf-bring-your-data-lab2'
title: 'Lab# 2: Bring your own data'
sidebar_position: 3
slug: /bring-your-data
---

Open AI and most LLM models are training from various publicly available data.  However, there are instances where we need to use our own data and narrow the actions and data search of our LLM prompts to focus only on the scope of our data or expand the data from LLM model to include our data as well.  To use your own data in a LLM, you need to convert you data into numeric values.  Each word mapping to a specific number (token).  Then you train a model to find similarities, collations, or word association, the model creates vector indexes to the word associations.   The good thing is the Prompt Flow service provide an easy-to-use process your to upload dataset and it generates model and the Vector indexes.

To upload custom data for this lab, you need to use the Contoso Dentist clinic data located in *data/contoso_dental.xls*.

1.	Open the *src/create_faiss_mlindex.ipynb* notebook in the Visual Studio Code editor.
2.	Click on the **Select Kernel** button.

![](/img/tutorial/kernel-select.png)

3.	Select **Python Environment** from the drop-down menu.  Then pick the conda **py38_env (Python 3.8)** kernel.
4. Before running the notebook, you need to upload your **config.json** file from the Azure Machine Learning studio.

To do this, open [Azure ML studio](https://ml.azure.com/).

5. On the right corner the page, click on the down arrow.Click on the **Download config file** button.  

![](/img/tutorial/download-config-json.png)

6. Then browse to the download **config.json** file in your local director.  In the Visual Studio Code editor, right-click on the *src* folder and upload.  Or paste the *config.json* to the directory.

![](/img/tutorial/config-upload-src.png)

7. Click on the **Run All** button on the top of the notebook to run the notebook.
8. It take ~10 for the notebook to complete running.
9. Click on the **Link to Azure Machine Learning studio** click in the notebook to open the Azure ML job pipeline.

![](/img/tutorial/pipeline-vector-index.png)

10. On the left-hand side of the page, click on the **Data** open.
12. Under the **Data sources**, click **dental_faiss_mlindex** to open the vector data.
13. Finally copy the **Datastore URI** value.  We’ll use this value in the next exercise.

![](/img/tutorial/datastore-url.png)
