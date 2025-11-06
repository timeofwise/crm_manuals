---
sidebar_position: 5
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import filterList from "./img/002.png";
import searchList from "./img/053.png";
import tableFilter from "./img/006.png";
import createLabor from "./img/013.png";
import filter1 from "./img/097.png";
import filter2 from "./img/057.png";
import filter3 from "./img/099.png";
import filter4 from "./img/059.png";
import table1 from "./img/101.png";
import table2 from "./img/061.png";
import popup1 from "./img/064.png";

# Assets

Guide to asset data management.
<ValidateTextByToken dispTargetViewer={true} dispCaution={true} validTokenList={['head', 'branch', 'seller', 'agent']}>

## List Page
![052](./img/052.png)
1. Click the **Standard Information** menu.
1. Click the **Asset** menu to display a list of asset data.
    :::tip
    Agency users can also **check other agencies' assets with key information masked** from the list.
    :::
1. If there's a request to change the client or center that owns the asset, it will appear in [**Transfer Requested Assets**](#Asset-Transfer) and require administrator approval.
1. Use **List Filtering** to display only clients that meet certain criteria.
1. This is the **Asset Transfer** button, used when a change is required for the client or center that owns the asset.
1. (Agency only) This button allows you to **show or hide masked assets from other agencies**.
1. This is the **Bulk Upload Assets** button. You can upload multiple assets at once using Excel.
1. Enter a **search term** to search for the data you want.
1. You can **register a new asset**.
1. You can **register multiple filters** to search data.
1. You can **export to Excel**, **manage tables**, or **delete** assets.
1. Click the S/N to view asset details.
    :::warning Note for dealer users
    Detailed information is not available for **other dealers' assets**, as key information has been masked.
    :::

### List Filtering
:::tip
Here's how to filter by user/department or by recent entries.
:::
![096](./img/096.png)
1. Select your desired filtering method. The corresponding list will appear immediately after selection.
<br/>
<br/>

### Search
:::tip
Here's how to search tables.
:::
<div><img src={filter1} width="45%" alt="097" /></div>

1. Select a search filter and then search. 
<br/>
<br/>

### Advanced Search
:::tip
Here's how to apply **multiple** search filters.
:::
![098](./img/098.png)
1. Click the **Filter button**.
<br/>
<br/>

<div><img src={filter2} width="70%" alt="057" /></div>

1. Select a filter.
1. Enter a search term.
1. Click the **+** button to add search terms.
1. Click the **Search** button to view the results.
<br/>
<br/>

### Excel Output
:::tip
Here's how to export a list to Excel.
:::
<div><img src={filter3} width="50%" alt="099" /></div>

1. Click the Export to Excel button.
<br/>
<br/>

<div><img src={filter4} width="50%" alt="059" /></div>

1. Select **Output Options**.
1. Click the **OK** button, then access the [**System Management > Excel Download**](/SMT/tutorial-12-system-management/03-export-data.md) menu to download the Excel file.
<br/>
<br/>
 
### Table Management
:::tip
This guide explains how to display columns, change the columns displayed, and change their order.
:::

<div><img src={table1} width="50%" alt="101" /></div>

1. Click **Table Management** to change the items and order displayed in the table.
<br/>
<br/>

<div><img src={table2} width="50%" alt="061" /></div>

1. Click the toggle button for the items you want to appear in the table so that they turn blue.
1. You can drag the list icons to change the column positions.
1. Click **Close** to change the table to reflect the selected content.
<br/>
<br/>

### Delete
:::warning
Here are instructions for deleting your client account.
<br/>Please proceed with caution, as deletion is **difficult to recover**.
:::

![102](./img/102.png)
1. Click the **gear** button.
1. Click the **delete** button.
<br/>
<br/>
<div><img src={popup1} width="50%" alt="064" /></div>

1. Click the **Delete** button in the pop-up window to delete the customer.
<br/>
<br/>

## Asset Transfer
:::info
If a client or center holding assets requires a transfer, you can perform an **asset transfer**.
Current asset transfers are reflected in the system within 30 minutes. Future asset transfers will be completed upon approval from each business unit.
:::
### Asset Transfer Method
![103](./img/103.png)
1. **Check** the assets you wish to transfer.
1. Click the **Transfer Assets** button.
<br/>
<br/>

![104](./img/104.png)
Review the asset transfer information. If you have additional assets to transfer, click the **+** button to add more assets.
<br/>
<br/>

![105](./img/105.png)
1. Select the **customer or center to which you wish to transfer**.
<br/>
<br/>

![106](./img/106.png)
1. After confirming your selection, click the **Next** button.
<br/>
<br/>

![107](./img/107.png)
1. After finalizing the details, click the **Complete** button. <br/>The asset information will be updated within 30 minutes of completing the asset transfer.
<br/>
<br/>

## Asset Registration
### Single Item Registration
![108](./img/108.png)
1. Click the **+** button.
<br/>
<br/>

![109](./img/109.png)
1. Enter the S/N.
1. Click Select to select the **Product Name**.
1. Click Select to select the **Model**.
1. Select the **Customer**. The customer code will be automatically entered when selected.
1. Select the **Responsible Center**. The responsible center code will be automatically entered when selected.
1. Enter the **Warranty Period** (e.g., 12 months, 24 months) and **Warranty Start Date**. The warranty end date will be automatically entered.
1. Enter the **Manufacturing Date** of the asset.
1. Enter the **Shipping Date**.
1. Enter the **Installation Date**.
1. After entering the asset information, click the **Save** button.
<br/>
<br/>

### Bulk Asset Registration
:::tip
Here's how to bulk register a large number of assets.
:::
![110](./img/110.png)
1. Click the **Upload Assets** button.
:::info Upload Method
**Download the Excel template** and enter your asset information in the format. And upload the Excel file containing your asset information.
:::
<br/>
<br/>

## Detail Page
### Basic Information
![112](./img/112.png)
:::info
The default values ​​entered when registering the asset are displayed, and you can additionally enter information for items 2-6.
:::
1. The **Supplier** information entered in the SO is displayed.
1. You can enter the **Installation Location** of the asset.
1. Enter the detailed **Options** of the asset.
1. Enter any additional information in **Remarks**.
1. Enter **Special Notes** for the asset.
1. You can manage the **Used Status** by checking the **Used Status**, as if the asset had been transferred and become a used product.
1. Click the [**Transfer**](#asset-transfer) button to transfer the asset.
1. If there are any changes, click the **Save** button to save the changes.
<br/>
<br/>

### Additional Information
![113](./img/113.png)
Additional information about the asset appears.
- Additional Information: You can manually enter and manage the previous information for SW, MMI, RD, Vision, Opti, IT, and Basic IT.
- Ancillary Assets: You can view information such as the S/N, model name, and product code for the corresponding asset's ancillary assets.
- Service History: You can view the service history performed on the corresponding asset and check the details.
- BS/Retrofit History: You can view the BS/Retrofit activity history and check the details.
- Warranty Period Management: If the warranty period needs to be modified, click the **+** button on the Warranty Period Management tab to edit it. When modifying the warranty period, you must provide a detailed **reason for the warranty period change**.
- Design Change History: You can view the design change history related to the asset.
- VOC History: View and check detailed VOC history related to an asset.
- Certificate Issuance History: View the issuance history of certificates, such as warranties (Machine Tool Division only).
- Service Technical Data: View service technical data related to the asset, if available.
- Transfer History: View any asset transfer history.
</ValidateTextByToken>