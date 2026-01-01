# SharedStyles.js CSS 클래스 사용 분석 보고서

## 요약
- **분석 일자**: 2025-07-01
- **총 정의된 클래스**: 159개
- **실제 사용되는 클래스**: 40개 (25%)
- **삭제 가능한 클래스**: 119개 (75%)

## 1. 실제 사용되는 CSS 클래스 (40개)

### Button 관련 클래스 (31개)
#### 기본 및 크기
- `btn` - Button.js 기본 클래스
- `btn-lg`, `btn-sm` - Button.js 크기 변경
- `has-icon` - Button.js 아이콘 버튼

#### 테마 클래스 (15개)
- `btn-primary`, `btn-secondary`, `btn-light`, `btn-dark`, `btn-info`
- `btn-purple`, `btn-indigo`, `btn-danger`, `btn-pink`, `btn-orange`
- `btn-light-orange`, `btn-yellow`, `btn-lime`, `btn-teal`, `btn-green`
- `btn-default` (fallback)

#### 아웃라인 테마 클래스 (15개)
- `btn-outline-primary`, `btn-outline-secondary`, `btn-outline-light`, `btn-outline-dark`
- `btn-outline-info`, `btn-outline-purple`, `btn-outline-indigo`, `btn-outline-danger`
- `btn-outline-pink`, `btn-outline-orange`, `btn-outline-light-orange`, `btn-outline-yellow`
- `btn-outline-lime`, `btn-outline-teal`, `btn-outline-green`

### Form 관련 클래스 (7개)
- `form-check`, `form-check-inline` - Checkbox.js, Radio.js
- `form-check-input`, `form-check-label` - Checkbox.js, Radio.js
- `form-control-lg`, `form-control-sm` - 모든 폼 컨트롤 크기
- `is-invalid` - 검증 상태

### Feedback 관련 클래스 (2개)
- `valid-feedback`, `invalid-feedback` - Feedback.js

### 기타 클래스
- `container` - LabelAndFeedContainer.js (동적 사용)

## 2. 삭제 가능한 CSS 클래스 (119개)

### 🔴 즉시 삭제 가능 (높은 우선순위) - 41개

#### 타이포그래피 클래스 (15개)
```css
/* 헤딩 클래스 */
.h1, .h2, .h3, .h4, .h5, .h6

/* 디스플레이 클래스 */
.display-1, .display-2, .display-3, .display-4, .display-5, .display-6

/* 텍스트 강조 */
.lead, .small, .mark
```

#### 이미지 관련 클래스 (5개)
```css
.img-fluid, .img-thumbnail, .figure, .figure-img, .figure-caption
```

#### 리스트 관련 클래스 (4개)
```css
.list-unstyled, .list-inline, .list-inline-item, .initialism
```

#### 인용 관련 클래스 (2개)
```css
.blockquote, .blockquote-footer
```

#### 드롭다운 클래스 (15개)
```css
.dropdown, .dropdown-center, .dropdown-menu, .dropdown-menu-dark, .dropdown-menu-end, .dropdown-menu-start
.dropdown-item, .dropdown-item-text, .dropdown-header, .dropdown-divider, .dropdown-toggle
.dropup, .dropend, .dropstart
.dropdown-toggle-split
```

### 🟡 신중하게 삭제 (중간 우선순위) - 38개

#### 사용되지 않는 버튼 색상 클래스 (30개)
```css
/* 솔리드 버튼 */
.btn-black, .btn-white, .btn-red, .btn-muted, .btn-theme, .btn-theme-color, .btn-success
.btn-gray-100, .btn-gray-200, .btn-gray-300, .btn-gray-400, .btn-gray-500
.btn-gray-600, .btn-gray-700, .btn-gray-800, .btn-gray-900

/* 아웃라인 버튼 */
.btn-outline-black, .btn-outline-white, .btn-outline-red, .btn-outline-muted
.btn-outline-theme, .btn-outline-theme-color, .btn-outline-success
.btn-outline-gray-100, .btn-outline-gray-200, .btn-outline-gray-300, .btn-outline-gray-400
.btn-outline-gray-500, .btn-outline-gray-600, .btn-outline-gray-700, .btn-outline-gray-800, .btn-outline-gray-900
```

#### 버튼 그룹 클래스 (5개)
```css
.btn-group, .btn-group-lg, .btn-group-sm, .btn-group-vertical, .btn-toolbar
```

#### 애니메이션 클래스 (3개)
```css
.collapse, .collapsing, .fade, .show
```

### 🟢 보류 권장 (낮은 우선순위) - 40개

#### 폼 컨트롤 클래스 (향후 사용 가능성)
```css
.form-control, .form-control-lg, .form-control-sm, .form-control-color, .form-control-plaintext
.form-left-control, .form-floating, .form-range
.form-select, .form-select-lg, .form-select-sm, .form-switch
.col-form-label, .col-form-label-lg, .col-form-label-sm
.input-group, .input-group-lg, .input-group-sm, .input-group-text
```

#### 검증 관련 클래스
```css
.was-validated, .valid-tooltip, .invalid-tooltip, .is-valid
```

#### 네비게이션 클래스
```css
.nav, .nav-link
```

#### 기타 Bootstrap 컴포넌트
```css
.border-theme, .parent-selector
```

## 3. 카테고리별 삭제 통계

| 우선순위 | 카테고리 | 삭제 가능 수 | 파일 크기 절약 예상 |
|----------|----------|-------------|-------------------|
| 높음 | 타이포그래피 | 15개 | ~15% |
| 높음 | 이미지/리스트/인용 | 11개 | ~8% |
| 높음 | 드롭다운 | 15개 | ~12% |
| 중간 | 미사용 버튼 색상 | 30개 | ~20% |
| 중간 | 버튼 그룹/애니메이션 | 8개 | ~5% |
| 낮음 | 폼 컨트롤 (보류) | 40개 | ~25% |

**총 절약 가능**: 전체의 60-85%

## 4. 삭제 실행 계획

### Phase 1: 즉시 삭제 (41개)
- 타이포그래피, 이미지, 리스트, 인용, 드롭다운 클래스
- **예상 파일 크기 절약**: ~35%
- **위험도**: 낮음

### Phase 2: 신중한 삭제 (38개)  
- 미사용 버튼 색상, 버튼 그룹, 애니메이션 클래스
- **예상 파일 크기 절약**: ~25%
- **위험도**: 중간 (버튼 테마 확인 필요)

### Phase 3: 선택적 삭제 (40개)
- 폼 컨트롤 관련 클래스
- **예상 파일 크기 절약**: ~25%
- **위험도**: 높음 (향후 확장성 고려)

## 5. 주의사항

1. **동적 사용 클래스**: `container`, Button 테마 클래스들은 조건부로 동적 적용됨
2. **외부 사용 가능성**: 이 라이브러리 사용자가 직접 CSS 클래스를 사용할 가능성
3. **Bootstrap 호환성**: Bootstrap 기반 프로젝트와의 호환성 유지 필요
4. **향후 확장성**: 새로운 컴포넌트 추가 시 필요할 수 있는 클래스들

## 6. 검증 체크리스트

- [ ] 스토리북에서 모든 컴포넌트 정상 렌더링 확인
- [ ] 개발 서버에서 모든 기능 정상 작동 확인
- [ ] 테마 변경 시 버튼 스타일 정상 적용 확인
- [ ] 폼 검증 상태 정상 표시 확인
- [ ] 반응형 레이아웃 정상 작동 확인