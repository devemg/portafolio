import { Outlet } from 'react-router-dom';
import { MenuComponent } from '../menu/MenuComponent';
import './PortfolioApp.scss';



export const PortfolioApp = () => {
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
