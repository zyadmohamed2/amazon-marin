import React from 'react'
import Slider from "react-slick";
import './index2.scss'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function MySwiper2() {

    const [images, setImage] = useState([]);
    

    useEffect(() => {
        axios
          .get(`https://shipping.somee.com/api/Website/GetImages`, {
            params: {
              populate: "*",
            },
          })
          .then((res) => {
            console.log(res.data);
            setImage(res.data);
          });
      }, []);
       

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    

    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll:1,
    //           initialSlide: 1
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };

    return (
      <div>

      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />


      <Slider {...settings}>
          {
            images.map((image,index) => (
              <div>
              <div>
                <img src={image.photoPath} className='img55'/> 
              </div>
              </div>
            ))
          }
      </Slider>
      
        </div>
    );
  
  











    }

{/* <div className="slider-container">
<Slider {...settings}>
{
 images.map((image,index) => (
  index === 5 ?(  
  <div key={index}>
  <div className='main5 col-12 d-flex flex-wrap' style={{backgroundColor:"rgb(238, 212, 132)"}}>
   <div className='textdiv col-lg-4 col-md-4 col-sm-12'>
   <h1 className='h55'>
 Enjoy Full Coverage With Transatlantic Services
   </h1>
   <p className='p55'>
 Are you looking for a solution to protect your cargo from financial losses during transit?
  </p>
   </div>
   <div className='imgdiv5  col-lg-8 col-md-8 col-sm-12'>
  <img src={image.photoPath} className="img55" />
   </div>
  </div>
 </div>
   ): null
 ))       
}
{
  images.map((image,index) => (   
    index === 1 ?(  
    <div key={index}>
    <div className='main5 col-12 d-flex'  style={{backgroundColor:"gainsboro"}}>
     <div className='textdiv col-lg-4 col-md-4 col-sm-12'>
     <h1 className='h55'>
   Enjoy Full Coverage With Transatlantic Services
     </h1>
     <p className='p55'>
   Are you looking for a solution to protect your cargo from financial losses during transit?
    </p>
     </div>
     <div className='imgdiv5  col-lg-8 col-md-8 col-sm-12'>
    <img src={image.photoPath} className="img55" />
     </div>
    </div>
   </div>
    ): null
  ))
}
{
     images.map((image,index) => (
      index === 2 ?(
      <div key={image.id}>
      <div className='main5 col-12 d-flex'   style={{backgroundColor:"rgb(238, 212, 132)"}}>
       <div className='textdiv col-lg-4 col-md-4 col-sm-12'>
       <h1 className='h55'>
     Enjoy Full Coverage With Transatlantic Services
       </h1>
       <p className='p55'>
     Are you looking for a solution to protect your cargo from financial losses during transit?
      </p>
       </div>
       <div className='imgdiv5  col-lg-8 col-md-8 col-sm-12'>
      <img src={image.photoPath} className="img55" />               </div>
      </div>
     </div>     
      ): null
     ))
}
{
    images.map((image,index) => ( 
      index === 5 ?(
      <div key={image.id}>
      <div className='main5 col-12 d-flex' style={{backgroundColor:"gainsboro"}}>
       <div className='textdiv col-lg-4 col-md-4 col-sm-12'>
       <h1 className='h55'>
     Enjoy Full Coverage With Transatlantic Services
       </h1>
       <p className='p55'>
     Are you looking for a solution to protect your cargo from financial losses during transit?
      </p>
       </div>
       <div className='imgdiv5  col-lg-8 col-md-8 col-sm-12'>
      <img src={image.photoPath} className="img55" />
       </div>
      </div>
     </div>
        ): null
    ))
}

</Slider>
</div> */}