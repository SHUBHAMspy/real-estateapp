import React from 'react'
import { Link } from 'react-router-dom'
import MenuData, { NavbarMenu } from '../../mobile/mobileMenu/MenuData'
import './style.css'

const NavBar = () => {
  return (
    <>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to={'/'} className="menu-title">Home</Link>
            </li>

            <li className="menu-category">
              <Link className="menu-title" to={'/products'}>Property</Link>
              <div className="dropdown-panel">
                  {
                    NavbarMenu.map((navmenuItem,index) => (
                      <ul className="dropdown-panel-list" key={index}>
                        <li className="menu-title">
                          <Link to={'/products'}>{navmenuItem.title}</Link>
                        </li>
                        {
                          navmenuItem.subCategories.map((navsubmenu,index) => (
                            <li className="panel-list-item" key={index}>
                              <Link to={'/products'}>{navsubmenu.name}</Link>
                            </li>
                          ))
                        }

                        {/* <li className="panel-list-item">
                          <Link to={'/products'}>
                            <img src={navmenuItem.img} alt="collection" width="250" height="119"/>
                          </Link>
                        </li> */}
                      </ul>
                    ))
                  }
                
              </div>
            </li> 
            

            {
              MenuData.map((navmenuItem,index) => {
                return(
                  <li className="menu-category" key={index}>
                    <Link to={'/products'} className="menu-title">{navmenuItem.title}</Link>
                    <ul className="dropdown-list">
                      {
                        navmenuItem.subCategories.map((navsubmenu,index) => (
                          <li className="dropdown-item" key={index}>
                            <Link to={'/products'}>{navsubmenu.name}</Link>
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
        </div>
      </nav>
    </>
  )
}

export default NavBar
