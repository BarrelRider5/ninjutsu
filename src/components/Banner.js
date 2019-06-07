import React from 'react'
import styled from '@emotion/styled'

export default ({ children }) => (
  <Wrapper>
    <Text>
      {children}
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  background: #333;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Text = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
  line-height: 1.6;
  margin: 0;
  padding: 0 15px;
  position: relative;
  text-align: center;
  width: 70%;
  max-width: 678px;

  h1 {
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-weight: 500;
  }
`

const Heading = styled.h1`
  
`

const P = styled.p`
  
`