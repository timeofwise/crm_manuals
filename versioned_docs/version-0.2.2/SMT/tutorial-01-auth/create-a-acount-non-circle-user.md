---
sidebar_position: 2
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import StrongTextParser from "/src/utils/textParser.js";
import text from "/src/locale/ko/SMT/tutorial-01-auth/create-a-acount-non-circle-user.json";

# CRM 계정 생성 (대리점)
**사외망**에서 CRM 사용 계정을 생성하기 위한 절차를 안내합니다.

:::danger
<StrongTextParser text={text.warning} />
:::
<ValidateTextByToken dispTargetViewer={true} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

## 개요
<StrongTextParser text={text.overview01} />
:::warning 
   - <StrongTextParser text={text.overview02} />
   - <StrongTextParser text={text.overview03} />
:::
<br/>
<br/>

## 서비스 대리점 사용자 계정 생성
:::info
<StrongTextParser text={text.createAgentAccount01} />
:::
<br/>
<br/>

### 페이지 이동
![010](./img/010.png)
1. <StrongTextParser text={text.createAgentAccount02} />
2. <StrongTextParser text={text.createAgentAccount03} />
<br/>
<br/>

![011](./img/011.png)
1. <StrongTextParser text={text.createAgentAccount04} />
2. <StrongTextParser text={text.createAgentAccount05} />
3. <StrongTextParser text={text.createAgentAccount06} />
<br/>
<br/>

### 사용자 추가 (1/3)
![012](./img/012.png)
1. <StrongTextParser text={text.step1AddUser01} />
   - <StrongTextParser text={text.step1AddUser02} />
   - <StrongTextParser text={text.step1AddUser03} />
   - <StrongTextParser text={text.step1AddUser04} />
   - <StrongTextParser text={text.step1AddUser05} />
1. <StrongTextParser text={text.step1AddUser06} />
   :::note
   <StrongTextParser text={text.step1AddUser07} />
   :::
1. <StrongTextParser text={text.step1AddUser08} />
   :::tip
   <StrongTextParser text={text.step1AddUser09} />
   :::
<br/>
<br/>

### 사용자 추가 (1/3) - 부서 등록
![013](./img/013.png)
1. <StrongTextParser text={text.step1AddDept01} />
1. <StrongTextParser text={text.step1AddDept02} />
<br/>
<br/>

### 사용자 추가 (2/3)
![037](./img/037.png)
1. <StrongTextParser text={text.step2AddUser01} />
1. 할당할 권한을 선택합니다. 
   :::warning
      - <StrongTextParser text={text.step2AddUser09} />
      - <StrongTextParser text={text.step2AddUser10} />
   :::
1. 선택된 권한을 초기화 할 수 있습니다.
1. <StrongTextParser text={text.step2AddUser11} />
<br/>
<br/>

### 사용자 추가 (3/3)
![038](./img/038.png)
- <StrongTextParser text={text.step3AddUser01} />
-  <StrongTextParser text={text.step3AddUser02} />
   :::danger
   <StrongTextParser text={text.step3AddUser03} />
   :::
1. <StrongTextParser text={text.step3AddUser04} />
   - <StrongTextParser text={text.step3AddUser05} />
   - <StrongTextParser text={text.step3AddUser06} />
<br/>
<br/>

### 사용자 추가인증 (1/2)
![016](./img/016.png)
1. <StrongTextParser text={text.step1AdditionalAuth01} />
   :::tip
   <StrongTextParser text={text.step1AdditionalAuth02} />
   :::
1. <StrongTextParser text={text.step1AdditionalAuth03} />
   :::note
   <StrongTextParser text={text.step1AdditionalAuth04} />
   :::
<br/>
<br/>

### 사용자 추가인증 (2/2)
![017](./img/017.png)
1. <StrongTextParser text={text.step2AdditionalAuth01} />
1. <StrongTextParser text={text.step2AdditionalAuth02} />
1. <StrongTextParser text={text.step2AdditionalAuth03} />
1. <StrongTextParser text={text.step2AdditionalAuth04} />
1. <StrongTextParser text={text.step2AdditionalAuth05} />
   :::note
   <StrongTextParser text={text.step2AdditionalAuth06} />
   :::
1. <StrongTextParser text={text.step2AdditionalAuth07} />
1. <StrongTextParser text={text.step2AdditionalAuth08} />
   :::note
   - <StrongTextParser text={text.step2AdditionalAuth09} />
   - <StrongTextParser text={text.step2AdditionalAuth10} />
   - <StrongTextParser text={text.step2AdditionalAuth11} />
   :::
1. <StrongTextParser text={text.step2AdditionalAuth12} />
<br/>
<br/>

![018](./img/018.png)
- <StrongTextParser text={text.finalConfirm01} />
   :::tip
   <StrongTextParser text={text.finalConfirm02} />
   :::

## 휴면 계정 해제 방법
:::warning
로그인 시도 중 비밀번호를 5회 잘못 입력할 경우, 사용자 계정은 자동으로 휴면 계정으로 전환됩니다. 
이는 계정 보안을 강화하고 무단 접근을 방지하기 위한 조치입니다. 
<br/>계정이 휴면 상태로 전환된 경우, 정상적인 서비스 이용을 위해 반드시 **비밀번호 찾기 절차를 통해 휴면 계정 해제**를 진행해야 합니다.
:::

![019](./img/019.png)

1. 로그인 화면에서 **비밀번호 찾기** 버튼을 눌러 비밀번호를 초기화합니다.
<br/>
<br/>


</ValidateTextByToken>
