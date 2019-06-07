import React from 'react'
import styled from '@emotion/styled'

export default () => (
  <Wrapper>
    <Text>
      <Firstline><a>Terms of service</a><Pipe>|</Pipe><a>privacy policy</a><Pipe>|</Pipe><a>waiver</a></Firstline>
      <Secondline>Copyright 2019 &copy; <strong>Todai Bujinkan Dojo</strong><Pipe>|</Pipe>All Rights Reserved</Secondline>
    </Text>
    <Icons>
      Testing
    </Icons>
  </Wrapper>
)

const Pipe = styled.span`
  margin: 0 8px;
`

const Wrapper = styled.footer`
  align-items: center;
  background: #333;
  display: flex;
  flex-direction: row;
  font-size: 10px;
  justify-content: space-between;
  margin: 0;
  padding: 10px 15px;
`

const Text = styled.p`
  color: rgba(255,255,255,.5);
  display: flex;
  flex-direction: column;
  font-size: 14px; 
  justify-content: space-around;
  margin: 0;
  padding: 0;
`

const Firstline = styled.p`
  border-bottom: 1px solid #444;
  margin: 0;
  opacity: .8;
  padding-bottom: 8px;
  text-transform: uppercase;
`

const Secondline = styled.p`
  margin: 0;
  padding: 8px 0;
`

const Icons = styled.div`
  color: #fff
`