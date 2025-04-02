
<div align="center">
  <img src="./src/assets/image.png" alt="Main" style="border-radius: 10px;"/>
</div>

<br/>

---

## ✍️ 프로젝트 개요

- **프로젝트명:** 자료요정 - 스크린샷 정리 자동화 서비스
- **프로젝트 기간:** 2025.03.25 ~ 2025.03.29
- **프로젝트 형태:** 단국대학교 해커톤 프로젝트
- **목표:** 사용자의 스크린샷 이미지 속 텍스트 정보를 자동으로 추출, 요약, 분류하여 <br> 효율적인 정보 관리와 접근성 향상을 실현하는 스마트 정리 시스템 구축
- **수상 내역**: 🥇 **대상 수상 (2025 제로톤)** 
- **주요 타겟 사용자:** 대학생, 직장인, 자영업자 

---

## ✍️ 프로젝트 소개

### 프로젝트 배경
**자료요정**은 많은 사용자들이 스마트폰으로 강의자료, 회의 내용, 설정 정보 등을 스크린샷으로 저장하지만,
나중에 다시 확인하려고 할 때 어떤 내용인지 기억하기 어렵고, 정리되지 않아 찾기 힘든 문제가 발생합니다.
이를 해결하기 위해, 스크린샷 이미지 안의 텍스트를 자동으로 추출하고,
OpenAI를 활용해 요약 + 카테고리 분류 + 폴더 저장까지 자동화하는 서비스를 기획하게 되었습니다.

기존의 스크린샷 정리 방식은 다음과 같은 문제점을 가지고 있었습니다:

1. **스크린샷을 많이 찍지만 정리가 되지 않음** 

2. **시간이 지나면 이미지 내용이 무엇이었는지 기억나지 않음** 

3. **중요한 정보가 이미지 속에 숨어 있음** 



---

## 🚀 프로젝트 목표

1. **스크린샷 데이터 자동 정리로 업무 효율성 향상**
- OCR 및 GPT 요약 기능으로 사용자의 수작업을 줄임

2. **사용자 중심의 직관적 정보 탐색 제공** 
- 키워드 검색, 자동 분류, 메모 기능 등으로 정보 접근 용이
3. **다양한 환경과 사용 사례에 대한 확장성 확보** 
- 대학생, 직장인, 자영업자 등 다양한 사용자 타깃
---

## 📌 주요 기능

<table>
  <tr>
    <th align="center">메인 페이지</th>
    <th align="center">폴더 페이지</th>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/메인페이지.png" width="400"/></td>
    <td align="center"><img src="./src/assets/폴더페이지.png" width="400"/></td>
  </tr>
</table>

<table>
  <tr>
    <th align="center">GPT 요약 및 자동 카테고리 분류 기능</th>
    <th align="center">Onboarding (주요 기능 설명)</th>
  </tr>
  <tr>
    <td align="center"><img src="./src/assets/자동카테고리.png" width="400"/></td>
    <td align="center"><img src="./src/assets/Onboarding.png" width="400"/></td>
  </tr>
</table>
 
---

## 🧑‍💻 팀원 소개

<table style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 20%;">이름</th>
      <th style="width: 20%;">포지션</th>
      <th style="width: 60%;">역할</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 20%;">김태우</td>
      <td style="width: 20%;">Project Manager</td>
      <td style="width: 60%;">팀 총괄, React Native 기반 프론트엔드 개발, API 연동, UI·UX 구현&디자인</td>
    </tr>
    <tr>
      <td style="width: 20%;">송유선</td>
      <td style="width: 20%;">Product Planner</td>
      <td style="width: 60%;">서비스 기획, 아이디어 구상, 기획서 작성, 화면 흐름도 설계, UI·UX 구현&디자인, 발표 자료 제작</td>
    </tr>
    <tr>
      <td style="width: 20%;">심연호</td>
      <td style="width: 20%;">Back-end Developer</td>
      <td style="width: 60%;">DB 설계, API 개발, AWS RDS 기반 DB 운영, OpenAI 연동</td>
    </tr>
    <tr>
      <td style="width: 20%;">정윤성</td>
      <td style="width: 20%;">Back-end Developer</td>
      <td style="width: 60%;">서버 구현, API 연동, 로직 처리, EC2 서버 배포, CI/CD 환경 구성</td>
    </tr>
  </tbody>
</table>



---

## ⚙️ 기술 스택

<table>
  <thead>
    <tr>
      <th>분류</th>
      <th>기술 스택</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>기획</td>
      <td>
        <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>디자인</td>
      <td>
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white"/>
      <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=flat&logo=adobe-photoshop&logoColor=white"/>
      <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=flat&logo=adobe-illustrator&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>프론트엔드</td>
      <td>
        <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
        <img src="https://img.shields.io/badge/NPM-CB3837?style=flat&logo=npm&logoColor=white"/> 
      </td>
    </tr>
    <tr>
      <td>백엔드</td>
      <td>
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/>
        <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white"/>
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"/>
        <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>인프라</td>
      <td>
        <img src="https://img.shields.io/badge/AWS EC2-FF9900?style=flat&logo=amazonec2&logoColor=white"/>
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"/>
       <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>


---

## 📂 문서 자료
- [프로젝트 노션](https://mini-shock-1ff.notion.site/1c3b0eecbf8381059df6d5b7776b838c?pvs=4)
- [PDF 보기](./assets/CLEARSHOT_제로톤_5팀.pdf)

---
