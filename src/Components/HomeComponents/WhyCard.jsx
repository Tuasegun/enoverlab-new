import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import {P, H3} from '../../Utils/Typograpyhy'


const WhyCard = ({bgColor, title, content, imgSrc}) => {
  return (
     <StyledWhyCard bgColor={bgColor}>
    <div className="card-container">
        <H3 textAlign="left" fontWeight="400">
        {title}
        </H3>
        <P textAlign="left" fontWeight="400" color={theme.color.dark}>
        {content}
        </P>
        <div className="card-img">
            <img src={imgSrc} alt="bulb-img"/>
        </div>
    </div>
    </StyledWhyCard>
    
  )
}

export default WhyCard

const StyledWhyCard = styled.div`
    position: relative;
    background: ${props => props.bgColor ? props.bgColor : theme.color.quaternary};
    padding: 2rem;
    border: 0.0625rem solid ${theme.color.primary}; 
    .card-container{
        height: 30.875em;
        .card-img{
            z-index: 2;
            margin: 1rem;
            @media (max-width: 768px){
                width: 50%;
                height: auto;
            }
            img{
                position: absolute;
                right: 0rem;
                /* background-color: red; */
                bottom: 0;
                height: 50%;
                width: 90%;
                object-fit: contain;
                z-index: 1;
                filter: grayscale(100%);
                opacity: 70%;
                @media (max-width: 768px) {
                    width: 80%;
                    height: 40%;
                }
                
            }
        }
        @media (max-width: 768px){
            height: 23rem;
        }
    }
`