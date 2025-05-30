---
sidebar_position: 1
---

import qrImage from "./img/009.png";
import ValidateTextByToken from "/src/utils/getQueryString.js";
import StrongTextParser from "/src/utils/textParser.js";
import text from "/src/locale/en/SMT/tutorial-01-auth/create-a-acount-circle-user.json";


# Create a CRM Account (Circle User)

<!-- 메뉴단에서 번역이 안되므로 여기 하드코딩해야 함 #가 달린 헤더와 함께 -->
This is a guide to creating a CRM account in the intranet.


<ValidateTextByToken dispTargetViewer={true} validTokenList={['head', 'branch']}>

## System Access Path

![001](./img/001.png)

1. <StrongTextParser text={text.systemAccessPath01} />
- <StrongTextParser text={text.systemAccessPath02} />
  - <StrongTextParser text={text.systemAccessPath03} />
- <StrongTextParser text={text.systemAccessPath04} />
  - <StrongTextParser text={text.systemAccessPath05} /><br/> <img src={qrImage} alt="009" width="100px" height="100px"/>

## Step 1 of Account Creation

![002](./img/002.png)

1. <StrongTextParser text={text.step1AccountCreation01} />
1. <StrongTextParser text={text.step1AccountCreation02} /><br/>  ![004](./img/004.png) ![003](./img/003.png)
    1. <StrongTextParser text={text.step1AccountCreation03} />
    2. <StrongTextParser text={text.step1AccountCreation04} />
1. <StrongTextParser text={text.step1AccountCreation05} />
    :::note
    - <StrongTextParser text={text.step1AccountCreation06} />
    - <StrongTextParser text={text.step1AccountCreation07} />
    - <StrongTextParser text={text.step1AccountCreation08} />
    :::
4. <StrongTextParser text={text.step1AccountCreation09} />

## Step 2 of Account Creation

<StrongTextParser text={text.step2AccountCreation01} />

![005](./img/005.png)

:::tip 
  - <StrongTextParser text={text.step2AccountCreation011} />
:::

1. <StrongTextParser text={text.step2AccountCreation02} />
1. <StrongTextParser text={text.step2AccountCreation03} />
1. <StrongTextParser text={text.step2AccountCreation04} />
1. <StrongTextParser text={text.step2AccountCreation05} />
1. <StrongTextParser text={text.step2AccountCreation06} />
1. <StrongTextParser text={text.step2AccountCreation07} />
1. <StrongTextParser text={text.step2AccountCreation08} />
1. <StrongTextParser text={text.step2AccountCreation09} />

## Step 3 of Account Creation

<StrongTextParser text={text.step3AccountCreation01} />

![006](./img/006.png)

1. <StrongTextParser text={text.step3AccountCreation02} />
    1. <StrongTextParser text={text.step3AccountCreation03} />
    2. <StrongTextParser text={text.step3AccountCreation04} />

## Step 4 of Account Creation

<StrongTextParser text={text.step4AccountCreation01} />

![007](./img/007.png)

1. <StrongTextParser text={text.step4AccountCreation02} />
1. <StrongTextParser text={text.step4AccountCreation03} />
1. <StrongTextParser text={text.step4AccountCreation04} />
1. <StrongTextParser text={text.step4AccountCreation05} />

## Account Creation Completed

![008](./img/008.png)

1. <StrongTextParser text={text.step5AccountCreation01} />
1. <StrongTextParser text={text.step5AccountCreation02} />
1. <StrongTextParser text={text.step5AccountCreation03} />

</ValidateTextByToken>