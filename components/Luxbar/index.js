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
  border-bottom: 1px solid #e4e4e4 !important;
`

const LuxbarMenu = styled.div`
  @media screen and (min-width: 768px) {
    overflow: visible;
  }
  height: 81px;
  background-color: transparent;
  color: #484848;
  min-height: 81px;
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
  height: 81px;
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
`

const LuxbarItem = styled.li`
  @media screen and (min-width: 768px) {
      border-top: 0;
  }
  height: 81px;
  background-color: ${props => props.active ? '#00838f' : 'inherit'};
  a {
    ${BaseAStyle}
    padding: 18px 24px 18px 24px;
    display: block;
  }
`

const LuxbarCheckbox = styled.input`
  @media screen and (min-width: 768px) {
    &:not(:checked) {
      ${LuxbarMenu} {
        overflow: visible;
      }
    }
    &:checked {
      ${LuxbarMenu} {
        height: 81px;
      }
    }
  }
  display: none;
  &:checked ~ {
    ${LuxbarMenu} {
      position: absolute;
      transition: height 0.6s ease;
      height: 100vh;
      overflow: auto;
    }
  }
  &:checked + {
    ${LuxbarMenu} {
      ${LuxbarHamburger} span {
        background-color: transparent;
        &:before, &:after {
          margin-top: 0;
        }
        &:before {
          transform: rotate(225deg);
        }
        &:after {
          transform: rotate(-225deg);
        }
      }
    }
  }
  &:not(:checked) ~ {
    ${LuxbarMenu} {
      overflow: hidden;
      height: 81px;  
    }
  }
`


const Luxbar = (props) => {
  return (
    <LuxbarFixed>
      <LuxbarCheckbox type="checkbox" id="luxbar-checkbox" />
      <LuxbarMenu>
        <LuxbarNavigation>
          <LuxbarHeader>
            <LuxbarBrand>
              Luxbar Demo
            </LuxbarBrand>
            <LuxbarHamburger htmlFor='luxbar-checkbox'>
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