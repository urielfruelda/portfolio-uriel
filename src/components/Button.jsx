import React from 'react';
import styled from 'styled-components';

const Button = () => {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/1iUNZt1MiwkQjvdrHhi6i0cV2iCJC2gBs/view?usp=sharing", "_blank");
    };

    return (
        <StyledWrapper>
            <button className="botao" onClick={handleClick}>
                <svg className="mysvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                    <g id="SVGRepo_iconCarrier">
                        <g id="Interface / Download">
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector" />
                        </g>
                    </g>
                </svg>
                <span className="texto">Download CV</span>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .botao {
    width: 125px;
    height: 45px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 1px rgba(107, 221, 215, 0.37);
    padding: 5px 10px;
    background-color: rgb(59, 190, 230);
    color: #fff;
    position: relative;
    font-family: Roboto, sans-serif;
    font-weight: 505;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    pointer-events: auto;
    filter: drop-shadow(0 0 10px rgba(59, 190, 230, 0.568));
    transition: 0.5s linear;
    z-index: 30;
  }

  .botao .mysvg {
    display: none;
  }

   .botao:hover {
     width: 50px;
     height: 50px;
     border-radius: 50%;
    transition: 0.5s linear;
   }

  .botao:hover .texto {
    display: none;
  }

  .botao:hover .mysvg {
    display: inline;
  }

  .botao:hover::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    background-color: rgb(59, 190, 230);
    margin-left: -20px;
    animation: animate 0.9s linear infinite;
  }

  .botao:hover::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    border: 3.5px solid transparent;
    border-top: 3.5px solid #fff;
    border-right: 3.5px solid #fff;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;

export default Button;