import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 500px;
  box-sizing: border-box;
`

export const InfoBlock = styled.p`
  margin: 0;
`

export const Text = styled.span`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`

export const MainText = styled(Text)`
  color: #4A4A4A;
  font-size: 14px;
  line-height: 21px;
`

export const SecondaryText = styled(Text)`
  color: #A0B0B9;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 18px;
`

export const Carrier = styled.img`
  grid-column: 3/4;
`
