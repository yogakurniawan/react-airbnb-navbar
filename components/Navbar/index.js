import React from 'react';
import styled, { css } from 'styled-components'
import Logo from './Logo.svg'
import Search from './Search.svg'

const Wrapper = styled.div`
  position: fixed !important;
  z-index: 10 !important;
  width: 100% !important;
`

const Header = styled.header`
  position: relative !important;
  z-index: 5 !important;
`

const RowWrapper = styled.div`
  background-color: transparent !important;
  box-shadow: none !important;
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  right: 0px !important;
`

const baseColStyle = css`
  display: table-cell !important;
  vertical-align: middle !important;
`

const Row = styled.div`
  display: table !important;
  width: 100% !important;
`

const Col = styled.div`
  ${baseColStyle}
`

const LogoDiv = styled.div`
  position: relative !important;
  z-index: 20 !important;
`

const SearchInput = styled.div`
  ${baseColStyle}
  width: 100% !important;
`

const Ul = styled.div`
  display: table !important;
  list-style: none !important;
  padding: 0px !important;
  margin: 0px !important;
  height: 64px !important;
`

const Li = styled.div`
  display: table-cell !important;
`

const NavWrapper = styled.div`
  @media (min-width: 1075px) {
    display: block !important;
  }
  display: none !important;
  opacity: 1 !important;
  transition: 0.25s opacity ease-out !important;
`

const Div = styled.div`
  position: relative !important;
`

const ButtonMenu = styled.button`
  @media (min-width: 744px) {
    height: 80px !important;
    line-height: 80px !important;
  }
  appearance: none !important;
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  display: inline-block !important;
  height: 64px !important;
  line-height: 64px !important;
  text-decoration: none !important;
  margin: 0px !important;
  position: relative !important;
  padding: 0 16px !important;
  white-space: nowrap !important;
`

const AbsoluteRowWrapper = styled.div`
  @media (min-width: 744px) {
    height: 81px !important;
    border-bottom: 1px solid #e4e4e4 !important;
  }
  position: absolute !important;
  width: 100% !important;
  box-shadow: none !important;
  border-bottom: none !important;
  height: 65px !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#f7f7f7, endColorstr=#ffffff) !important;
  background: linear-gradient(0deg, #ffffff, #f7f7f7) !important;
  display: block !important;
`

const AbsoluteSearchBarWrapper = styled.div`
  @media (min-width: 1168px) {
    width: 560px !important;
  }
  @media (min-width: 1075px) {
    width: 460px !important;
    left: 80px !important;
  }
  @media (min-width: 744px) {
    top: 16px !important;
    width: 460px !important;
  }
  left: 90px !important;
  right: 12px !important;
  display: block !important;
  position: absolute !important;
  top: 10px !important;
  z-index: 100 !important;
`

const SearchBar = styled.div`
  font-size: 19px !important;
  line-height: 24px !important;
  letter-spacing: undefined !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: #484848 !important;
  background-color: #ffffff !important;
  border-radius: 4px !important;
  border: 1px solid #DBDBDB !important;
  padding: 0px !important;
  display: table !important;
  table-layout: fixed !important;
  height: 42px !important;
  width: 100% !important;
  position: relative !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  background-color: white;
`

const SearchBarChild1 = styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
  position: relative !important;
  transition: width 0.3s !important;
  width: 100%;
`

const SearchInputWrapper = styled.div`
  font-size: 19px !important;
  line-height: 24px !important;
  color: #484848 !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-radius: 2px !important;
  background-color: #ffffff !important;
  position: relative !important;
  z-index: 0 !important;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
  border-color: #ffffff !important;
  display: block !important;
`

const SearchInputIconWrapper = styled.div`
  float: left !important;
`

const SearchInputIconWrapper2 = styled.div`
  padding-top: 11px !important;
  padding-left: 12px !important;
`

const SearchInputIconWrapper3 = styled.div`
  padding-left: 4px !important;
  padding-right: 5px !important;
`

const AutoCompleteWrapper = styled.div`
  overflow: hidden !important;
  position: relative !important;
`

const AutoComplete = styled.input`
  font-size: 19px !important;
  line-height: 24px !important;
  color: #484848 !important;
  background-color: transparent !important;
  border: 0px !important;
  padding: 11px !important;
  width: 100% !important;
  font-weight: normal !important;
  text-overflow: ellipsis !important;
`

const A = styled.a`
  display: table-cell !important;
`

const OuterLogoDiv = styled.div`
  @media (min-width: 744px) {
    height: 80px !important;
  }
  display: table-cell !important;
  height: 64px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  transition: 0.25s color !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  vertical-align: middle !important;
  white-space: nowrap !important;
`

const SvgLogoOuterDiv = styled.div`
  display: inline-block !important;
`

const SvgLogoWrapperDiv = styled.div`
  color: #FF5A5F !important;
  display: inline-block !important;
  vertical-align: middle !important;
  font-size: 34px !important;
  transition: 0.25s color !important;
`

const LogoIcon = styled(Logo) `
  height: 1em;
  width: 1em;
  display: block;
  fill: currentColor;
`

const SearchIcon = styled(Search) `
  height: 24px;
  width: 24px;
  display: block;
  fill: rgb(118, 118, 118);
`

const Navbar = (props) => {
  return (
    <Wrapper>
      <Header>
        <RowWrapper>
          <Row>
            <Col>
              <LogoDiv>
                <div>
                  <A href="#">
                    <OuterLogoDiv>
                      <SvgLogoOuterDiv>
                        <SvgLogoWrapperDiv>
                          <LogoIcon />
                        </SvgLogoWrapperDiv>
                      </SvgLogoOuterDiv>
                    </OuterLogoDiv>
                  </A>
                </div>
              </LogoDiv>
            </Col>
            <SearchInput>
            </SearchInput>
            <Col>
              <NavWrapper>
                <nav>
                  <Ul>
                    <Li>
                      <Div>
                        <ButtonMenu>
                          <span>Bantuan</span>
                        </ButtonMenu>
                      </Div>
                    </Li>
                  </Ul>
                </nav>
              </NavWrapper>
            </Col>
          </Row>
        </RowWrapper>
      </Header>
      <AbsoluteRowWrapper>
        <AbsoluteSearchBarWrapper>
          <form>
            <SearchBar>
              <SearchBarChild1>
                <SearchInputWrapper>
                  <SearchInputIconWrapper>
                    <SearchInputIconWrapper2>
                      <SearchInputIconWrapper3>
                        <SearchIcon />
                      </SearchInputIconWrapper3>
                    </SearchInputIconWrapper2>
                  </SearchInputIconWrapper>
                  <AutoCompleteWrapper>
                    <AutoComplete />
                  </AutoCompleteWrapper>
                </SearchInputWrapper>
              </SearchBarChild1>
            </SearchBar>
          </form>
        </AbsoluteSearchBarWrapper>
      </AbsoluteRowWrapper>
    </Wrapper>
  )
}

export default Navbar;