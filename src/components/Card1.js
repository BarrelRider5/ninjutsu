import React from 'react'
import styled from '@emotion/styled'

const Card1 = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: Column;
  padding: 60px;
  width: 100%;

  ul {
    list-style: none;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
  }
`

const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  text-align: center;
  width: 100%;

  h3 {
    color: #555;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;  
    width: 70%;
  }

  p {
    color: #777;
    font-size: 20px;
    width: 70%;
  }

  a {
    color: #D26E4B;
    font-size: 20px;
    transition: .3s ease all;
    width: 70%;

    &:hover {
      color: #333
    }
  }
`

export { Card1, Card, Text };

/*
// This is the Card component

const { details = { header, description, points }, imageFirst } = this.props

<div>
  {imageFirst && <img />}
  <div>
    <h2>{header}</h2>
    <p>{description}</p>
    <ul>
      {points.map(point => <li>{point}</li>)}
    </ul>
  </div>
  {!imageFirst && <img />}
</div>

// This is the parent component calling the Card component

import { cards } from '../utils'

{
  cards.map((card, index) => <Card details={card} imageFirst={!(index % 2)} />)
}

// this is in a separate file (utils.js or something) that the parent component calls in, maps over, and passes to the Card component

export const Cards = [{
  header: 'Header text',
  description: 'description text',
  points: [
    'point one',
    'point two',
    'point three'
  ]
},
{
  header: 'Header text',
  description: 'description text',
  points: [
    'point one',
    'point two',
    'point three'
  ]
}]
*/