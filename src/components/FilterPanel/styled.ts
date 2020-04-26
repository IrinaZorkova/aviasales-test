import styled from 'styled-components'
import checkIcon from '../../assets/check.svg'

export const Fieldset = styled.div`
  margin-right: 20px;
  width: 232px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 0 10px 0;
  height: fit-content;
  margin-bottom: 20px;
`

export const Legend = styled.legend`
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #4A4A4A;
  margin: 0 20px 10px 20px;
`

export const HiddenInput = styled.input`
  visibility: hidden;
  position: absolute;
  left: -99999px;
`

export const Label = styled.label`
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
  display: flex;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  
  &:hover {
    background-color: #F1FCFF;
  }
  
  &:before {
    content: '';
    display: inline-flex;
    width: 20px;
    height: 20px;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    margin-right: 10px;
    
    ${HiddenInput}:checked + & {
      border-color: #2196F3;
      background: url(${checkIcon}) no-repeat center center;
    }
  }
`
