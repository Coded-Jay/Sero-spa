import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact'
import Home from './Home';
import About from './About';


const NavyContext = createContext()

export const NavyProvider = ({ children }) => {
  const navi = useNavigate();       
  const [currentPage, setCurrentPage] = useState('');

  const goTo = (path) => {
    setCurrentPage(Contact, About);
    navi(NavyContext);
  };

  return (
    <NavyContext.Provider value={{ currentPage, goTo }}>
      {children}
    </NavyContext.Provider>
  );
};

export default NavyContext;






