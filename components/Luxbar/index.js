import React from 'react';
import styled, { css } from 'styled-components'
import Logo from './Logo.svg'
import Search from './Search.svg'

const LuxbarFixed = styled.header`
  border-bottom: 1px solid #e4e4e4;
  z-index: 5;
  position: relative;
`

const LuxbarMenu = styled.div`
  @media screen and (min-width: 768px) {
    overflow: visible;
  }
  height: 81px;
  background-color: transparent;
  color: #484848;
  min-height: 81px;
  width: 100%;
  transition: 250ms ease-in-out;
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
  width: 100%;
`

const BaseAStyle = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const LuxbarBrand = styled.div`
  @media screen and (max-width: 320px) {
    padding: 14px;
  }
  padding: 18px 24px 18px 24px;
  display: table;
`

const BaseSpanStyle = css`
  background-color: #484848;
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

const Icon = css`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const ArrowDown = css`
  ${Icon}
  content: '\f078';
`

const ArrowDownWrapper = styled.label`
  @media screen and (min-width: 768px) {
    display: none;
  }
  display: inline-block;
  font-size: 9px;
  margin-left: 8px;
  vertical-align: middle;
  transition-property: -ms-transform,-webkit-transform,transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  span {
    &:before {
      ${ArrowDown}      
    }
  }
`

const LuxbarItem = styled.li`
  @media screen and (min-width: 768px) {
      border-top: 0;
      font-size: 1em;
  }
  height: 81px;
  font-size: 19px;
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
  &:checked ~ ${LuxbarMenu} {
      position: absolute;
      transition: height 250ms ease-in-out;
      height: 100vh;
      overflow: auto;
    }
  }
  &:checked + ${LuxbarMenu} {
      ${ArrowDownWrapper} {
        transform: rotate(180deg);
      }
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

const ButtonMenu = styled.button`
  @media (min-width: 768px) {
    height: 80px !important;
    line-height: 80px;
  }
  appearance: none;
  background: transparent;
  border: none;
  color: inherit;
  display: inline-block;
  height: 64px;
  line-height: 64px;
  text-decoration: none;
  margin: 0px;
  position: relative;
  padding: 0 16px;
  white-space: nowrap;
`

const Item = styled.div`
  @media (min-width: 768px) {
    font-weight: normal;
  }
  padding: 8px 0;
  font-weight: 300;
  line-height: 1;
  vertical-align: middle;
  &:hover {
    border-bottom: 2px solid #484848;
  }
`

const IconCss = css`
  height: 1em;
  width: 1em;
  display: block;
  fill: currentColor;
`

const LogoIcon = styled(Logo) `
  ${IconCss}
`

const LogoIconWrapper = styled.div`
  color: #FF5A5F;
  vertical-align: middle;
  font-size: 34px;
  display: inline-block;
`

const SearchIcon = styled(Search) `
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
    display: block;
    fill: rgb(118, 118, 118);
  }
`

const SearchIconWrapper = styled.div`
  float: left;
  @media screen and (min-width: 768px) {
    padding-left: 12px;
    padding-top: 8px;
  }
  padding-left: 0;
  padding-top: 13px;
`

const SearchInputWrapper = styled.div`
  overflow: hidden;
  position: relative;
`

const SearchInput = styled.input`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 19px;
  line-height: 24px;
  color: #484848;
  background-color: transparent;
  border: 0;
  padding: 8px;
  width: 100%;
  font-weight: normal;
  text-overflow: ellipsis;
  &:focus {
    outline: none;
  }
`

const SearchBox = styled.div`
  line-height: 24px;
  color: #484848;
  background-color: #ffffff;
  border-radius: 4px !important;
  border: 1px solid #DBDBDB;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 8px;
  height: 42px;
  width: 70%;
  margin-right: auto;
  white-space: nowrap;
  position: relative;
  @media screen and (min-width: 1168px) {
    width: 560px;
  }
  @media screen and (min-width: 1075px) {
    width: 460px;
  }
  @media screen and (min-width: 1040px) {
    width: 500px;
  }
`

const ContainerFluid = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
`

const Luxbar = (props) => {
  return (
    <ContainerFluid>
      <LuxbarFixed>
        <LuxbarCheckbox type="checkbox" id="luxbar-checkbox" />
        <LuxbarMenu>
          <LuxbarNavigation>
            <LuxbarHeader>
              <LuxbarBrand>
                <LogoIconWrapper>
                  <LogoIcon />
                </LogoIconWrapper>
                <ArrowDownWrapper htmlFor='luxbar-checkbox'>
                  <span />
                </ArrowDownWrapper>
              </LuxbarBrand>
              <SearchBox>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <SearchInputWrapper>
                  <SearchInput />
                </SearchInputWrapper>
              </SearchBox>
            </LuxbarHeader>
            <LuxbarItem>
              <ButtonMenu>
                <Item>Item 4</Item>
              </ButtonMenu>
            </LuxbarItem>
            <LuxbarItem>
              <ButtonMenu>
                <Item>Item 4</Item>
              </ButtonMenu>
            </LuxbarItem>
            <LuxbarItem>
              <ButtonMenu>
                <Item>Item 4</Item>
              </ButtonMenu>
            </LuxbarItem>
          </LuxbarNavigation>
        </LuxbarMenu>
      </LuxbarFixed>
    </ContainerFluid>
  )
}

export default Luxbar;