import React from 'react';
import Top from './components/Top';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="InstructorApp">
  <Top /*buttonText="changedText"*/>
    <h2>
      The head instructor at Bujinkan Aryu Dojo Utah, Zoran Korajac, is an officially licensed Bujinkan instructor, and has been studying the art of Ninjutsu since 2001.
    </h2>
    <p>
      At Bujinkan Aryu Dojo Utah, we study and teach the art of Ninjutsu. Students of our dojo enjoy the thrill of exploring traditional ninja tactics and applying them to modern self-defense training.
    </p>
  </Top>
  <Banner>
    <h1>What is Bujinkan?</h1>
    <p>
      The Bujinkan (武神館) is an international martial arts organization based in Japan and headed by Masaaki Hatsumi. The main approach includes gaining compliance through pain and utilising self-defense techniques. The Bujinkan largely focuses on “taijutsu” (body movement/skills) as well as other skills of ninjutsu (ninpo tactics and strategies) and happo biken jutsu (various modern and traditional weapons). 
    </p>
    <a href="https://en.wikipedia.org/wiki/Bujinkan" target="_blank">Learn More</a>
  </Banner>
  <Card1>
    <Card>
      <Text>
        <h3>Ranking</h3>
        <h5>段 (dan)</h5>
          <p>At Bujinkan Dojo, students advance and progress through a ranking system by demonstrating proficiency in various ninjutsu techniques and a firm comprehension of the art of ninjutsu.</p>
        <a href="https://en.wikipedia.org/wiki/Bujinkan#Dan_levels" target="_blank">Learn More</a>
      </Text>
      <img src="resources/images/Yon dan Rank.JPG" alt="yon dan ranking"/>
    </Card> 
    <Card>
      <img src="resources/images/instructor license.JPG" alt="instructor license"/>
      <Text>
        <h3>Certified Instructor</h3>
        <h5>士道師 (shidōshi)</h5>
        <p></p>
        {/*<a href="https://en.wikipedia.org/wiki/Bujinkan#Dan_levels" target="_blank">Learn More</a>*/}
      </Text>
    </Card>
  </Card1>
</div>
