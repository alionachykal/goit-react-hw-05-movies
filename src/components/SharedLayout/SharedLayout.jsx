

import { Suspense } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
// import css from './SharedLayout.module.css';
// import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import  css  from './SharedLayout.module.css';



const SharedLayout = () => {
  return (
    <div className={css.container}>
      
      <header className={css.header}>
        <Navigation />
      </header>
        <main><Outlet/></main>
        
   
    </div>
  );
};
export default SharedLayout;