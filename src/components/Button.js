import React, { Component } from 'react'
import styled from '@emotion/styled'


export default class ButtonComponent extends Component {  
  changeLocation = link => window.location.href = link

  render() {
    const { link, text } = this.props

    return (
      <Button onClick={() => this.changeLocation(link)}>
        {text}
      </Button>
    )
  }
}

const Button = styled.button`
  background-color: #888;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 16px;
  position: relative;
  text-transform: uppercase;
  transition: .4s ease all;
  top: 0;

  &:hover {
    background-color: rgb(255, 40, 0);
    top: -5px;
  }
`