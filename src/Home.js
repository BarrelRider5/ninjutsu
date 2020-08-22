import React from 'react';
import Top from './components/Top';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="Home">
  <Top /*buttonText="changedText"*/ image="Phil.jpg" >
    <h2>
      Achieve greater confidence as you train in the traditional style of Japan's ninja warriors
    </h2>
    <p>
      At Bujinkan Aryu Dojo, we study and teach the art of Ninjutsu. Our students enjoy the thrill of exploring traditional ninja tactics and applying them to modern self-defense training.
    </p>
  </Top>
  <Banner>
    <h1>What is Ninjutsu?</h1>
    <p>
      Ninjutsu (忍術) is the ancient Japanese art of the Ninja, and is now practiced as a non-competitive martial art with focus on self-defense, awareness, discipline, safety, and balance. Students compete with themselves and not against others. Ninjutsu combines training of the body and mind through an empowering approach to everyday life.
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
      <img src="resources/images/hatsumi sensei daisho.jpg" alt="hatsumi sensei daisho"/>
    </Card> 
    <Card>
      <img src="resources/images/curved_spear_forward.jpg" alt="ninjutsu"/>
      <Text>
        <h3>The Art of Ninjutsu</h3>
        <h5></h5>
        <p>To train in the art of ninjutsu is to strengthen and discipline one's mind, body, and spirit through the traditional Martial Art of the Ninja.</p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
    </Card>
  </Card1>
</div>
