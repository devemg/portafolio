import { Outlet } from 'react-router-dom';
import { MenuComponent } from '../menu/MenuComponent';
import './PortfolioApp.scss';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useEffect } from 'react';



export const PortfolioApp = () => {
  const { sendEvent } = useAnalytics();
  useEffect(() => {
    sendEvent('StartApp');
  }, []);
  
  return (
    <>
    <div className="container">
      <MenuComponent/>
      <div className="container-outlet">
        <Outlet></Outlet>
      </div>
    </div>
     {/* <footer>&copy; 2023 - Emely Garcia - All rights reserved</footer> */}
    </>
  )
}
