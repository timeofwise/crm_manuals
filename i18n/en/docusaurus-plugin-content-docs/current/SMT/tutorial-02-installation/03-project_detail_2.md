---
sidebar_position: 4
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import StrongTextParser from "/src/utils/textParser.js";
import text from "/src/locale/ko/SMT/tutorial-02-installation/02-details-project.json";
import DataAdd from "./img/012_2.png";
import Signature from "./img/039.png";

# Project Details - Pre-Meeting

We will guide you through the Preliminary tab in the Project Details screen.

## Detail tap

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![052](./img/052.png)
1. **Overview** : Enter basic information and summary of the installation and commissioning, as well as the delivery list.
1. **Pre-meeting** : You can enter the details of the pre-meeting with the customer for installation and commissioning. You can manage the details and time required for the pre-meeting.
1. **Check the installation environment** : (For HSA only) If a pre-meeting is difficult, you can save the installation environment information received from the customer via wire.
1. **Upgrade** : (For HSA only) You can enter the location where the optional installation will be performed according to the customer's order.
1. **Shipment** : (For HSA only) You can enter shipping information.
1. **Installation** : You can enter detailed information about the installation test drive and choose whether to perform a final confirmation of the installation test drive.
1. **Traning** : You can enter details of test drives and training conducted before and after installation.
1. **Quality Management** : You can enter work history for quality stabilization after installation and commissioning.

</ValidateTextByToken>
<br/>
<br/>



##  Pre-Meeting

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

This is used when conducting a preliminary meeting with the customer before performing installation and commissioning work.

![015](./img/015.png)


1. You can click the Pre-Meeting tab to check or add details of pre-meetings you have had with customers.
    :::info
    **Blue dot** : Indicates that there is work in progress. Engineers must perform a work completion check after the work is completed.
    <br/>**Orange dot** : Indicates that there are items that have been completed. The administrator must check the work history and proceed with the administrator approval check.
    :::
1. If you are performing a pre-meeting, click the + button.
1. (Engineer) When the pre-meeting is complete, click the Complete Work toggle.
1. (Admin) Check the pre-meeting details that the engineer has completed and click the Admin Approval toggle.
<br/>

### Pre-Meeting Add
![033](./img/033.png)

1. Select the date on which you want to conduct (or schedule) your pre-meeting.
1. If you have your own system, register that number.
1. Enter any other special details.
1. Click the Add button to select the pre-meeting engineer.
<br/>When selecting an engineer, you can check the schedule of the engineer you can select for that project.
<br/>

![017](./img/017.png)

1. Click the + button to enter the time spent in the meeting (for expense accounting purposes).<br/>Enter the engineer, work category, and work hours, then click Save and Close.
1. The pre-meeting results report is attached.
1. To register the added schedule to the schedule, check Reflect the added time on the calendar. The schedule will be visible to colleagues in the center.

![043](./img/043.png)

1. Add the parts used in the pre-meeting.
1. Enter the part information.
1. Click the Add button to check if the part has been added to the list normally. <br/>If there are parts required for the work, you must enter the parts used to apply for free supplies in the store. 
1. You can request material shipment using the Shipment Request button.
1. Click Save to complete registration.

</ValidateTextByToken>

## Common content
<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

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
     You can change the warranty period start date in the pop-up window that appears when you click the Complete button.
    <br/>You must check again to see if the warranty period start date is correct before proceeding with the completion process.
    :::
1. When Project Completion is selected, the button becomes active. The administrator clicks the Approve Project button after checking the project results.
    :::warning
     You can change the warranty period start date in the pop-up window that appears when you click the Complete button.
    <br/>You must check again to see if the warranty period start date is correct before proceeding with the completion process.
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
    - [Important] If you check the box and write a comment, an email will be sent to the people registered in the project.
    :::
1. Use this if you need to cancel a project. The button will be disabled once the installation and commissioning tasks are complete.
1. You can select your favorites.
</ValidateTextByToken>





