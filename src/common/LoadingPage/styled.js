import styled from "styled-components";
const mobileMinBp = ({ theme }) => theme.breakpoints.mobileMin;
const largeBp = ({ theme }) => theme.breakpoints.large;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 56px 0 120px 12px;
  transition: 0.5s;
    @media (max-width: ${mobileMinBp}px){
      margin: 24px 0 24px 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
    }
`

export const Loader = styled.div`
  align-self: center;
  width: 91px;
  height: 91px;
  margin: 40px;
  border: 12px solid ${({ theme }) => theme.colors.snuff};
  border-top: 12px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  transition: 0.5s;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      };
      100% {
        transform: rotate(360deg);
      };
  };
    @media (max-width: ${largeBp}px){
      width: 65px;
      height: 65px;
      border: 8px solid ${({ theme }) => theme.colors.snuff};
      border-top: 8px solid ${({ theme }) => theme.colors.black};
  }
    @media (max-width: ${mobileMinBp}px){
      width: 35px;
      height: 35px;
      border: 4px solid ${({ theme }) => theme.colors.snuff};
      border-top: 4px solid ${({ theme }) => theme.colors.black};
  }
`