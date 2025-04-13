import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1 style={{color:"darkblue"}}>Our Story</h1>
        <p>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza Ever! <br></br><br></br> Ever since we launched the Tastiest Pan Pizza , ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.<br></br> <hr></hr></p>
      </header>

      <div className="row">
        <div className="left">
          <img src="https://image.shutterstock.com/z/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg" alt="Sharky with a toothbrush" />
        </div>
        <div className="right">
          <h2><u>Ingredients</u></h2>
          <p>We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place.</p>
        </div>
      </div>

      <div className="row reverse">
        <div className="left">
          <h2><u>Our Chefs</u></h2>
          <p>They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.</p>
        </div>
        <div className="right">
          <img src="https://thumb1.shutterstock.com/display_pic_with_logo/2982127/437116033/stock-photo-happy-chef-437116033.jpg" alt="Sharky battling Cavity" />
        </div>
      </div>

      <div className="row">
        <div className="left">
          <img src="https://thumb9.shutterstock.com/display_pic_with_logo/175989610/669255388/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-669255388.jpg" alt="Healthy sea creatures" />
        </div>
        <div className="right">
          <p style={{fontFamily:"serif", fontSize:"30px", paddingTop:"70px", boxShadow:"inherit"}}>45 min delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
