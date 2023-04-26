import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import myImg from '../../public/illumy.png';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "ease"
    };

    const myStl = {
      'textAlign': 'center'
    }

    const con = {
      'display': 'block',
      'margin': 'auto'
    }
    return (
      <div style={myStl}>
        <h2>Catalogue</h2>
        <br/> 
        <Slider {...settings}>
          <div>
            <Image style={con} src={myImg} alt="pro" width={300} height={300} />
          </div>
          <div className="con">
          <Image style={con} src={myImg} alt="pro" width={300} height={300}/>
          </div>
          <div className="con">
          <Image style={con} src={myImg} alt="pro" width={300} height={300}/>
          </div>
          <div className="con">
          <Image style={con} src={myImg} alt="pro" width={300} height={300}/>
          </div>
          <div className="con">
          <Image style={con} src={myImg} alt="pro" width={300} height={300}/>
          </div>
          <div className="con">
          <Image style={con} src={myImg} alt="pro" width={300} height={300}/>
          </div>
        </Slider>
      </div>
    );
  }
}