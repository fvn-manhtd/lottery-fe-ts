import { Typography } from "components/atoms";
import styled from "styled-components";
import { lotteryStatusObj } from "utils";

export const StyledLabelText = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-45deg);
  z-index: 900;
`;
export const CarouselStyle = styled.div`
  .carousel {
    position: relative;
    text-align: center;
  }
  .carousel__slider {
    padding-left: 25%;
    padding-right: 25%;
    background: black;
    @media (max-width: 768px) {
      padding-left: unset;
      padding-right: unset;
    }
  }
  .carousel__slide {
    position: relative;
  }
  .carousel__inner-slide {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    left: 10px;
    top: 30px;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100px;
      height: 100px;
      top: 0%;
      left: 0%;
      transform: translate(-50%, -50%) rotate(45deg);
      z-index: 2;
    }
    @media screen and (min-width: 768px) {
      &::before {
        width: 150px;
        height: 150px;
      }
    }
  }

  .carousel__slide-1 .carousel__inner-slide {
    &::before {
      background: ${lotteryStatusObj[0].color};
    }
  }
  .carousel__slide-2 .carousel__inner-slide {
    &::before {
      background: ${lotteryStatusObj[1].color};
    }
  }
  .carousel__slide-3 .carousel__inner-slide {
    &::before {
      background: ${lotteryStatusObj[2].color};
    }
  }
  .carousel__slide-4 .carousel__inner-slide {
    &::before {
      background: ${lotteryStatusObj[3].color};
    }
  }
  .carousel__slide--hidden {
    opacity: 0.6;
    @media (max-width: 768px) {
      opacity: unset;
    }
  }
  .carousel__back-button,
  .carousel__next-button {
    background: white;
    border: 2px solid black;
    position: absolute;
    top: 45%;
    width: 3.3rem;
    height: 3.3rem;
    font-size: 1.2rem;
    &:hover {
      opacity: 0.7;
    }
    @media (max-width: 425px) {
      width: 2.2rem;
      height: 2.2rem;
      font-size: 0.8rem;
    }
  }
  .carousel__back-button {
    left: 20%;
    @media (max-width: 768px) {
      left: 5%;
    }
  }
  .carousel__next-button {
    right: 20%;
    @media (max-width: 768px) {
      right: 5%;
    }
  }
  .carousel__dot-group {
    background: black;
    padding: 5px 0 20px 0;
  }
  .carousel__dot {
    border: none;
    margin: 0 1.5px;
    width: 50px;
    background: gray;
    @media (max-width: 768px) {
      width: 24px;
    }
  }
  .carousel__dot--selected {
    background: white;
  }
`;
