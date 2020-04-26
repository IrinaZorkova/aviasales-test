import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const RadioButton = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  color: #4A4A4A;
  border: 1px solid #DFE5EC;
  background-color: #fff;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  
   &:last-child {
    border-radius: 0 5px 5px 0;
  }
`

export const HiddenInput = styled.input`
  visibility: hidden;
  position: absolute;
  left: -99999px;
  
  &:checked + ${RadioButton} {
    background-color: #2196F3;
    color: #FFFFFF;
    border-color: #2196F3;
  }
`



