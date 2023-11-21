import React, { useState } from 'react';
import './UserProfile.css'; 
import Button from '@mui/material/Button';

const UserProfile = ({ name, age = 0 }) => {
  const [userAge, setUserAge] = useState(age);

  const increaseAge = () => {
    setUserAge(prevAge => prevAge + 1);
  };

  const decreaseAge = () => {
    setUserAge(prevAge => (prevAge > 0 ? prevAge - 1 : 0));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p>Name: SKCET{name}</p>
        <p>Age: {userAge}</p>
      </div>
      <div className="button-container">
        <Button onClick={increaseAge} variant="contained" size="medium">Get Older</Button>
        <Button onClick={decreaseAge} variant="contained" size="medium">Make Younger</Button>
      </div>
    </div>
  );
};

export default UserProfile;