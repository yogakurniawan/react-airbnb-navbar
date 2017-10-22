import React from 'react';
import styled, { css } from 'styled-components'
import Logo from './Logo.svg'
import Search from './Search.svg'

const LuxbarFixed = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const LuxbarMenu = styled.div`
  @media screen and (min-width: 768px) {
    overflow: visible;
  }
  height: 58px;
  background-color: #006064;
  color: #fff;
  min-height: 58px;
  transition: 0.6s ease;
  width: 100%;
`

const LuxbarNavigation = styled.ul`
  @media screen and (min-width: 768px) {
    flex-flow: row;
    justify-content: flex-end;
  }
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin: 0;
`

const LuxbarHeader = styled.li`
  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`

const BaseAStyle = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const LuxbarBrand = styled.a`
  ${BaseAStyle}
  font-size: 1.6em;
  padding: 18px 24px 18px 24px;
`

const BaseSpanStyle = css`
  background-color: #fff;
  display: block;
  height: 2px;
  width: 26px;
  transition: 0.6s ease;
`

const LuxbarHamburger = styled.label`
  margin-left: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
  padding: 18px 24px 18px 24px;
  position: relative;
  cursor: pointer;
  span {
    ${BaseSpanStyle}
  }
  span:before {
    margin-top: -8px;
    content: '';
    position: absolute;
    ${BaseSpanStyle}
  }
  span:after {
    margin-top: 8px;
    content: '';
    position: absolute;
    ${BaseSpanStyle}
  }
  &:before {
    transform: rotate(225deg);
  }
  &:after {
    transform: rotate(-225deg);
  }
`

const LuxbarItem = styled.li`
  @media screen and (min-width: 768px) {
      border-top: 0;
  }
  height: 58px;
  background-color: ${props => props.active ? '#00838f' : 'inherit'};
  a {
    ${BaseAStyle}
    padding: 18px 24px 18px 24px;
    display: block;
  }
`


const Luxbar = (props) => {
  return (
    <LuxbarFixed>
      <LuxbarMenu>
        <LuxbarNavigation>
          <LuxbarHeader>
            <LuxbarBrand>
              Luxbar Demo
            </LuxbarBrand>
            <LuxbarHamburger>
              <span></span>
            </LuxbarHamburger>
          </LuxbarHeader>
          <LuxbarItem active>
            <a>Item 1</a>
          </LuxbarItem>
          <LuxbarItem>
            <a>Item 2</a>
          </LuxbarItem>
          <LuxbarItem>
            <a>Item 3</a>
          </LuxbarItem>
          <LuxbarItem>
            <a>Item 4</a>
          </LuxbarItem>
        </LuxbarNavigation>
      </LuxbarMenu>
    </LuxbarFixed>
  )
}

export default Luxbar;