import React, { useContext } from 'react';
import NavyContext from './Context';
import Home  from './Home';


const Contact = () => {
  const { goTo } = useContext(NavyContext);

  const handleNavigate = () => {
    goTo(Home);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <button onClick={handleNavigate}>Go to Home Page</button>
    </div>
  );
};

export default Contact;

