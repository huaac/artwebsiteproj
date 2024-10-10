import React, {useState} from 'react';
import './FAQ.css'

const FAQ = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I schedule my free class?",
      answer: "We offer a free introductory lesson for new students ages 5 to 17. Adults will need to pay for their first class. You first should look at the schedule at the studio you would like to attend. When you have figured out a day and time that works with your schedule you can then call the studio to schedule that class. Please know that not all of our classes may be available and you might want to have a back up class time in mind. When you contact us please supply us with your name, student's name and a number to reach you. We will get back to you shortly to confirm your appointment."
    },
    {
      question: "Is there a class that would better suit my child based on their age?",
      answer: "We have mixed ages in all the classes (except the adult class which is only 13 and above). All the classes are taught with individual instruction for each student. Whether the student is 5 or 10 years old they are going to get separate instruction based on their age and ability."
    },
    {
      question: "Do your students work on whatever project they want?",
      answer: "Our studio has a structured program. As each student comes on board they continue to graduate through our levels  as their ability grows. Each student works on their own project at their own pace. We find this program to work as it helps to keep the students on track and working for an end goal. Students of all ages find a continued excitement to move to the next level and keeps their enthusiasm for art."
    },
    {
      question: "What mediums do you use?",
      answer: "We use traditional mediums. These include Pastel, Watercolor, Oil and Charcoal."
    },
    {
      question: "Do I have to start class at the beginning of the month?",
      answer: "You are able to start anytime. We will pro-rate the month if you start in the middle of the month. We run classes year round and only cancel classes occasionally for certain holidays."
    },
    {
      question: "What supplies will I need to attend class?",
      answer: "In the first class we always have studio supplies for you to use. When you decide to continue classes with us you will need to purchase supplies. We sell all the supplies you will need at the studio. The supplies we use and sell are of the highest quality. Our prices are competitive with all the local stores."
    },
    {
      question: "My schedule is very unpredictable, how do we keep from losing out on art classes we paid for?",
      answer: "We work with you to help fit art into your life. We set it up to have you attend once a week at a specific day and time every week. In accordance with our studio policies, if you call the studio and cancel your class before 12pm, you will get a make up class. If you don't cancel before 12pm day of your class, you will lose that class. "
    },
    {
      question: "I am really curious how my child will do in your class, can I stay and watch?",
      answer: "We always welcome the first time students to have their parents watch their first class with us (from outside the studio).  This helps to keep the studio as a professional teaching environment and limits distractions."
    },
    {
      question: "Do you offer discounts?",
      answer: "We have a couple of ways for our students to save their pennies. If you pay for 3 full months (12 weeks) in advance we offer a discount. We offer sibling discounts.If you refer a friend and they start classes with us we thank you with a free class for each person referred."
    },
    {
      question: "Do you work with Charter Schools?",
      answer: "Yes. We offer a wonderful chance to have the Charter schools pick up the bill for your art education. If you are currently involved with a Charter school and have questions regarding billing your school for classes just inquire at the studio."
    },
    {
      question: "What is your teacher to student ratio?",
      answer: "We have 5 to 6 students working with one teacher. As the class grows, so do the number of teachers."
    },
  ];

  const firstHalf = faqs.slice(0, Math.ceil(faqs.length / 2));
  const secondHalf = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <div className="faq-columns">
        <div className="faq-column">
          {firstHalf.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleTab(index)}>
                {faq.question}
                <span className="faq-toggle">{openTab === index ? '-' : '+'}</span>
              </div>
              {openTab === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>

        <div className="faq-column">
          {secondHalf.map((faq, index) => (
            <div key={index + firstHalf.length} className="faq-item">
              <div className="faq-question" onClick={() => toggleTab(index + firstHalf.length)}>
                {faq.question}
                <span className="faq-toggle">{openTab === index + firstHalf.length ? '-' : '+'}</span>
              </div>
              {openTab === index + firstHalf.length && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;