---
title: Local Feature Importance
sidebar_position: 1
slug: /view-individual-feature-importance
---

The RAI dashboard Feature Importance section has a table view that enables users to see which records the model made a correct vs incorrect prediction.  You can use each individual patient's record to see which features positively or negatively drove that individual outcome. This is especially useful when debugging to see where the model is performing erroneously for a specific patient, and which features are positive or negative contributors.   In our case, you'll focus on the cohort with the highest errors.

![Individual Feature importance table](/img/tutorial/10-fi-table-view.png "Individual Feature importance table")

1. Click on the "switch cohort" link on top of the dashboard.  Then select the `***Err: Prior_Inpatient >0; Num_meds >11.50 & <= 21.50***` cohort under the "Cohort list" drop-down menu list.
	
![Switch cohort](/img/tutorial/6-da-switch-cohort.png "Switch cohort")	

2. Under the **"Incorrect predictions"** table view, select record index #882.  This will generate a **Feature Important plot** chart under the Table view.

![Individual Feature importance table](/img/tutorial/10-fi-selected-datapt-influence.png "Individual Feature importance table")	

3. Here you will see that *"Prior_Inpatient"*, *"Age"*, *"Max_Glu_Serum"* and *"num_medications"* are the top 4 features that are negative contributors to driving our model incorrectly predicting that the selected patient will not be readmitted within 30 days (outcome should be Readmitted).
4. Confirm that the 4 features from record index #882 are different from the top 4 features we saw above driving the models’ overall predictions from the **Aggregate feature importance** tab.
5. Next, the Individual feature importance graph shows that the *"Admission_source"*, *"prior_emergency"*, *"gender"* and *"insulin"* positively contributed to the model's outcome (Not Readmitted). Since the model incorrectly predicted record index #882 as Not Readmitted, that means the positively contributing features are erroneous: *"Admission_source"*, *"prior_emergency"*, *"gender"* and *"insulin"* since they played a significant role in skewing the model's output for this data point.
		
This lab shows how the Feature Importance removes the black box way of not knowing how the model went about making a prediction. It’s a global understanding of what key features the model uses to make a prediction. In addition, for each feature the user has the ability to explore and visualize how it is positively or negatively influencing the model’s prediction for one class vs another for each value in the feature. This exposes the thresholds the model has to produce a certain outcome. We saw this in the *“Number_Diagnoses”* feature. 

## Shutdown

Be sure to [shutdown your compute](/docs/stop-compute) instance.

---

DISCLAIMER:  Microsoft products and services (1) are not designed, intended or made available as a medical device, and (2) are not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgment and should not be used to replace or as a substitute for professional medical advice, diagnosis, treatment, or judgment. Customers/partners are responsible for ensuring their solutions comply with applicable laws and regulations. Customers/partners also will need to thoroughly test and evaluate whether an AI tool is fit for purpose and identify and mitigate any risks or harms to end users associated with its use. 

