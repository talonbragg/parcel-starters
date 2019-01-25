import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: black;
  color: #fff;
`

const Layout = props => {
  return (
    <React.Fragment>
      <Wrapper>
        <p>jsx goes here</p>
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
