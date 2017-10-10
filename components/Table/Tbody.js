import React from 'react';
import styled, { css } from 'styled-components'

const baseStyle = css`
  cursor: pointer;
`

export const Pending = styled.tbody `
  ${baseStyle}
  &:hover {
    border: 2px solid #adadad;
  }
  
  background: transparent;
`
export const Running = styled.tbody `
  ${baseStyle}
  &:hover {
    border: 2px solid #80b4f1;
  }
  color: #2772ca;
  background: linear-gradient(to right,rgba(128, 181, 241, 0.31) 0%,rgba(247,247,247,0.78) 46%,rgba(255,255,255,1) 100%);
`
export const Rejected = styled.tbody `
  ${baseStyle}
  &:hover {
    border: 2px solid #d61f0f;
  }
  color: #d61f0f;
  background: linear-gradient(to right,rgba(214, 32, 15, 0.21) 0%,rgba(247,247,247,0.78) 46%,rgba(255,255,255,1) 100%);
`
export const Accepted = styled.tbody `
  ${baseStyle}
  &:hover {
    border: 2px solid #0ab115;
  }
  color: #0ab115;
  background: linear-gradient(to right,rgba(10, 177, 21, 0.15) 0%,rgba(247,247,247,0.77) 46%,rgba(255,255,255,1) 100%);
`
const Tbody = (props) => {
  if (props.status === 'Pending') {
    return <Pending>{props.children}</Pending>    
  } else if (props.status === 'Running') {
    return <Running>{props.children}</Running>
  } else if (props.status === 'Rejected') {
    return <Rejected>{props.children}</Rejected>
  } else if (props.status === 'Complete' || props.status === 'Accepted') {
    return <Accepted>{props.children}</Accepted>
  }
  return <tbody>{props.children}</tbody>
}

export default Tbody;
