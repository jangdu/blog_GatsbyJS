import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700px;
  color: gray;
`

const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

const Text2 = styled('div')(() => ({
  fontSize: '15px',
  color: 'blue',
}))

type InfoPageProps = {
  data: {
    site: {
      title: string
      description: string
      author: string
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      {/* emotionJS 글로벌 styles 적용방법 */}
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2>{author}</Text2>
      <Link to="/">To Main</Link>
    </div>
  )
}

export default InfoPage

// 메타데이터를 요청하는 쿼리
// 변수에 쿼리를 담고 이를 export하면 내부적으로 요청을 보내고 그 데이터를 props로 전달
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
