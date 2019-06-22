import React from 'react';
import Top from './components/Top';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="Home">
  <Top /*buttonText="changedText"*/>
    <h2>
      Ninjutsu creates confident, enlightened warriors
    </h2>
    <p>
      Learn to persevere through life’s challenges. Connect to over 500 years of Warriorship. Study the methods of Japan’s most elite warriors – the Ninja and Samurai. Hone your body and mind.
    </p>
  </Top>
  <Banner>
    <h1>What is Ninjutsu?</h1>
    <p>
      Ninjutsu (忍術) translates as the “art of perseverance.” While a relatively modern term, it refers to the skills and method of the Ninja that occupied the Iga and Koka regions of feudal Japan. We are part of the Bujinkan (武神館) founded by Masaaki Hatsumi. The Bujinkan studies nine lineages that trace back to feudal Iga. The training is comprised of philosophy and strategy, hand-to-hand combat, and various weaponry.
    </p>
  </Banner>
  <Card1>
    <Card>
      <Text>
        <h3>Dr. Masaaki Hatsumi</h3>
        <h5>34<sup>th</sup> Grandmaster of Togakure Ryu</h5>
        <p>I believe that Ninpo, the higher order of Ninjutsu, should be offered to the world as a guiding influence for all martial artists. The physical and spiritual survival methods eventually immortalized by Japan’s ninjas were, in fact, one of the sources of Japanese martial arts.</p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
      <img src="resources/images/hatsumi sensei daisho.JPG" alt="hatsumi sensei daisho"/>
    </Card> 
    <Card>
      <img src="resources/images/curved_spear_forward.JPG" alt="ninjutsu"/>
      <Text>
        <h3>The Art of Ninjutsu</h3>
        <h5></h5>
        <p>To train in the art of ninjutsu is to strengthen and discipline one's mind, body, and spirit through the traditional Martial Art of the Ninja. </p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
    </Card>
  </Card1>
</div>
