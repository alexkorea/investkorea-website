---
# VISION 행정사사무소 Design System
# Google DESIGN.md Format (alpha)

meta:
  name: "VISION Immigration Services"
  version: "1.0"
  format: "design.md/alpha"

colors:
  primary: "#235099"
  primaryLight: "#f0f4ff"
  accent: "#dc2626"
  accentHover: "#b91c1c"
  background: "#ffffff"
  surface: "#f8fafc"
  surfaceAlt: "#fafbfc"
  text: "#1a1a1a"
  textSecondary: "#374151"
  textMuted: "#6b7280"
  border: "#e5e7eb"
  borderLight: "#f1f5f9"
  warning: "#f59e0b"
  warningBg: "#fffbeb"
  warningText: "#92400e"
  brand:
    orange: "#f36c24"
    navy: "#235099"
    red: "#dc2626"

typography:
  heading:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "16.5px"
    lineHeight: 1.9
    fontWeight: 400
  caption:
    fontSize: "13.5px"
    fontWeight: 600
    letterSpacing: "0.02em"

dimensions:
  maxWidth: "780px"
  sectionSpacing: "44px"
  borderRadius:
    small: "6px"
    medium: "8px"
    large: "12px"

components:
  h2:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    padding: "14px 24px"
    rounded: "{dimensions.borderRadius.small}"
    typography:
      fontSize: "19px"
      fontWeight: 700
      lineHeight: 1.5
  h3:
    textColor: "{colors.text}"
    borderLeft: "4px solid {colors.primary}"
    padding: "6px 0 6px 14px"
    typography:
      fontSize: "17px"
      fontWeight: 700
  table:
    headerBg: "{colors.primary}"
    headerText: "#ffffff"
    cellPadding: "11px 16px"
    borderColor: "{colors.borderLight}"
    hoverBg: "{colors.primaryLight}"
    evenRowBg: "{colors.surfaceAlt}"
  ctaButton:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    padding: "14px 32px"
    rounded: "{dimensions.borderRadius.medium}"
    shadow: "0 4px 14px rgba(220, 38, 38, 0.25)"
    hoverBg: "{colors.accentHover}"
    hoverShadow: "0 8px 20px rgba(220, 38, 38, 0.35)"
  blockquote:
    borderLeft: "4px solid {colors.warning}"
    backgroundColor: "{colors.warningBg}"
    textColor: "{colors.warningText}"
    padding: "16px 22px"
    rounded: "0 8px 8px 0"
  hr:
    height: "1px"
    background: "linear-gradient(to right, transparent, #d1d5db, transparent)"
    margin: "40px 0"
---

## Overview

VISION 행정사사무소(VISION Administrative Attorney Agent)의 디자인 시스템입니다.
한국 비자·인허가 전문 서비스를 제공하는 6개 사이트에 일관된 브랜드 경험을 제공합니다.

이 디자인 시스템은 전문적이고 신뢰감 있는 톤을 유지하면서, 한국어·영어·중국어·일본어 다국어 콘텐츠에 최적화되어 있습니다.

## Colors

**Primary (#235099)** — 진한 남색. 제목 배경, 테이블 헤더, 링크 색상에 사용. 보스 확정 색상.
**Accent (#dc2626)** — 빨간색. CTA 버튼 전용. 주의를 끌어야 하는 행동 유도 요소에만 사용.
**Background (#ffffff)** — 순백. 본문 배경.
**Surface (#f8fafc)** — 연한 회색. 카드, TOC, 보조 영역 배경.

### 금지 색상
- 그라데이션 사용 금지 (단색만 사용)
- #3b82f6 (밝은 파란) 사용 금지
- #1a3d8f (너무 진한 남색) 사용 금지

## Typography

**Pretendard Variable** — 한국어 + 영문 통합 폰트. 모든 사이트에서 사용.
본문 16.5px, line-height 1.9 — 한국어 가독성에 최적화된 설정.
`word-break: keep-all` — 한국어 단어가 중간에서 끊기지 않도록 필수 적용.

### 회사명 다국어 표기
- 한국어: 비전행정사사무소
- 영어: VISION Administrative Attorney Agent
- 일본어: VISION行政書士事務所
- 중국어: 飞展行政士事务所

## Layout

본문 최대 폭 780px.
섹션 간격 44px.
H2 제목 위 여백 44px, 아래 여백 20px.
테이블은 전체 폭 사용.

## Elevation & Depth

CTA 버튼: `box-shadow: 0 4px 14px rgba(220, 38, 38, 0.25)`
호버 시: `box-shadow: 0 8px 20px rgba(220, 38, 38, 0.35)` + translateY(-2px)
테이블 행 호버: background 전환 (0.2s ease)

## Components

### H2 Section Heading
파란 배경 바 (#235099) + 흰색 텍스트. 둥근 모서리 6px.
블로그 포스트의 주요 섹션 구분에 사용.

### H3 Sub Heading
왼쪽 파란 바 (4px solid #235099) + 투명 배경.
H2 하위의 세부 항목 구분에 사용.

### FAQ Table
질문/답변 2열 테이블.
헤더: 파란 배경 (#235099) + 흰색 텍스트.
짝수 행: #fafbfc 배경.
호버: #f0f4ff 배경.

### CTA Button
빨간 배경 (#dc2626) + 흰색 텍스트.
패딩 14px 32px, 둥근 모서리 8px.
호버 시 어두운 빨강 (#b91c1c) + 위로 2px 이동 + 그림자 강화.

### QR Code Block (WordPress)
4개 QR 코드 (카카오톡, 웨이신, LINE, 왓츠앱) 가로 배치.
각 QR 코드 140x140px, 둥근 모서리 8px.
한국어 + 영문 라벨.

## Do's and Don'ts

### Do's
- 단일 액센트 색상 (#dc2626 빨강) 사용
- Pretendard 폰트 통일
- word-break: keep-all 적용
- 한 줄에 한 문장 (마침표/물음표 후 줄바꿈)
- 정부/공식 출처 외부링크 포함
- FAQ를 테이블 형식으로 작성

### Don'ts
- 그라데이션 사용 금지
- 가격/수수료 금액 명시 금지
- HTML 코드를 마크다운에 혼합 금지
- 같은 사진 재사용 금지
- Agency/Office 사용 금지 (Agent만 사용)
- 일본어에서 行政士 사용 금지 (行政書士만 사용)
