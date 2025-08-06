---
sidebar_position: 8
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import StrongTextParser from "/src/utils/textParser.js";
import text from "/src/locale/ko/SMT/tutorial-02-installation/02-details-project.json";
import DataAdd from "./img/012_2.png";
import Signature from "./img/039.png";

# Project Details - Installation

Guides you through the Installation tab on the Project Details screen.

## Detail tap

<ValidateTextByToken dispTargetViewer={true} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![052](./img/052.png)
1. **Overview** : Enter basic information and summary of the installation and commissioning, as well as the delivery list.
1. **Pre-meeting** : You can enter the details of the pre-meeting with the customer for installation and commissioning. You can manage the details and time required for the pre-meeting.
1. **Check the installation environment** : (For HSA only) If a pre-meeting is difficult, you can save the installation environment information received from the customer via wire.
1. **Upgrade** : (For HSA only) You can enter the location where the optional installation will be performed according to the customer's order.
1. **Shipment** : (For HSA only) You can enter shipping information.
1. **Installation** : You can enter detailed information about the installation test drive and choose whether to perform a final confirmation of the installation test drive.
1. **Traning** : You can enter details of test drives and training conducted before and after installation.
1. **Quality Management** : You can enter work history for quality stabilization after installation and commissioning.

<br/>
<br/>


## Start installation
![024](./img/024.png)
1. Click the install tab.
1. Click **Start insstallation**
<br/>
<br/>

## Progress
![057](./img/057.png)
1. Once the installation run begins, you can check the grogress.
    :::info
    The progress is for all equipment requiring installation and commissioning.
    **Example**: If only one out of five pieces of equipment to be installed has completed installation and commissioning, the progress rate will be 20%.
    :::
<br/>
<br/>

## Engineer
![058](./img/058.png)
1. Add engineers who participated in the installation and commissioning activities.
<br/>
<br/>

## Time required
![059](./img/059.png)
1. Enter the time spent on the task.
1. The worker can process **Work done**.
    :::info
    The **order creator** and **service manager** can process the work completion.
    :::
1. Managers can check the worker's work hours and give **Manager confirmed**.
    :::warning
    No modifications are possible after manager confirmed. 
    :::
<br/>
<br/>

### Time required
![042](./img/042.png)
1. Enter the time required.
1. Attach documents for reference during installtion and training. 
1. Click the **check button** if you want the added time th ve reflected in the calendar.
<br/>
<br/>

![043](./img/043.png)
1. Add the parts used during installation and training.
1. Enter the part information.
1. Click the **Add button** th verify that the part has been successfully added to the list. 
    :::warning
    If you need parts for your work, you must enter the parts you need to use in order to apply for free supplies in the store.
    :::
1. You can request material shipment using the **Shipping request** button.
1. Click **Save button** to complete the registration of the work time required for installaion and commissioning.
<br/>
<br/>

## Subject to Installation
:::warning
    If the installation target does not exist, go to the **Overview Tab** and check if the **Delivery List** is registered normally.
:::
![025](./img/025.png)
1. Click on the installain target. <br/>When you click on a target, the installatin checklist will begin to be created. 
1. If you have a lot of assets, you can perform a S/N search.
<br/>
<br/>

### Checklist
![027](./img/027.png)
1. Open each step and enter the inspection results.
1. You can clisk on the progress list to jump to that step.
<br/>
<br/>

![035](./img/035.png)
1. We will run a test on each step and enter the results.
1. Once you have completed your inputm click the **Complete button**.<br/>Completed tasks are displayed in the progress bar.
    :::info
    The installation and commissioning checklist can be modified until **final confirmation**.<br/>If any changes are needed, click the **Complete button** again agter making the changes to save them.
    ::: 
<br/>
<br/>

![036](./img/036.png)
1. If you performed a chip placement accuracy check test in calibration, click the **Execution button**.
1. Click **Select** to upload the mount oppset data Excel file extracted from the device. 
    :::info
    When you upload mount offset data, **a chip placement accuracy graph is created in the installation report**.
    :::
<br/>
<br/>

![037](./img/037.png)
1. Once the checklist is completed, an installation and installaion report is automatically generated.
<br/>
<br/>

### Confirm
![038](./img/038.png)
1. Once the installation is 100% complete, you can perform a final confirmation.<br/>Move final confirmation.
<br/>
<br/>

![028](./img/028.png)
1. You can add attachments by clicking **Select button**.
1. Select the confirmation date and time, and the engineer.
    :::warning
    The warranty period starts from the entered confirmation date.
    :::
1. Select a customer reviewer.
1. Verify that the customer reviewer has been entered correctly.
1. Click the OK button to end the installation run.
    :::info
    <div><img src={Signature} width="40%" alt="039" /></div><br/>The project will be completed only after the client's reviewer signs and clicks Save.
    1. If a handwritten signature is available, select it and proceed with the handwritten signature.
    1. In countries where electronic signatures have no legal effect, such as China, attach a credible file that replaces your signature.
    :::
    :::warning
    The attached files on this page are files that will replace the signature. Please upload work-related attachments to the common items for installation and operation.
    :::
<br/>
<br/>

## Common content

![053](./img/053.png)
:::info
    This is the common content for each tab in the project details screen. Please refer to the contents below for each item in the common content.
:::
<br/>
<br/>

### Common content - 1/3

![048](./img/048.png)

1. You can check the code of the installation and commissioning project.
1. After completing the installation and commissioning, the operator must click the Project Complete button. When the button is clicked, the tasks in all tabs will be processed as completed.
    :::warning
     You can change the warranty period start date in the pop-up window that appears when you click the Complete button.<br/>You must check again to see if the warranty period start date is correct before proceeding with the completion process.
    :::
1. When Project Completion is selected, the button becomes active. The administrator clicks the Approve Project button after checking the project results.
    :::warning
     You can change the warranty period start date in the pop-up window that appears when you click the Complete button.<br/>You must check again to see if the warranty period start date is correct before proceeding with the completion process.
    :::
1. You can check the installation test drive report by clicking. The report is automatically generated when you complete all the checklists in the Installation tab.
1. You can add attachments for reference to your project.
<br/>
<br/>

### Common content - 2/3

![049](./img/049.png)

1. Check the customer information and click the Edit button if any changes are needed.
1. If you need to change the customer reviewer, click the Change button.
1. For the responsible center, changes cannot be made after the project is created.
1. You can add project managers by clicking the Add button.
<br/>
<br/>

### Common content - 3/3

![050](./img/050.png)

1. You can check the project's activity history in a timeline.
1. Comments allow engineers and managers to communicate with each other.
    :::tip
    If you check the box and write a comment, an email will be sent to the people registered in the project.
    :::
1. Use this if you need to cancel a project. The button will be disabled once the installation and commissioning tasks are complete.
1. You can select your favorites.
</ValidateTextByToken>
