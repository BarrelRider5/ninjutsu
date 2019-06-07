import React from 'react'
import styled from '@emotion/styled'

export default () => (
  <Wrapper>
    <Logo src="https://todaidojo.com/wp-content/uploads/Website-Logo.png" />
    <Tabs>
      <Tab>Ninjutsu</Tab>
      <Tab>School</Tab>
      <Tab>Instructors</Tab>
      <Tab>Classes</Tab>
      <Tab>Memberships</Tab>
      <Tab>Shop</Tab>
      <Tab>Login</Tab>    
    </Tabs>
  </Wrapper>
)

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