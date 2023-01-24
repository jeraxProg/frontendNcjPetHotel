import styled from 'styled-components'


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 0%, rgba(182,182,182,1) 8%, rgba(240,236,231,1) 39%, rgba(238,238,237,1) 62%, rgba(199,199,199,1) 90%, rgba(207,207,207,1) 95%, rgba(184,181,177,1) 100%);' : 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(219,182,107,1) 0%, rgba(232,184,89,1) 8%, rgba(228,204,167,1) 39%, rgba(228,214,191,1) 62%, rgba(222,165,80,1) 90%, rgba(213,181,139,1) 100%, rgba(240,179,66,1) 100%);')};
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 765px) {
    text-align: center;
  }
  
`

export const TopLine = styled.p`
  color: black;
  font-size: 16px;
  line-heigth: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 765px) {
    display: flex;
  justify-content: center;
  }
  
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText})=> (lightText ? '#f7f8fa' : '#010606')}; 

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 765px) {
    display: flex;
  justify-content: center;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText })=> (darkText ? '#010606' : '#fff')};
  
  @media screen and (max-width: 765px) {
    display: flex;
    justify-content: center;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  color: red;

  @media screen and (max-width: 765px) {
    display: flex;
  justify-content: center;
  }
`

export const ImgWrap = styled.div`
  max-width: 800px;
  height: 100%;
  @media screen and (max-width: 765px) {
    display: flex;
  justify-content: center;
  }
`

export const Img = styled.img`
  max-width: 70%;
  // height: 500px;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 765px) {
    max-width: 80%;
  }
`

