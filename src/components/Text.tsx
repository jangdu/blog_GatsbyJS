import React, { FunctionComponent } from 'react'

type TextProps = {
  text: string
}

// FunctionComponent: 리액트가 제공하는 함수형 컴포넌트
// <TextProps>: 제네릭을 사용해 컴포넌트가 받는 props 타입 정의
const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>
}

export default Text
