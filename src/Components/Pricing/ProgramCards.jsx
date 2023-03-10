import Figma from "../../assets/figma.png";
// import gmailIcon from "../../assets/gmailIcon.png";
// import googleAnalytics from "../../assets/googleAnalytics.png";
// import googleDocs from "../../assets/googleDocs.png";
// import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
// import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import {  PrimaryButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import {  H4, P } from "../../Utils/Typograpyhy";
import PricingCard from "./PricingCard";
import PricingList from "./PricingList";
import { BasicData, AdvancedData, Onsite, ExecutiveData } from "./PricingData";
import styled from "styled-components";
export const BasicCard = () => {
  return (
    <CardStyle>
      <PricingCard
        cardTitle={"Basic Program"}
        textColor={theme.color.dark}
        cardText={
          "This is an introductory training for anyone trying to understand the basics of product management"
        }
        tuitionFee={"₦50,000"}
        duration={"4 Weeks"}
        height={"63rem"}
        mobileHeight={"100%"}
        // backLeft={"20px"}
      >
        <div className="container-list">
          {BasicData.map((item, index) => {
            return (
              <PricingList
                index={index}
                listText={item.listText}
                textColor={theme.color.dark}
              />
            );
          })}
        </div>
        
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/2Ymz8FovVJEX6uDD9")
        }}
        >
          <PrimaryButton to="#" buttText="Enrol Now" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const AdvancedCard = () => {
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={theme.color.primary}
        cardTitle={"Advanced Program (ONLINE)"}
        textColor={theme.color.light}
        cardText={
          "To learn the required knowledge, skills and tools to fully take up the role of a product manager"
        }
        tuitionFee={"₦150,000"}
        duration={"10 Weeks"}
        mobileHeight={"100%"}
        height={"108.4375rem"}
        backLeft={"20px"}
        
        // discountPrice={"₦150,000"}
      >
        {AdvancedData.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.light}
            />
          );
        })}

        <div className="class-tools-container">
          <H4 fontSize="1.5rem" textAlign="left" color={theme.color.light}>
            Class Tools
          </H4>
        </div>

        <div className="class-tools-icon-container">
          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.light,
            }}
          >
          
            <div className="class-tools-icon">
              <img src={Figma} alt="google-docs-icon" />
              Figma
            </div>
            <div className="class-tools-icon">
              <img src={Jira} alt="slack-icon" />
              Jira Software
            </div>
          </div>
          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.light,
            }}
          >
            
            <div className="class-tools-icon">
              <img src={trello} alt="slack-icon" />
              Trello
            </div>
            <div className="class-tools-icon">
              <img src={productPlan} alt="slack-icon" />
              Product Plan
            </div>
          </div>
        </div>
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/2Ymz8FovVJEX6uDD9")
        }}
        >
          <PrimaryButton to="#" buttText="Enrol Now" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const OnsiteCard = () => {
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={theme.color.primary}
        cardTitle={"Advanced Program (ON-SITE)"}
        textColor={theme.color.light}
        cardText={
          "This is for professionals who prefers physical training to learn the required skills to become a Product Manager"
        }
        tuitionFee={"₦200,000"}
        duration={"10 Weeks"}
        mobileHeight={"100%"}
        height={"73.4375rem"}
       
      >
        {Onsite.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.light}
            />
          );
        })}

        <div className="note">
          <H4 fontSize="1.5rem" textAlign="left" color={theme.color.light}>
            NOTE:
          </H4>
          <P
            fontSize="1.125rem"
            textAlign="left"
            color={theme.color.light}
            mobileFontSize="1rem"
          >
            <span>Our training centre is at Lekki, Lagos, Nigeria</span>
          </P>
        </div>

       
        <div className="button-container"
        onClick={() => {
          window.open(" https://bit.ly/enoverlabexclusive")
        }}
        >
          <PrimaryButton to="#" buttText="Enrol Now" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const Executive = () => {
  return (
    <CardStyle>
      <PricingCard
        cardTitle={"Executive Coaching"}
        textColor={theme.color.dark}
        cardText={
          "For senior level professionals, business leaders & founders to learn the product management skills to lead product teams, scale products and take companies to the next level"
        }
        tuitionFee={"₦300,000"}
        duration={"7 Weeks"}
        height={"72rem"}
        mobileHeight={"100%"}
        backLeft={"20px"}
      >
        <div className="container-list">
          {ExecutiveData.map((item, index) => {
            return (
              <PricingList
                index={index}
                listText={item.listText}
                textColor={theme.color.dark}
              />
            );
          })}
        </div>
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/2Ymz8FovVJEX6uDD9")
        }}
        >
          <PrimaryButton to="#" buttText="Enrol Now" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  .class-tools-icon-container {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 2rem 0;
    .class-tools-icon-vert {
      gap: 2.125rem;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        gap: 1.75rem;
      }
      .class-tools-icon {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: 1rem;
        font-weight: 700;
        .class-icon {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          gap: 0.3rem;
          font-size: 0.7rem;
          img {
            width: 1.9rem;
          }
        }
      }
    }
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
  .button-container {
    width: 30%;
    position: absolute;
    bottom: 5%;
    @media (max-width: 768px) {
      position: relative;
      width: 55%;
      margin-top: 3.2rem;
    }
  }
  .note {
    H4 {
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        margin-bottom: 0rem;
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }
`;
