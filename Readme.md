### Webcomponents(using LitElement)

https://lit.dev/docs/getting-started/

### Decorator
```javascript
// as-is
customElements.define('l-feedback', LFeedback);
// to-be
@customElement('l-feedback')
```
["@babel/plugin-proposal-decorators", { "legacy": true }]를 사용하면 @customElement는 정상작동하지만 @property는 작동하지 않는다. 공식문서대로 2023-05버전을 사용하면 require가 정의되지 않았다는 오류메세지가 나타나며 작동하지 않는다.


### 계층구조
LitParents.js > InputContainer.js > Input.js


### lit-html 함수
ifDefined  
AttributeParts의 경우 값이 정의된 경우 속성을 설정하고 값이 정의되지 않은 경우 속성을 제거합니다.

classMap  
동적 CSS 클래스를 적용하는 지시어입니다.

