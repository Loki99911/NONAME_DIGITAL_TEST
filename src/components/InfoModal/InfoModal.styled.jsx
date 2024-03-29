import styled from 'styled-components';

export const StyledModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const StyledContentDiv = styled.div`
  padding: 50px 58px 60px;
`;

export const StyledText = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;

export const StyledDivWithButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledCloseButton = styled.button`
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  cursor: pointer;
  use {
    width: 12px;
    height: 12px;
  }
  transition: transform 250ms linear;
  :hover {
    transform: rotate(180deg);
  }
`;

export const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.2);
`;
