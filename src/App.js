import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="App">
      {!isSignedUp && !isSignedIn && (
        <SignUp setUserDetails={setUserDetails} setIsSignedUp={setIsSignedUp} />
      )}
      {isSignedUp && !isSignedIn && (
        <SignIn userDetails={userDetails} setIsSignedIn={setIsSignedIn} />
      )}
      {isSignedIn && <Welcome userDetails={userDetails} />}
    </div>
  );
}

export default App;
