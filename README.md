# Jieun AI Townhall Report

## 제일 쉬운 수정 방법

### 1. 글 수정
`content.js` 파일만 열어서 수정하세요.

- 따옴표 안의 문장만 바꾸면 됩니다.
- 줄바꿈이 필요하면 `<br>`을 넣으면 됩니다.
- 섹션을 삭제하고 싶으면 해당 프로젝트의 문장만 비워두거나 요청해주세요.

### 2. 디자인 수정
디자인은 `style.css`에 들어 있습니다.
직접 수정하기 어렵다면, 수정 요청만 정리해서 ChatGPT에 보내면 됩니다.

### 3. 이미지 교체
`assets` 폴더의 파일을 원하는 이미지로 교체하세요.
가장 쉬운 방식은 `content.js`에서 이미지 파일명을 바꾸는 것입니다.

예:
`src: "./assets/mirye-main.svg"`
→
`src: "./assets/mirye-main.png"`

## GitHub Pages 배포
1. GitHub repository에 파일 전체 업로드
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main / Folder: root 선택
5. Save
