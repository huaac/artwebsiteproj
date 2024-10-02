import React from 'react';
import './Guidelines.css'; // This assumes you are using a separate CSS file for styles

const Guidelines = () => {
  return (
    <div className="guidelines-container">
      <h1 className="header">Covid-19: Safety at the Studios</h1>
      <p className="intro">
        We provide a safe environment for our students. We are implementing various cleaning and
        sanitizing protocols as well as modifying how we teach our students.
        If after reading the details you understand them and want to start classes, please reach out to us about
        reserving a spot in class.
      </p>

      <h6>Things we will be doing to make the studios safer for our students:</h6>
      <ul>
        <li>Implementing cleaning and sanitizing protocols during and after classes.</li>
        <li>Setting up art stations for each student before the start of class.</li>
        <li>Having students clean up one at a time at the end of class.</li>
      </ul>

      <h6>Student guidelines for attending art classes:</h6>
      <ul>
        <li>Any students showing signs of sickness (coughing, running nose, etc…) will not be able to attend class.</li>
        <li>Bring a smock/apron to class: until further notice we will not be providing use of our art smocks at the studios. A shirt or something that they can wear or put on their lap that will protect their clothes will do.</li>
        <li>At this time face masks are optional.</li>
        <li>Students will be required to wash their hands:
          <ul>
            <li>Upon entering the studio, before they head to their art station.</li>
            <li>Before browsing through the art library, such as the art books and step drawing books.</li>
            <li>At the end of class before they leave.</li>
          </ul>
        </li>
        <li>Students are more than welcome to bring their water bottle to class.</li>
        <li>Students must bring their pastels, watercolor kits, and oil kits to class. We won’t be allowing students to pay to borrow studio supplies anymore.</li>
        <li>We will provide supplies for students doing their free introductory art class.</li>
        <li>Student drop off:
          <ul>
            <li>Parents will wait outside of the studio – unless for an emergency.</li>
            <li>Parents will need to drop off their children at the door and pick them up outside of the door after class is over.</li>
            <li>Drop your kids off no earlier than 5 minutes before their class start time.</li>
            <li>If you have any questions while you are outside of the studio, you can reach the program directors via the studio phones:
              <ul>
                <li>Bonita 619-508-1299</li>
                <li>La Mesa 619-857-1270</li>
                <li>Santee 619-855-2787</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Student pick up:
        <ul>
            <li>Until further notice we will suspend the art shows at the end of class.</li>
              <ul>
                <li>This will allow us ample time to clean the studios thoroughly between classes and prevent the congregation of parents inside of the studios.</li>
                <li>Please plan to pick up students one hour after class has started. We ask that you are patient with us while the students are cleaning up one by one before they leave the studio.</li>
              </ul>
          </ul>
        </li>
      </ul>
      <p className="footer">
        We appreciate your patience and understanding while we implement the above policies. This will allow us to open our studios in a safe manner.
      </p>
    </div>
  );
};

export default Guidelines;
