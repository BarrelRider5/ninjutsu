import React from 'react'
import styled from '@emotion/styled'
import Button from './Button'

export default ({ children, buttonText, buttonLink }) => (
  <Wrapper>
    <Mask />
    <Text>
      {children}
    </Text>
    <Button text={buttonText || "Experience Ninjutsu for just $7"} link={buttonLink || "/cart"} />
  </Wrapper>
)

const Mask = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`

const Text = styled.div`
  margin: 0;
  max-width: 1000px;
  padding-top: 275px;
  position: relative;
  text-align: center;
  width: 80%;
`

const Wrapper = styled.div`
  align-items: center;
  background: url('https://todaidojo.com/wp-content/uploads/yari-v-katana-1600x900.jpg') center center no-repeat;
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
  height: 100vh;
`
