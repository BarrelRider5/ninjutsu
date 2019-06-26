import React from 'react';
import Top from './components/Top';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="ClassesApp">
  <Top /*buttonText="changedText"*/>
    <h2>
      At Bujinkan Aryu Dojo, trainings are held several times a week or by arrangement. 
    </h2>
    <p>
      At Bujinkan Aryu Dojo, we study and teach the art of Ninjutsu. Students of our dojo enjoy the thrill of exploring traditional ninja tactics and applying them to modern self-defense training.
    </p>
  </Top>
  <Banner>
    <h1>Training</h1>
    <p>
      Training is centered on studying the 9 schools of Ninjutsu and applying traditional fighting techniques in today's time. It is the connection of traditional and modern times. Besides the traditional weapons of ancient Japan (katana, tanto, bo, hanbo, jutte, kusari fundo, kyoketsu shoge…), emphasis is also given to the weapons that are most commonly found on the streets today (knife, pistol, stick…).
    </p>
  </Banner>
  <Card1>
    <Card>
      <Text>
        <h3>体術 (Taijutsu)</h3>
        <h5>Hand to hand combat and submission techniques</h5>
        <p>Hone your body and mind to turn yourself into a living weapon. Learn Taijutsu so you can break people's arms in self-defense. They will never bother you again.</p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
      <img src="resources/images/class2.JPG" alt="hatsumi sensei daisho"/>
    </Card> 
    <Card>
      <img src="resources/images/curved_spear_forward.JPG" alt="ninjutsu"/>
      <Text>
        <h3>忍術 (Ninjutsu)</h3>
        <h5>Traditional and modern self-defense tactics</h5>
        <p>Are you the coolest person you know? If you're not a ninja, then the answer is no. Fix that problem today by joining our dojo and learning to become a ninja!</p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
    </Card>
  </Card1>
</div>
