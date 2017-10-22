import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import 'isomorphic-fetch'
import Page from '../components/HOC/Page'
import Navbar from '../components/Navbar'
import Luxbar from '../components/Luxbar'

const H3 = styled.h3 `
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: #484848 !important;
  font-weight: 700 !important;
  margin-bottom: 0px !important;
  font-size: 32px !important;
  line-height: 40px !important;
  letter-spacing: -0.6px !important;
`;

const Index = (props) => {
  return (
    <div>
      <Luxbar />
    </div>
  )
}

// Index.getInitialProps = async ({ req, store }) => {
//   console.log(store.getState())
//   // const res = await fetch('http://pokeapi.salestock.net/api/v2/pokemon/')
//   const res = await fetchData()
//   // const json = await res.json()
//   return { data: res }
// }

const mapStateToProps = state => ({
  fullName: state.auth.fullName
})
const mapDispatchToProps = {

}

export default Page(connect(mapStateToProps, mapDispatchToProps)(Index))