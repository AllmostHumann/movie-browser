import styled from "styled-components";
import { ReactComponent as NoSearch } from "./Images/NoSearchImages.svg";
const mobileMinBp = ({ theme }) => theme.breakpoints.mobileMax;
const largeBp = ({ theme }) => theme.breakpoints.large;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`;
export const Title = styled.h1`
  margin: 0 0 40px 12px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  transition: 0.5s;
  @media (max-width: ${largeBp}px) {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 26px;
    line-height: 120%;
  }
  @media (max-width: ${mobileMinBp}px) {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const NoSearchImage = styled(NoSearch)`
  align-self: center;
  transition: 0.5s;
  @media (max-width: ${largeBp}px) {
    scale: 80%;
  }
  @media (max-width: ${mobileMinBp}px) {
    scale: 50%;
  }
`;
