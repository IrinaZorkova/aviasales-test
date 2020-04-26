import styled from 'styled-components'

export const Header = styled.div`
  grid-column: 1/4;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`
export const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
`
