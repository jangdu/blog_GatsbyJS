import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail: 'https://avatars.githubusercontent.com/u/98936510?s=400&v=4',
  link: 'https://www.google.co.kr/',
}

const PostListWrapper = styled.div`
  display: grid;
  // 그리드 가로 배치 fr은 비율이라고 보면됨
  // repeat(5, 1fr): 5개의 1fr이런 식으로 반복되면 이렇게 사용 ㅆㄱㄴ
  grid-template-columns: 1fr 1fr;
  // 요소의 간격
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
