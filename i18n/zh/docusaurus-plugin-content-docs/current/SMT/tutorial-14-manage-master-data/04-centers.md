---
sidebar_position: 2
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import filterList from "./img/002.png";
import searchList from "./img/017.png";
import tableFilter from "./img/006.png";
import createLabor from "./img/013.png";
import filter1 from "./img/056.png";
import filter2 from "./img/057.png";
import filter3 from "./img/058.png";
import filter4 from "./img/059.png";
import table1 from "./img/060.png";
import table2 from "./img/061.png";
import popup1 from "./img/064.png";
import popup2 from "./img/066.png";
import popup3 from "./img/070.png";
import popup4 from "./img/074.png";

# Center

This guide provides guidance on registering and managing service providers, such as agencies and corporations, as a center.

<ValidateTextByToken dispTargetViewer={true} dispCaution={false} validTokenList={['head', 'branch']}>

## List Page
![030](./img/030.png)
1. Click the **Standard Information** menu.
1. Click the **Center** menu to display a list of centers.
1. Use [**List Filtering**](#list-filtering) to display only center that meet specific criteria.
1. You can **Transfer** assets managed by a selected center to another center.<br/>This menu is currently being prepared for opening.
1. You can [**Link Center Codes**](#center-connection) for multiple center.
1. You can [**Search**](#search) to search for desired data.
1. You can [**Create a New Center**](#center-registration).
1. You can [**Register Multiple Filters**](#advanced-search) to search for data.
1. You can [Excel export](#excel-export), [Table Management](#table-management), and **delete** center information.
1. Click [**Center Company Code**](#detail-page) to view detailed center information.
</ValidateTextByToken>
<br/>
<br/>


### List Filtering
:::tip
Here's how to filter by user/department or by recent entries.
:::
![085](./img/085.png)
1. Select your desired filtering method. The corresponding list will appear immediately after selection.
<br/>
<br/>

<ValidateTextByToken dispTargetViewer={true} dispCaution={false} validTokenList={['head', 'branch']}>

### Search
:::tip
Guide to table search methods.
:::
<div><img src={filter1} width="45%" alt="056" /></div>

1. **Select** a search filter and then search.
<br/>
<br/>

### Advanced Search
:::tip
Here's how to apply **multiple** search filters.
:::
![086](./img/086.png)
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

### Excel Export
:::tip
Here's how to output a list to Excel.
:::
<div><img src={filter3} width="70%" alt="058" /></div>

1. Click the Excel Output button.
<br/>
<br/>

<div><img src={filter4} width="50%" alt="059" /></div>

1. Select **Output Options**.
1. Click the **OK** button, then access the [**System Management > Excel Download**](/SMT/tutorial-12-system-management/03-export-data.md) menu to download the Excel file.
<br/>
<br/>
 
### Table Management
:::tip
This guide explains how to display columns, change their order, and change the columns that are displayed.
:::
<div><img src={table1} width="70%" alt="060" /></div>

1. **테이블관리**를 클릭하여 테이블에 보여질 항목 및 순서를 변경할 수 있습니다. 
<br/>
<br/>

<div><img src={table2} width="50%" alt="061" /></div>

1. Click the toggle buttons for the items you want to appear in the table so they turn blue.
1. You can drag the list icons to change the column positions.
1. Click **Close** to change the table to reflect the selected content.
<br/>
<br/>

## Center Registration
:::warning
To register a center, you must first register as a vendor.
When registering a new center, please ensure that no centers are already registered to avoid duplicate registrations.
:::

![087](./img/087.png)
1. Click the **+** button.
<br/>
<br/>

![088](./img/088.png)
1. Select the **Company Name** you wish to register.
    :::info
    When you select a company name, the information entered as the client company will be automatically filled in.
    :::
1. Select the **Parent Company** of the center.
1. Select the **Material Request Center**.
1. Select the **Storage Location** for the materials.
1. Select the **Type** of the center. The options for the type are as follows:
    :::tip Type List
        - Headquarters
        - Corporation
        - Agency
        - Agency Base
    :::
1. Enter other center information. <br/>The information entered when selecting a company will be automatically filled in. You can edit it manually if necessary.
1. After completing the information, click the **Save** button to complete center registration.
<br/>
<br/>

## Center Connection
:::tip
**If you have multiple identical centers registered**, here's how to **group them into a single center**.**
<br/>This prevents scattered order history and assets from being registered in multiple centers.
<br/>

- If you have centers with similar names and different codes, you can use the **Grouping** feature to group them. In this case, the following service data generated based on each code will be displayed in a consolidated manner.
    - Sales Orders
    - Activity History
        - Service History
        - Parts Order History
        - VOCs, etc.
    - Inquiry History
    - CRM User and Customer Service Representative Accounts
    - Center Address
    - Managed Assets
:::

### On the list page
![084](./img/084.png)
1. **Check** multiple centers that require a bundle.
1. Click the **copy icon**. 
<br/>
<br/>

<div><img src={popup2} width="45%" alt="066" /></div>
1. Click the **Confirm** button to complete the customer connection.
<br/>
<br/>

### On the details page
![069](./img/069.png)
1. Click the **Add** button to select the client you want to connect to. 
<br/>
<br/>
<div><img src={popup3} width="45%" alt="070" /></div>

1. Search for the client you want to connect to.
1. Confirm the search results are correct, then click the **Save** button.
:::tip
![071](./img/071.png)
Once the client connection is complete, the screen will appear as shown above.
:::
<br/>
<br/>

### Changing the Representative Company
:::info
Here's how to change the representative company among the linked companies.
:::
![072](./img/072.png)
1. Click the **Edit** button.
<br/>
<br/>

![073](./img/073.png)
1. **Select** the representative company.
<br/>
<br/>

<div><img src={popup4} width="45%" alt="074" /></div>

1. Click the **Change** button.
<br/>
<br/>

![075](./img/075.png)
1. Click the **Complete** button.
::info
![076](./img/076.png)
The designated customer company will be displayed as shown in the image above.
::

<br/>
<br/>

## Detail Page
### Basic Information
![034](./img/034.png)

1. If there are any changes, enter them and click the **Edit** button to save.
    :::info
    - Select a **parent company** from the center list to set it.
        - Service centers have a tree structure with hierarchies.
        - Service assets from sub-centers are shared with the parent center.
    - Set a **parent center dedicated to service parts orders** that will process service parts orders.
    - Specify or add a **service parts warehouse number** for the selected center.<br/>Inventory quantities will be managed based on the service warehouse number set here.
        - Selecting a storage location from the list: Available inventory quantities in the internal system will be automatically synced.
        - Entering the location manually: Inventory quantities will be managed directly in the CRM system.
    - Select a **company type**. You can choose from **headquarters, corporation, agency, branch office, or customer company**.<br/>For agencies with regional branches, you can register and use the following: 
        - Dooly Agency (HQ) **[Agency]** <br/>
            └ Dooly Agency (Central) **[Base]** <br/>
            └ Dooly Agency (Southern) **[Base]**
    :::
1. You can register services, VOCs, etc. in CRM only if **Activate** is checked.
1. If **Service Satisfaction Survey Center** is checked, a service satisfaction survey will be automatically sent to customers when services such as installation and test runs are performed at the center.
<br/>
<br/>

### Additional Information - Address
:::warning
    If you access a domain in China, the map UI will not be displayed.
:::
![089](./img/089.png)
1. Clicking the **Address** tab in Additional Information will display the address information registered with your company.
    :::tip
    The registered channel of the address is displayed as a blue box.
    :::
1. Click the **Add** button to add a new customer address.
    :::info How to Add a New Customer Address
    ![080](./img/080.png)
    1. Add the **Country** of the address you wish to register.
    1. Enter the **Address Name**.
    1. Click the **Find** button to search for an address.
    1. After searching or manually entering the address, click the **Search** button to view the map.
    1. Click the **Save** button to complete address registration.
    :::
<br/>
<br/>

### Additional Information - User
:::info
    Displays the CRM account information of users registered under the selected client company.
:::
![037](./img/037.png)
1. Click the **User** tab in Additional Information to display user information for centers registered in the CRM.
1. You can use the filter to search for users.
1. The administrator of the center can create a user account by clicking the **+** button.
1. Click the **gear** button to **delete** users or **manage tables**.
1. You can **grant** permissions for each user. To grant permissions, click the toggle button so it turns **blue**.
    ::tip Permission Types
    - Price Inquiry Permission
    - Inventory Inquiry Permission
    - Supplier Inquiry Permission
    - Sales History Inquiry Permission
    :::
<br/>
<br/>

### Additional Information - Organization Information
:::info
This menu sets the sales and purchase price tables for service parts.
:::
![043](./img/043.png)
1. Click the **Organization Information** tab in Additional Information.
1. Click the **+** button to add organization information.
1. You can view and edit the organization information details page.
<br/>
<br/>

#### Adding and Editing Organization Information
![044](./img/044.png)
:::info
When registering new organization information, all items below must be entered.
- Sales Org.
    - K120: All organizations that transact in USD, including Hanwha Precision Machinery's headquarters
    - K603: All organizations that transact in CNY, including Hanwha Precision Machinery's Chinese subsidiary
- Organization Information
    - K3: Industrial Equipment Division
    - KB: Machine Tool Division
    - KD: Semiconductor Equipment Division
- Distribution Channel
    - 11: Domestic
    - 21: Export
- Price List
    - Select based on the service department's specific criteria.
- Selling Price Level: This is the price level the selected center uses when selling service parts. Select from the Price List.
- Purchase Price Level: This is the price level the selected center uses when purchasing service parts from the Material Approval Center. Select from the Price List.
:::
1. **Selling Price Level** can be modified.
1. **Purchase level** can be modified.
1. **Currency** can be modified.
<br/>
<br/>

### Additional Information - Inventory Locations
:::info
You can add and manage inventory locations in the center.
:::
![090](./img/090.png)
1. Click the **Inventory Locations** tab in Additional Information.
1. To add a new inventory location, click the **+** button.
1. Click the **gear** button to delete an inventory location. 
<br/>
<br/>

### Additional Information - Sales Orders
:::info
Displays a list of sales orders issued to the selected customer.
:::

![045](./img/045.png)
1. Click the **Sales Orders** tab in Additional Information.
1. You can search by sales order number.
1. You can access the sales order details page.
    :::warning
    You need special permission to access the sales order details page.
    :::
</ValidateTextByToken>
<br/>
<br/>

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'seller', 'agent']}>

### Additional Information - Assets
:::info
Displays a list of sales orders issued to the selected customer.
:::
![046](./img/046.png)
1. Click the **Assets** tab in Additional Information.
1. You can search by asset information, such as S/N. <br/>Clicking S/N will take you to the asset details page.
1. You can add assets held by the center or owned by a customer under management.
1. Click the **gear** button to edit the items or order displayed in the table.
<br/>
<br/>

### Additional Information - Attachments
![091](./img/091.png)
1. Click the **Attachments** tab in the Additional Information section. You can attach and view related files.
1. Click the **+** button to add attachments.
</ValidateTextByToken>
<br/>
<br/>
<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head']}>

### Additional Information - Company Hierarchy
![047](./img/047.png)
1. Click the **Company Hierarchy** tab in Additional Information.
1. You can view the hierarchy there.
</ValidateTextByToken>
<br/>
<br/>
<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'seller', 'agent']}>

### Additional Information - Clients
![048](./img/048.png)
1. Click the **Clients** tab in the Additional Information section to display the following clients:
    - Clients managed by the selected center
    - Clients managed by centers below the selected center
1. Click the **+** button to add a client.
<br/>
<br/>

### Additional Information - Permissions
:::info
A list of permissions available within the center is displayed.
:::
![049](./img/049.png)
1. Click the **Permissions** tab in Additional Information.
1. If permissions need to be changed, click the **Change Permissions** button to make the changes.
    ::warning
    **Change Permissions** is only accessible to those with **Permission Management** (system administrators).
    :::
<br/>
<br/>

### Additional Information - Departments
![050](./img/050.png)
You can manage "departments" to efficiently perform service tasks.
1. Click the **Departments** tab in Additional Information.
1. Click the **+** button to add a department.
<br/>
<br/>

### Additional Information - Activities
![092](./img/092.png)
1. Click the **Activities** tab in Additional Information to view updated information for the center.
<br/>
<br/>

### Additional Information - Change History
![093](./img/093.png)
1. Click the **Change History** tab in Additional Information. You can view changes made to the center.
<br/>
<br/>

### Additional Information - Items
![094](./img/094.png)
1. Click the **Items** tab in Additional Information. You can register and use item groups, such as technical fees or basic dispatch fees.
1. To add an item group, click the **+** button.
</ValidateTextByToken>
