import React, { useState } from 'react';

const chatbotQuestions = [
  'How can I check the availability of train seats?',
  'How do I book a train ticket?',
  'How can I cancel my train ticket?',
  'What are the different payment methods available?'
];

const chatbotAnswers = [
  'You can check the availability of train seats by entering your travel details such as the source and destination stations, travel date, and the class of travel. Once you provide these details, the app will show you the list of available trains along with seat availability for each class.',
  'To book a train ticket, follow these steps:\n1. Open the app and log in to your account.\n2. Enter your journey details including the source, destination, and travel date.\n3. Select the desired train and class.\n4. Choose your seat preferences and enter passenger details.\n5. Proceed to payment and complete the transaction.\n6. You will receive a booking confirmation and e-ticket via email and SMS.',
  'To cancel your train ticket, follow these steps:\n1. Log in to your account on the app.\n2. Go to the \'My Bookings\' section.\n3. Select the ticket you wish to cancel.\n4. Click on the \'Cancel Ticket\' option.\n5. Confirm your cancellation request.\n6. You will receive a cancellation confirmation, and the refund amount will be processed as per the cancellation policy.',
  'The app supports multiple payment methods for your convenience. You can pay using:\n1. Credit or Debit Cards (Visa, MasterCard, Rupay)\n2. Net Banking from various banks\n3. UPI (Unified Payments Interface)\n4. Mobile Wallets (Paytm, PhonePe, etc.)\n5. Cash on Delivery (if available)\nChoose your preferred payment method at the time of checkout to complete your booking.'
];

const Welcome = ({ userDetails }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  };

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  return (
    <div className="fade-in">
      <h1>Welcome, {userDetails.name}!</h1>
      <h5>Rail Mate is a chatbot designed to assist users with common queries related to train travel. It provides instant answers to questions such as checking seat availability, booking tickets, canceling reservations, and payment methods. </h5>
      <button onClick={handleChatbotClick}>
        {showChatbot ? 'Hide Chatbot' : 'Open Chatbot'}
      </button>

      {showChatbot && (
        <div>
          <h3>Chatbot - Rail Mate</h3>
          <ul>
            {chatbotQuestions.map((question, index) => (
              <li key={index}>
                <button onClick={() => handleQuestionClick(index)}>{question}</button>
              </li>
            ))}
          </ul>

          {selectedQuestionIndex !== null && (
            <div className="fade-in">
              <h4>Answer:</h4>
              <p>{chatbotAnswers[selectedQuestionIndex]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Welcome;
