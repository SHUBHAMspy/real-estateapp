import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuData from './MenuData';
import './style.css';

const MobileMenu = ({open,setClose}) => {
  const [openMenu, setOpenMenu] = useState(open);
  const [activeIndex, setActiveIndex] = useState(null);
  const credentials = JSON.parse(localStorage.getItem('credentials'))
  const navigate = useNavigate();
  
  //console.log(openMenu);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const logout = () => {
    localStorage.removeItem('credentials');
  }

  let active = openMenu  ? "active" : "";
  
  useEffect(() => {
    setOpenMenu(open)
    
  }, [open]);
  
  return (
    <>
      <div className='overlayy'></div>
          <nav className={`mobile-navigation-menu has-scrollbar ${active}`} >

            <div className="menu-top">
              <h2 className="menu-title">Menu</h2>

              <button className="menu-close-btn" 
                onClick={() => {
                  setOpenMenu(!openMenu); 
                  //console.log(openMenu); 
                  setClose(!openMenu)}
                } 
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="mobile-menu-category-list">

              <li className="menu-category">
                <Link to={'/'} className="menu-title">Home</Link>
              </li>

              {
                MenuData.map((menuItem,index) => {
                  const active = index === activeIndex ? "active" : "";
                  return (

                    <li className="menu-category" key={index}>
                      <button className="accordion-menu" onClick={() => handleClick(index)}>
                        <p className="menu-title">{menuItem.title}</p>
                        <div>
                          { activeIndex === index 
                            ? <ion-icon name="remove-outline" className="remove-icon" ></ion-icon>
                            : <ion-icon name="add-outline" className="add-icon"  ></ion-icon>
                          }
                        </div>
                      </button>
                      <ul className={`submenu-category-list ${active}`}>
                        {
                          menuItem.subCategories.map((subCategory,index) => (
                            <li className="submenu-category" key={index}>
                              <Link to={'#'} className="submenu-title">{subCategory.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </li>
                  )
                })
              }

              
              <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
              </li>

            </ul>

            <div className="menu-bottom">

              <ul className="menu-category-list">

                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                  </button>

                  <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">USD &dollar;</a>
                    </li>

                    <li className="submenu-category">
                      <a href="#" className="submenu-title">EUR &euro;</a>
                    </li>
                  </ul>
                </li>

              </ul>

              
            </div>
            <div className="side-menu-footer">
              
              {credentials ? (
                <>
                  <div className="avatar">
                    <ion-icon name="person-outline"></ion-icon>
                  </div>
                  <div className="user-info">
                    <h5>{credentials.name}</h5>
                    <p>{credentials.email}</p>
                  </div>
                  <button className='logout-icon' 
                    onClick={() => {
                      if(credentials){
                        logout();
                        navigate('/')
                      }
                    }}>
                    <ion-icon name="exit-outline"></ion-icon>
                  </button>
                </>
              )
                : <Link to='/login' style={{color:'white',margin:'auto'}}>Login</Link>
              }
            </div>
          </nav>
    </>
  )
}

export default MobileMenu