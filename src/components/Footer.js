import React from 'react'
import styled from '@emotion/styled'

export default () => (
  <Wrapper>
    <Text>
      <FirstLine><strong>Bujinkan Aryu Dojo Utah</strong></FirstLine>
      <SecondLine><a>Phone: 385.250.7187</a><Pipe>|</Pipe><a>Email: AryuBujinnkan@gmail.com</a></SecondLine>
    </Text>
    <Icons>
      <a href="https://www.facebook.com/people/Bujinkan-Aryu/100012687460541" target="_blank"><img src="resources/images/facebook_darkicon.png" /> Bujinkan Aryu Dojo (Utah, USA)</a>
    </Icons>
  </Wrapper>
)

const Pipe = styled.span`
  font-weight: 600;
  margin: 0 8px;
`

const Wrapper = styled.footer`
  background: #999;
  display: flex;
  flex-direction: row;
  font-size: 10px;
  justify-content: space-between;
  margin: 0;
  padding: 10px 20px;
`

const Text = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  font-size: 14px; 
  justify-content: space-around;
  margin: 0;
  padding: 0;
`

const FirstLine = styled.p`
  text-indent: 0px;
  border-bottom: 1px solid #333;
  margin: 0;
  padding: 8px 0 6px;
  text-transform: uppercase;
`

const SecondLine = styled.p`
  margin: 0;
  opacity: .8;
  padding: 8px 0;
`

const Icons = styled.div`
  align-items: center;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 8px;
  transition: .2s ease all;

  :active {
      transition: .1s ease all;
    :hover {
      background-color: #888;
      box-shadow: 2px 2px #555;
    }
  }

  a:link {
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: #333;
    text-decoration: none;
    transition: .3s;

    &:hover {
      color: rgb(255, 40, 0);
    }
  }

  a:visited {
    color: inherit;

    &:hover {
      color: rgb(255, 40, 0);
    }
  } 

  img {
    height: 40px;
    padding-right: 8px;
  }
`