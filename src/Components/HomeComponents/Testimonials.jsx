import React, {useRef} from 'react'
import styled from 'styled-components'
import {H3, P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import topCornerStripe from '../../assets/topCornerStripes.png'
import bottomCornerStripe from '../../assets/bottomCornerStripes.png'
import arrowWhite from '../../assets/slidArrowRight.png'
import arrowWhiteLeft from '../../assets/arrowWhiteLeft.png'
import TestiCard from './TestiCard'
import Slider from 'react-slick'


const Testimonials = () => {
    const slider = useRef(null)
   
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,

                }
            }
        ]
    }
  return (
    <StyledTestimonials>
        <img className='topCorner' src={topCornerStripe} alt="top corner stripe" />
        <img className='bottomCorner' src={bottomCornerStripe} alt="bottom corner stripe" />
        <div className="testimonials-container">
            <div className="testimonials-text-container">
            <P mobileFontSize="0.6875rem" color={theme.color.dark} fontSize={"1.25rem"} fontWeight={500}>Project Presentation</P>    
            <H3 mobileFontSize="1.554375rem" color={theme.color.dark} fontWeight={500}>
            See the results of our training
            </H3>
            <P mobileFontSize="0.6875rem" color={theme.color.dark} fontSize={"1.25rem"} fontWeight={500}>
            Here are video snippets of what our students are able to do after their training
            </P>
            </div>
            <div className="testi-slider">
            <Slider {...Settings} ref={slider}>
                <TestiCard/>
                <TestiCard/>
                <TestiCard/>
                <TestiCard/>
                <TestiCard/>
            </Slider>
           <div className="slide-container">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickPrev()} />
                <img src={arrowWhite} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickNext()} />
            </div>
           </div>
       </div>
        </div>
     
    </StyledTestimonials>
  )
}

export default Testimonials

const StyledTestimonials = styled.div`
    padding: 10% 2% 10% 2%;
    position: relative;
    background-color: ${theme.color.tertiary};
    z-index: 1;
    height: 100vh;
    @media (max-width: 768px) {
        height: 80vh;
    }
       .topCorner{
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        z-index: -1; 
        filter: grayscale(100%);
        opacity: 20%;
        }
        .bottomCorner{
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 20%;
        width: 30%;
        filter: grayscale(100%)
        }
    
    .testimonials-container{
        position: relative;
        margin-bottom: 7.5rem;
        z-index: 3;
      
    }
    .testimonials-text-container{
        margin-bottom: 4.9375rem;
    }
    .testi-slider{
        padding: 0 0% 0 7%;
    }
    .slide-container{
        position: absolute;
        top: 2.8rem;
        right: 6.5rem;
        @media (max-width: 768px){
            top: -1rem;
            right: 2rem;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            .arrow{
                cursor: pointer;
            }
        }
    }
`