import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티값은 숫자임을 나타내는 표기법
    [key: string]: number
  }
}

// CategoryItem컴포넌트에 사용할 PropsType
type CategoryItemProps = {
  active: boolean
}

// Link컴포넌트에 전달하는 props
// &연산자를 통해 두 타입을 합쳐줌
type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768;
  margin: 100px auto 0;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  color: ${({ active }) => (active ? 'black' : 'gray')};
  font-weight: ${({ active }) => (active ? '800' : '0')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {/* Object.entries(): 객체의 열거가능한 속성들을 [key, value] 쌍의 값들을 가진 배열을 반환하는 기능  */}
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
