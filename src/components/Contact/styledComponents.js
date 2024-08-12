import styled, { keyframes, css } from "styled-components";

// Animation for expanding the section from the button
const expand = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 500px;
    opacity: 1;
  }
`;

// Animation for contracting the section to the button
const contract = keyframes`
  from {
    width: 500px;
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`;

export const ContactSection = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  border: 2px solid #000;

  ${({ isExpanded }) =>
    isExpanded
      ? css`
          animation: ${expand} 0.5s ease forwards;
        `
      : css`
          animation: ${contract} 0.5s ease forwards;
        `};
`;

export const ContactIcon = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Contactbutton = styled.button`
  background-color: #ffffff;
  cursor: pointer;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border: 2px solid #000;
`;
