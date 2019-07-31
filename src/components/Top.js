import React from 'react'
import styled from '@emotion/styled'
import Button from './Button'

const prefix = "resources/images/"

export default ({ children, buttonText, buttonLink, image, topAlign }) => (
  <Wrapper link={prefix + image} topAlign={topAlign}>
    <Mask />
    <Text>
      {children}
    </Text>
    {/*<Button text={buttonText || "Experience Ninjutsu for just $7"} link={buttonLink || "/cart"} />*/}
  </Wrapper>
)

const Mask = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  height: 100%;
`

const Text = styled.div`
  margin: 0;
  max-width: 1000px;
  justify-content: center;
  padding-top: 40px;
  position: relative;
  text-align: center;
  width: 80%;
`

const Wrapper = styled.div`
  align-items: center;
  background: url(${props => props.link}) ${props => props.topAlign ? "top" : "center"} center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 90vh;
`
