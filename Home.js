import React, { useContext } from 'react';
import NavyContext from './Context';

const Home = () => {
  const { goTo } = useContext(NavyContext);

  const handleNavigate = () => {
    goTo(Home);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Go to About Page</button>
    </div>
  );
};

export default Home;
