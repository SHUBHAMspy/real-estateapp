import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import BannerData from './BannerData'
import './style.css'

const Banner = () => {
  const settings = {
    arrows:false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <div className="banner">

      <div className="container">

        <div  >
          <Slider {...settings} >
            {
              BannerData.map((data,index) => (
                <div className="slider-container" key={data.id}>

                  <div className="slider-item" >
                    <img src={data.img} alt={data.heading} className="banner-img"/>
                    <div className="banner-content">
                      <p className="banner-subtitle">{data.title}</p>

                      <h2 className="banner-title">{data.heading}</h2>

                      <p className="banner-text">
                        starting at $ <b>{data.price}</b>.00
                      </p>

                      <Link to={'/products'} className="banner-btn">Shop now</Link>

                    </div>
                  </div>
                </div>

              ))
            }

          </Slider>

          
        </div>
      </div>
    </div>
  )
}

export default Banner