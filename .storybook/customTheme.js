import { create } from '@storybook/theming';

export default create({
  base: 'light', // 또는 'dark'

  // 브랜드
  brandTitle: 'L-DX Component',
//   brandUrl: 'https://example.com',
  brandImage: '/path/to/logo.png', // 선택사항: 로고 이미지

  // UI
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',

  // UI 모노크롬
  appBg: '#F6F9FC',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // 텍스트 색상
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // 툴바 기본 및 액티브 색상
  barTextColor: '#999999',
  barSelectedColor: '#1EA7FD',
  barBg: '#FFFFFF',
}); 