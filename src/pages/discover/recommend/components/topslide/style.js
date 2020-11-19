const { default: styled } = require('styled-components')

export const TopSlideWrap = styled.div`
  background: url('${props => props.bgImage}') center center/6000px;
  width: 100%;
  height: 270px;
`
