import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../context/SearchContext';


import MobileMenu from '../mobileMenu/MobileMenu';
import './style.css';

const MobileNavbar = ({visibility}) => {
  const { favourites,addHeadlines,addToFavourites,removeFromFavourites} = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [openSidebar,setOpenSidebar] = useState(false);

  const credentials = JSON.parse(localStorage.getItem('credentials'));
  
  const closeMenu = (close) => {
    setOpen(close);
  }
  
  const closeSidebar = (close) => {
    setOpenSidebar(close);
  }

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpen(open) : setOpen(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 ? setOpenSidebar(openSidebar) : setOpenSidebar(false)
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openSidebar])
  
  return (
    <>
      <div className="mobile-bottom-navigation">

        <button className="action-btn"  onClick={() => setOpen(!open)}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        

        <Link to={'/'}>
          <button className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>
        </Link>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">{favourites.length}</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>

      </div>
      {open && <MobileMenu open={open} setClose={closeMenu}/>}
      
    </>
  )
}

export default MobileNavbar