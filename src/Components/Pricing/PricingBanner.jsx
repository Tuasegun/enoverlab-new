import React from 'react'
import styled, {keyframes} from 'styled-components'
import triangle from '../../assets/pricingbanner/triangle.svg'
import triangleMobile from "../../assets/pricingbanner/triangleMobile.png"
const PricingBanner = () => {
  return (
   <StyledPricingBanner>
    <div className="adbox">
                <div className="text-box-1">
                    <h3 className='web-text'>Free PM Masterclass <br/>
                            Holding this Saturday, Jan 28 <br/> Time: 12pm - 2pm
                    </h3>

                    <h3 className='mobile-text'>Free PM Masterclass <br/>
                            Holding this Saturday, Jan 28  <br/>Time: 12pm - 2pm

                        <span></span></h3>
                </div>
                <div className="text-box-2">
                    <img className="triangleWeb" src={triangle} alt="" />
                    <img src={triangleMobile} className="triangleMobile" alt="" />
                </div>
                <div className="text-box-3">
                    <p className='web-text'>Topic: Starting a career in Product Management<br/>(What you need to know)<br/> <span><a href="https://bit.ly/EnoverlabMasterclass">Register Here</a></span></p>
                    <p className='mobile-text'>Topic: Starting a career in Product Management<br/>(What you need to know)<br/>
                    <span> <a href="https://bit.ly/EnoverlabMasterclass">
                       
                        Register Here
                        
                       </a> </span></p>
                </div>
    </div>
    </StyledPricingBanner>
  )
}

export default PricingBanner

const animate = keyframes`
    from {
        transform: scale(.95);
    }

    to {
        transform: scale(1);
    }
`


const StyledPricingBanner = styled.div`
.adbox {
        /* padding: 3.3rem 12rem 4.4rem 5rem; */
        max-height:  230px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        /* margin-bottom: 3rem; */
        @media(max-width: 768px) {
            flex-direction: column;
            max-height: 60vh;
            margin-bottom: 0rem;
        }
        .text-box-1{
            background-color: #1DB6BC;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0rem 1.2rem 0rem 10%;
         @media(max-width: 768px) {
            width: 100%;
            height: 23vh;
            padding: 0rem 0.5rem 0rem 0rem;
            justify-content: center;
            display: flex;
            align-items: center;
        }
            .web-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                font-size: 1.8rem;
                padding-top: .5rem;
                
                @media(max-width: 768px) {
                    font-size: 2.0rem;
                    display: none;
             } 
             .span{
                font-weight: 600;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                color: #0E1098;
                display: none;
                line-height: 2rem;
                font-size: 1.15rem;
                span{
                    font-weight: 600;
                }
                @media(max-width: 768px) {
                    display: block;
                    text-align: center;
                    
                }   
            }
        } 
        .text-box-2{
          background-color: #1DB6BC;
          height: auto;
          width: auto;
        .triangleWeb{
            width: 100%;
            height: 100%;
            object-fit: cover;
            @media (max-width:768px) {
                display: none;
                /* transform: rotate(90deg); */
            }
        }
        .triangleMobile{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: none;
            @media (max-width:768px) {
                display: block;
                /* display: none; */
            }
        }  
        }
        
        
        .text-box-3{
            background: #0E1098;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 0.9rem;
            @media(max-width: 768px) {
            width: 100%;
            height: 23vh;
            padding: 1rem;
             }
            .web-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.5rem;
                color: #fff;
                line-height: 2.5rem;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 3rem;
                    text-decoration: none;
                    animation: ${animate} 1s ease-in-out infinite !important; 
                    a{
                        color: #0E1098;
                        text-decoration: none;
                       
                    }
                }
                @media(max-width: 768px) {
                    font-size: 1.5rem;
                   
                    display: none;
             }
            }
            .mobile-text{
                font-family: 'Montserrat', 'sans-serif';
                font-size: 1.1rem;
                color: #fff;
                line-height: 1.8rem;
                display: none;
                text-align: left;
                text-align: center;
                text-decoration: none;
                span{
                    background-color: #1DB6BC;
                    color: #0E1098;
                    padding: 0.2rem;
                    font-weight: 800;
                    line-height: 3rem;
                    text-decoration: none;
                    animation: ${animate} 1s ease-in-out infinite !important;
                    a{
                        color: #0E1098;
                        text-decoration: none;
                       

                    }
                }
                @media(max-width: 768px) {
                        display: block;
                }
            }
        }
    }

`