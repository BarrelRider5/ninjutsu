import React from 'react';
import './App.css';
import Top from './components/Top';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="App">
  <Header />
  <Top /*buttonText="changedText"*/>
    <h2>
      Ninjutsu creates confident enlightened warriors
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
        <h3>Join a 500+ year tradition of elite warriors</h3>
        <p>Ninjutsu has over 500 years history of Warriorship. Become part of a tradition that connects to the Ninja and Samurai of Feudal Japan.</p>
        <a>Learn More</a>
      </Text>
      <img src="https://todaidojo.com/wp-content/uploads/muto-dori-2.jpg" alt="two ninja dudes"/>
    </Card> 
    <Card>
      <img src="http://martial-arts-images.advancemartialartsconnect.com/martial-arts-resources/martial-arts-styles/ninjutsu.png" alt="ninja"/>
      <Text>
        <h3>Hone your body and mind with ninjutsu training</h3>
        <p>Develop warrior level confidence by studying the art, tactics and methods of the Ninja and Samurai.</p>
        <a>Learn More</a>
      </Text>
    </Card>
  </Card1>
  <Footer />
</div>
