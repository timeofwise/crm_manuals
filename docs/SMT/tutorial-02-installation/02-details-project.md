---
sidebar_position: 2
---

import ValidateTextByToken from "/src/utils/getQueryString.js";
import StrongTextParser from "/src/utils/textParser.js";
import text from "/src/locale/ko/SMT/tutorial-02-installation/02-details-project.json";

# 프로젝트 상세

고객사에 인도된 자산의 설치시운전 작업을 수행하기 위한 절차를 안내합니다.

<ValidateTextByToken dispTargetViewer={true} dispCaution={false} validTokenList={['head', 'branch', 'agent']}></ValidateTextByToken>

## 프로젝트 목록

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![001](./img/001.png)

1. <StrongTextParser text={text.list01} />
1. <StrongTextParser text={text.list02} />

</ValidateTextByToken>

## 프로젝트 상세 진입

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![005](./img/005.png)

1. <StrongTextParser text={text.details01} />

</ValidateTextByToken>

## 상세 - 개요

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![006](./img/006.png)

1. <StrongTextParser text={text.overview01} />
1. <StrongTextParser text={text.overview02} />
    :::warning 
    보증기간 관리는 [**다음단계**](#자산추가)의 설치 대상 자산을 추가한 후 활용이 가능합니다.
    :::
- 각 메뉴에 대한 설명은 [**공통사항**](#상세---공통사항) 을 참조하시기 바랍니다.



</ValidateTextByToken>

### 자산추가

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![007](./img/007.png)

1. <StrongTextParser text={text.overviewAddAsset01} />
    :::warning
    <StrongTextParser text={text.overviewAddAsset02} />
    :::

</ValidateTextByToken>

#### 판매주문으로 추가하기

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch']}>

![008](./img/008.png)

1. <StrongTextParser text={text.overviewAddAssetBySalesOrder01} />
1. <StrongTextParser text={text.overviewAddAssetBySalesOrder02} />
1. <StrongTextParser text={text.overviewAddAssetBySalesOrder03} />
1. <StrongTextParser text={text.overviewAddAssetBySalesOrder04} />
    - 여기에 추가된 자산은 [**판매주문으로 자산이 추가된 경우 납품목록 조회**](#판매주문으로-자산이-추가된-경우)와 같이 표시됩니다.

</ValidateTextByToken>

#### 자산목록에서 추가하기

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![009](./img/009.png)

1.  <StrongTextParser text={text.overviewAddAssetByAssetList01} />
    :::note
    <StrongTextParser text={text.overviewAddAssetByAssetList02} />
    :::
1. <StrongTextParser text={text.overviewAddAssetByAssetList03} />
1. <StrongTextParser text={text.overviewAddAssetByAssetList04} /><br/>
    ![010](./img/010.png)
1. <StrongTextParser text={text.overviewAddAssetByAssetList05} />
1. <StrongTextParser text={text.overviewAddAssetByAssetList06} />

</ValidateTextByToken>

#### 직접 등록하기

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![011](./img/011.png)

1. <StrongTextParser text={text.overviewAddAssetByDirect01} />
    :::danger
    <StrongTextParser text={text.overviewAddAssetByDirect02} />
    :::
1. <StrongTextParser text={text.overviewAddAssetByDirect03} />
1. <StrongTextParser text={text.overviewAddAssetByDirect04} /><br/>
    ![012](./img/012.png)
1. <StrongTextParser text={text.overviewAddAssetByDirect05} />
1. <StrongTextParser text={text.overviewAddAssetByDirect06} />

</ValidateTextByToken>

### 납품목록

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

<StrongTextParser text={text.serveList01} />

</ValidateTextByToken>

#### 판매주문으로 자산이 추가된 경우

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch']}>

<StrongTextParser text={text.serveListBySalesOrder01} />

![013](./img/013.png)

1. <StrongTextParser text={text.serveListBySalesOrder02} />
    :::info
    <StrongTextParser text={text.serveListBySalesOrder03} />
    :::
1. <StrongTextParser text={text.serveListBySalesOrder04} />
    :::info
    <StrongTextParser text={text.serveListBySalesOrder05} />
    :::
1. <StrongTextParser text={text.serveListBySalesOrder06} />
1. <StrongTextParser text={text.serveListBySalesOrder07} />

</ValidateTextByToken>

#### 보유자산목록에서 추가 또는 직접 자산을 등록한 경우

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![014](./img/014.png)

1. 이 경우에는 대기열이 존재하지 않습니다. 나머지는 [**판매주문으로 자산이 추가된 경우**](#판매주문으로-자산이-추가된-경우)와 동일한 프로세스를 따릅니다.

</ValidateTextByToken>

## 상세 - 프리미팅

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

설치시운전 작업 수행 전, 고객사와 사전 미팅을 수행하는 경우 사용합니다.

### 추가

![015](./img/015.png)

1. <StrongTextParser text={text.premeetingAdd01} />
1. <StrongTextParser text={text.premeetingAdd02} />
1. <StrongTextParser text={text.premeetingAdd03} />
1. <StrongTextParser text={text.premeetingAdd04} />
1. <StrongTextParser text={text.premeetingAdd05} />


### 소요시간 등록

![016](./img/016.png)

1. 미팅에 소요된 시간 입력을 위해(비용 정산용) **+** 버튼을 누릅니다.
1. 엔지니어, 작업 구분, 작업 시간을 입력한 뒤 **저장 후 닫기**를 누릅니다.
    :::info
    **저장 후 계속 입력** 버튼은 임시저장 버튼으로 저장후에도 팝업창이 유지됩니다. 
    :::


### 저장

![017](./img/017.png)

1. 추가된 일정을 스케줄에 등록하려면 **추가한 소요시간을 캘린더에 반영하겠습니다.** 를 체크합니다. 센터 내 동료들에게 해당 스케줄이 보이게됩니다.
1. 프리미팅 결과 보고서를 첨부합니다.
1. **저장**을 눌러 미팅 내용을 저장합니다.

</ValidateTextByToken>

## 상세 - 설치환경 체크 (for HTAA)

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['branch']}>

![018](./img/018.png)

1. **설치환경 체크**에 대한 관리가 필요한 경우 사용하는 탭 입니다. (예 : 미주 법인)
1. 고객이 필요한 유틸리티 사양을 제공하고 점검이 끝난 경우 체크합니다.
1. 고객과 주고받은 자료를 첨부합니다. (예 : 점검시트지 등)

</ValidateTextByToken>

## 상세 - 업그레이드 (for HTAA)

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['branch']}>

![019](./img/019.png)

1. <StrongTextParser text={text.upgrade01} />
1. <StrongTextParser text={text.upgrade02} />
    - <StrongTextParser text={text.upgrade03} />
    - <StrongTextParser text={text.upgrade04} />
1. <StrongTextParser text={text.upgrade05} />
1. <StrongTextParser text={text.upgrade06} />

</ValidateTextByToken>

## 상세 - 출하 (for HTAA)

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['branch']}>

![020](./img/020.png)

1. <StrongTextParser text={text.packing01} />
1. <StrongTextParser text={text.packing02} />

### 패킹리스트 & 인보이스 생성 (1/3) (for HTAA)

![021](./img/021.png)

1. <StrongTextParser text={text.step1Packing01} />

### 패킹리스트 & 인보이스 생성 (2/3) (for HTAA)

![022](./img/022.png)

1. <StrongTextParser text={text.step2Packing01} />
1. <StrongTextParser text={text.step2Packing02} />
1. <StrongTextParser text={text.step2Packing03} />
1. <StrongTextParser text={text.step2Packing04} />
1. <StrongTextParser text={text.step2Packing05} />

### 패킹리스트 & 인보이스 생성 (3/3) (for HTAA)

![023](./img/023.png)

1. <StrongTextParser text={text.step3Packing01} />
1. <StrongTextParser text={text.step3Packing02} />

</ValidateTextByToken>

## 상세 - 설치시운전

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![024](./img/024.png)

1. <StrongTextParser text={text.installation01} />
1. <StrongTextParser text={text.installation02} />
1. <StrongTextParser text={text.installation03} />
    - <StrongTextParser text={text.installation04} link="소요시간 등록" />

### 설치대상 선택

![025](./img/025.png)

1. <StrongTextParser text={text.installation05} />
1. <StrongTextParser text={text.installation06} />
- <StrongTextParser text={text.installation07} link="체크리스트 작성" />


### 사용부품 추가 (@HTAA)


![026](./img/026.png)

1. <StrongTextParser text={text.installationAddParts01} />
1. <StrongTextParser text={text.installationAddParts02} />


### 체크리스트 작성

![027](./img/027.png)

1. <StrongTextParser text={text.installationChecklist01} />

### 고객 검수 (@HTS)

![028](./img/028.png)

1. <StrongTextParser text={text.installationInspection01} />
1. <StrongTextParser text={text.installationInspection02} />
1. <StrongTextParser text={text.installationInspection03} />
1. <StrongTextParser text={text.installationInspection04} />
1. <StrongTextParser text={text.installationInspection05} />
    :::note
    <StrongTextParser text={text.installationInspection06} />
    :::

</ValidateTextByToken>

## 상세 - 공통사항

<ValidateTextByToken dispTargetViewer={false} dispCaution={true} validTokenList={['head', 'branch', 'agent']}>

![029](./img/029.png)

1. <StrongTextParser text={text.common01} />
1. <StrongTextParser text={text.common02} />
    :::tip
    - <StrongTextParser text={text.common03} />
    :::
</ValidateTextByToken>
