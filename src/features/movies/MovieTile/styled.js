import styled from "styled-components";
import { ReactComponent as StarIcon } from "./Images/Star.svg";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.5s;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 16px;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.scienceBlue};
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: ${mobileMaxBp}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const ImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${mobileMaxBp}px) {
    width: 114px;
    height: 169px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: auto;

  @media (max-width: ${mobileMaxBp}px) {
    width: 20px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  margin: 0 12px;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${mobileMaxBp}px) {
    font-size: 13px;
    margin: 0 12px 0 10px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 14px;
  font-weight: 400;

  @media (max-width: ${mobileMaxBp}px) {
    font-size: 12px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${mobileMaxBp}px) {
    justify-content: start;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.smoke};
  margin: 16px 0 0;

  @media (max-width: ${mobileMaxBp}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileMaxBp}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;
