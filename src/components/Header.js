import React from 'react'
import styled from '@emotion/styled'
import FontAwesome from '@fortawesome/fontawesome'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function hover(el) {
  Element.setAttribute('src', 'resouces/images/facebook_whiteicon.png')
}

export default () => (
  <Wrapper>
    <Logo src="https://todaidojo.com/wp-content/uploads/Website-Logo.png" />
    <Tabs>
      <Router>
        <NavLink to="/"><Tab>Ninjutsu</Tab></NavLink>
        <NavLink to="/instructor"><Tab>Instructor</Tab></NavLink>
        <NavLink to="/classes"><Tab>Classes</Tab></NavLink>
      </Router>
      {/*<FA icon="facebook" />*/}
      <Tab><a href="https://www.facebook.com/people/Bujinkan-Aryu/100012687460541" target="_blank"><img src="resources/images/facebook_lighticon.png" /></a></Tab>
    </Tabs>
  </Wrapper>
)

const FA = styled(FontAwesome)`
  color: purple;
`

const Logo = styled.img`
  height: 40px; 
`

const Tab = styled.li`
  cursor: pointer;
  margin: 8px;

  &:hover {
    color: #fff;
  }
`

const Tabs = styled.ul`
  color: #ddd;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 20px;
    transition: .2s ease all;

    &:hover {
      background-color: #fff;
      border-radius: 5px;
      height: 25px;    
    }
  }
`

const Wrapper = styled.div`
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .2));
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`