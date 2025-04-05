import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {['U', 'R', 'I', 'E', 'L'].map((letter, index) => (
          <span key={index} className={`letter letter-${index}`}>
            {letter}
          </span>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0f172a;

  .loader {
    display: flex;
    gap: 1rem;
  }

  .letter {
    font-size: 4rem;
    font-weight: bold;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: pop 1.5s ease-in-out infinite;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .letter-0 {
    background-image: linear-gradient(45deg, #00e0ed, #00da72);
    animation-delay: 0s;
  }

  .letter-1 {
    background-image: linear-gradient(45deg, #973bed, #007cff);
    animation-delay: 0.2s;
  }

  .letter-2 {
    background-image: linear-gradient(45deg, #ffc800, #f0f);
    animation-delay: 0.4s;
  }

  .letter-3 {
    background-image: linear-gradient(45deg, #00da72, #973bed);
    animation-delay: 0.6s;
  }

  .letter-4 {
    background-image: linear-gradient(45deg, #007cff, #ffc800);
    animation-delay: 0.8s;
  }

  @keyframes pop {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px) scale(1.1);
    }
  }
`;

export default Loader;
