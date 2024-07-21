### Webcomponents(using LitElement)

https://lit.dev/docs/getting-started/

### Decorator
```javascript
// as-is
customElements.define('l-feedback', LFeedback);
// to-be
@customElement('l-feedback')
```


ifDefined  
AttributeParts의 경우 값이 정의된 경우 속성을 설정하고 값이 정의되지 않은 경우 속성을 제거합니다.

classMap  
동적 CSS 클래스를 적용하는 지시어입니다.