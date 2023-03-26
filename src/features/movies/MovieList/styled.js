import styled from "styled-components";
const mobileMediumBp = ({ theme }) => theme.breakpoints.medium;
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;
const mobileLargeBp = ({ theme }) => theme.breakpoints.large;

export const MovieList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${mobileLargeBp}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${mobileMaxBp}px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${mobileMediumBp}px) {
    gap: 16px;
    grid-template-columns: 1fr;
  } ;
`;
