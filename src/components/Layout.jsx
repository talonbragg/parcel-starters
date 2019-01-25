import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: black;
  color: #fff;
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  )
}

export default Layout
