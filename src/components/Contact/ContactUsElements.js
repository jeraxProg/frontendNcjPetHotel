import styled from "styled-components";

export const ContactPageSection = styled.section`
min-height: 89.5vh;
height: auto;
  width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const ContactContainer = styled.div`
  height: 35vmax;
  width: 32vmax;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  
`

export const ContactLeftTopContent = styled.div`
height: auto;
width: 100%;
`
export const ContactLeftBottomContent = styled.div`
margin-bottom: 1.2vmax;
font-size: 2vmax;
letter-spacing: 0.2vmax;
`

export const ContactContentHeading = styled.h1`
margin-bottom: 1.2vmax;
font-size: 2vmax;
letter-spacing: 0.2vmax;

@media screen and (max-width: 1000px) {
  font-size: 3vmax;
}

`

export const ContactInformation = styled.div`
height: auto;
width: 80%;

display: flex;
justify-content: flex-start;
align-items: center;


`

export const contactContent = styled.div`
font-size: 1.2vmax;


`

export const ContactContentP = styled.p`
font-size: 1vmax;
margin-bottom: 20px;

@media screen and (max-width: 1000px) {
  font-size: 1.5vmax;
}

`

export const InfoP = styled.p`
font-size: 1vmax;
margin-bottom: 20px;
margin-top: 40px;

@media screen and (max-width: 1000px) {
  font-size: 1.5vmax;
}

`

export const ImageP = styled.img`
width: 60px;
margin-right: 20px;
margin-top: 20px;
`

export const ContContainer = styled.div`
  display: flex;
`



