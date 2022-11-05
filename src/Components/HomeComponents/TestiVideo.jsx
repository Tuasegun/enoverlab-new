import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Slick from 'react-slick'
import testiImage1 from '../../assets/TestiVideo.png'
import testiImage2 from '../..//assets/TestiVideo2.png'
import testiImage3 from '../../assets/TestiVideo3.png'
import TestiCard from './TestiCard'
import { H4, P } from '../../Utils/Typograpyhy'
import arrowWhite from '../../assets/BlackArrow.png'
import arrowWhiteLeft from '../../assets/BlackArrowLeft.png'

const TestiData = [
    {
        imgLink: testiImage1,
        name: "Shabi Loretta",
        role: "Product Manger,ModusCreate"
    },
    {
        imgLink: testiImage2,
        name: "Kemi Ademide",
        role: "Product Manger,Microsoft"
    },
    {
        imgLink: testiImage3,
        name: "Buchi Abubakre",
        role: "Product Manger,Skype"
    },
    {
        imgLink: testiImage3,
        name: "Buchi Abubakre",
        role: "Product Manger,Skype"
    }
]


const TestiVideo = () => {
   //AsNavFor
   const slideRef = useRef()
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    let slider1 = []
    let slider2 = []

   

    
    

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])

    const settings = {
    
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
     
    }
    const bottomSetting = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        adaptiveHeight: true,
        // centerMode: true,
        // centerPadding: "5%",
        // className:"center"
    }
  return (
    <TestiVideoStyled>
        <div className='top-slider-container'>
        <Slick asNavFor={nav2}
        ref={slider => {(slider1 = slider); slideRef.current = slider}} {...settings}
        >
            {TestiData.map((slider, index) => (
                    <div key={index}>
                       <TestiCard testImg={slider.imgLink} testName={slider.name} testRole={slider.role} />
                    </div>
            ))}
       
        </Slick>
        <div className="slide-top">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrowLeft" onClick={()=> slideRef?.current?.slickPrev()} />
                <img src={arrowWhite} alt="arrow" className="arrowRight" onClick={()=> slideRef?.current?.slickNext()} />
            </div>
        </div>
    </div>

    <div className='bottom-slider-container'>
        <Slick asNavFor={nav1} 
        ref={slider => {(slider2 = slider); slideRef.current = slider} } {...bottomSetting}>
            {TestiData.map((slider, index) => (
                    <div key={index} className="bottom-container">
                        <div className="bottomImg-container">
                        <img src={slider.imgLink} alt="" className='mini' />
                        </div>
                    <H4 textAlign="left" fontWeight="400" color='#FFF' fontSize="1rem" lineHeight="1.625rem">
                        {slider.name}
                    </H4>
                    <P textAlign="left" fontWeight="800" color='#FFF' fontSize="0.75rem" lineHeight="1.125rem">
                        {slider.role}
                    </P>
                    </div>
            ))}
        </Slick>
        <div className="slide-containers">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrowLeft" onClick={()=> slideRef?.current?.slickPrev()} />
                <img src={arrowWhite} alt="arrow" className="arrowRight" onClick={()=> slideRef?.current?.slickNext()} />
            </div>
        </div>
    </div>

    
    </TestiVideoStyled>
    )
}

export default TestiVideo

const TestiVideoStyled = styled.div`
    position: relative;
    .top-slider-container{
        position: relative;
        padding: 3.25rem 15%;

        @media (max-width: 768px){
            padding: 3.25rem 5%;
        }
    }
    .bottom-slider-container{
        padding: 0% 15% 0 20%;
        position: relative;
        width: 100vw;
        @media(max-width: 768px) {
            display: none;
        }

        /* .slick-slider{
            .slick-list{
     
                .slick-track{
                    .slick-center{
                        .bottom-container{
                            padding: 3rem 0rem;
                            height: 17.625rem;
                            transform: scale(1.6, 1.6);
                        }
                    }
                }
            }
        } */
    }
    .bottom-container{
        /*  */
        /* display: flex;
        flex-direction: column;
        align-items: center; */
       .bottomImg-container{
        max-width: 14.6875rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
       }

        &.slick-center{
            transform: translate(20px, 100%);
            img{
                width: 120%;
                height: 120%;
            }
        }
    }

     .slide-containers{
        
        @media (max-width: 768px){
            display: block;
            bottom: -4rem;
            right: 35%;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            img{
                cursor: pointer;
                width:3.5rem;
                height: 1rem;
            }
            .arrowLeft{
               position: absolute;
                left: 15%;
                bottom: 50%;
            }
            .arrowRight{
                position: absolute;
                right: 15%;
                bottom: 50%;
            }
            .arrowLeft, .arrowRight{
                cursor: pointer;
            }
        }
    }

    .slide-top{
        display: none;
        @media (max-width: 768px){
            display: block;
            bottom: -4rem;
            right: 35%;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            img{
                cursor: pointer;
                width:3.5rem;
                height: 1rem;
            }
            .arrowLeft{
               position: absolute;
                left: 10%;
                bottom: 0;
            }
            .arrowRight{
                position: absolute;
                right: 10%;
                bottom: 0;
            }
            .arrowLeft, .arrowRight{
                cursor: pointer;
            }
        }
    }
   
`