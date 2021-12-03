import { createGlobalStyle } from "styled-components";
import { lotteryStatusObj } from "utils/constants";
export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 15px;
    background: ${({ theme }: any) => theme.colors.body.default};
    color: ${({ theme }: any) => theme.colors.body.text};
    transition: all 0.50s linear;
    font-family: 'Noto Sans JP','Lato', sans-serif;    
   
    line-height: 1.5;
  }

  html {
    font-size: 15px;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: ${({ theme }: any) => theme.colors.body.text};
  }
  .cursor-pointer {
    cursor: pointer;
  }

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${({ theme }: any) => theme.colors.primary.main};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;
  border-radius: 0px 4px 4px 0px;
  overflow: hidden;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${({ theme }: any) =>
    theme.colors.primary.main}, 0 0 5px ${({ theme }: any) =>
  theme.colors.primary.main};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${({ theme }: any) => theme.colors.primary.main};
  border-left-color: ${({ theme }: any) => theme.colors.primary.main};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* carousel styles */
.carousel{
  position:relative;
  text-align: center;
  @media(max-width:425px){
    
  }
}
.carousel__slider {
  padding-left: 25%;
  padding-right: 25%;
  background:black;
  @media(max-width:768px){
    padding-left:unset;
    padding-right:unset;
  }
}
.carousel__slide {
  position:relative;
}
.carousel__inner-slide {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  left: 10px;
  top: 30px;
  overflow:hidden;
  &::before{
    content:"";
    position:absolute;
    width: 25%;
    padding-top: 25%;
    transform: rotate(45deg);
    top: -21%;
    left: -13%;
  }
  @media(max-width:768px){
    width:unset;
    height:unset;
    left:unset;
  }
}

.carousel__slide-1 .carousel__inner-slide {
  &::before{
    background:${lotteryStatusObj[0].color};
  }
}
.carousel__slide-2 .carousel__inner-slide {
  &::before{
    background:${lotteryStatusObj[1].color};
  }
}
.carousel__slide-3 .carousel__inner-slide {
  &::before{
    background:${lotteryStatusObj[2].color};
  }
}
.carousel__slide-4 .carousel__inner-slide {
  &::before{
    background:${lotteryStatusObj[3].color};
  }
}
.carousel__slide--hidden{
  opacity:0.6;
  @media(max-width:768px){
    opacity:unset;
  }
}
.carousel__back-button, .carousel__next-button{
  background:white;
  border: 2px solid black;
  position:absolute;
  top:45%;
  width:3.3rem;
  height:3.3rem;
  font-size:1.2rem;
  @media(max-width:425px){
    width:2.2rem;
    height:2.2rem;
    font-size:0.8rem;
  }
}
.carousel__back-button{
  left:20%;
  @media(max-width:768px){
    left:5%;
  }
}
.carousel__next-button{
  right:20%;
  @media(max-width:768px){
    right:5%;
  }
}
.carousel__dot-group{
  background:black;
  padding: 5px 0 20px 0;
}
.carousel__dot{
  border:none;
  margin: 0 1.5px;
  width: 50px;
  background:gray;
  @media(max-width:768px){
    width:24px;
  }
}
.carousel__dot--selected{
  background:white;
}
`;

