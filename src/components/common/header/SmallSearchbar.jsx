
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.css';

const SmallSearchbar = () => {

  const [nameQuery,setNameQuery] = useState("");
  const [hideResult,sethideResult] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringUser, setIsHoveringUser] = useState(false);
  const navigate = useNavigate();
  const credentials = JSON.parse(localStorage.getItem('credentials'))
  // const [getProduct,{loading,error,data}] = useLazyQuery(getProductByName,{
  //   variables:{
  //     "filters": {
  //       "name": {
  //         "contains": nameQuery
  //       }
  //     }
  //   }
  // })

  // useEffect(() => {
  //   if(nameQuery.length > 1 ){
  //     getProduct();
  //     sethideResult(false);
  //   }
  //   else{
  //     sethideResult(true);
  //   }
  // }, [nameQuery])
  
  
  const handleChange=(e)=>{
    setTimeout(()=>{
      setNameQuery(e.target.value)  
    },1000)

  }

  const handleLoginMouseOver = () => {
    setIsHoveringUser(true);
  };

  const handleLoginMouseOut = () => {
    setIsHoveringUser(false);
  };
  const handleCartMouseOver = () => {
    setIsHovering(true);
  };

  const handleCartMouseOut = () => {
    setIsHovering(false);
  };
  
  const logout = () => {
    localStorage.removeItem('credentials');
  }

  const HoverableDivCart = ({message}) => {
    return (
      <div className='whole-cart-window' >
        <div className='cart-wrapper'>
          <p>
            {credentials ?`${message.para}`: 'login to access the cart'}
          </p>
          <Link to={credentials ? '/cart' : '/login'} className='buy-now'>{credentials? `${message.button}`: 'Login to access '}</Link>
          
        </div>
      </div>
    )
  }
  const HoverableDivLogin = ({message}) => {
    return (
      <div className='login-window' >
        <div className='cart-wrapper'>
          <p>
            {credentials ?`${message.para}`: 'Click login or the button below'}
          </p>
          <Link 
            to={credentials ? '/' : '/login'} 
            className='buy-now'
            onClick={() => {if(credentials) logout()}}
          >
            {credentials? `${message.button}`: 'Login'}
          </Link>
          
        </div>
      </div>
    )
  }

  //const credentials?{jwt,name}:credentials = JSON.parse(localStorage.getItem("credentials"));

  return (
    <div className="header-main">
      <div className="container">

        <Link to={'/'} className="header-logo">
          <h1>HomeLand.</h1>
        </Link>

        <div className="header-search-container">

          <input onChange={handleChange}  type="search" name="search" className="search-field" placeholder="Enter your city name..."/>

          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          
          <div className='search-item' hidden={hideResult}>
            {/* {data &&
              data.products.data.map(({id,attributes}) => (
                <div style={{
                  marginBlock: '10px',
                  border: '1px solid var(--cultured)',
                  padding: '15px',
                  borderRadius: 'var(--border-radius-md)',
                  color: 'var(--eerie-black)'
                }} 
                  key={id} 
                  onClick={() => setNameQuery("")} 
                >
                  <Link to={`/product/${id}`} >{attributes.name}</Link>
                </div>
              ))
            }           */}
          </div>
        </div>

        <div className="header-user-actions">

          <button className="action-btn" style={{fontSize:"32px"}}
            onMouseOver={handleLoginMouseOver} onMouseOut={handleLoginMouseOut}
          >
            {JSON.parse(localStorage.getItem("credentials"))?.jwt 
              ?(
                <>
                  <ion-icon name="person-outline"></ion-icon>
                  <p className='username'>{JSON.parse(localStorage.getItem("credentials"))?.name}</p>
                </>
              ): <p className='loginText' onClick={() => navigate('/login') }>Login</p> 
            }
            {isHoveringUser && <HoverableDivLogin message={{para:`Email: ${credentials?.email}`,button:'Logout'}}/>}
          </button>

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default SmallSearchbar