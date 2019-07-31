import React from 'react';
import Top from './components/Top';
import Banner from './components/Banner';
import { Card1, Card, Text } from './components/Card1';

export default () => <div className="Register">
  <Top /*buttonText="changedText"*/ image="classongrass3.jpg">
    <h2>
      Join us in the beautiful outdoors and in our dojo as we build confidence and inner strength through the profound art of ninjutsu.
    </h2>
    <p>
    </p>
  </Top>
  <Banner>
    <h1>Registration Information</h1>
    <p>
      To register for a class, please contact us via phone, text, or email at the number and address listed at the bottom of this page.<br></br> 
    </p>
    <a href=""></a>
  </Banner>
  <Card1>
    <Card>
      <Text>
        <h3>2019-2020 Class Schedule:</h3>
        <h5>Tuesdays 3:00-5:00<br></br>Thursdays 4:00-6:00<br></br></h5>
        <p>Location: 1065 S. Woodland Hills Dr. Woodland Hills<br></br><br></br>Classes start Tues, Sep 3<sup>rd</sup>/Thurs, Sep 5<sup>th</sup> and end Tues, May 26<sup>th</sup>/Thurs, May 28<sup>th</sup></p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
      <img src="resources/images/class2.jpg" alt="hatsumi sensei daisho"/>
    </Card> 
    <Card>
      <img src="resources/images/classongrass4.jpg" alt="ninjutsu"/>
      <Text>
        <h3>Tuition:</h3>
        <h5></h5>
        <p>
          Weekly Classes (Tues OR Thurs) 2 hours/week<br></br>$225 / semester<br></br>$425 / school year (Sept.-May)<br></br><br></br>
          Biweekly Classes (Tues & Thurs) 4 hours/week<br></br>$400 / semester<br></br>$750 / school year (Sept.-May)<br></br><br></br>
          *Payment is due by the first day of class- cash, check, or Venmo
        </p>
        <a href="google.com">{/*Learn More*/}</a>
      </Text>
    </Card>
  </Card1>
</div>
