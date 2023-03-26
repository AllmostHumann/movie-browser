import styled from "styled-components";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const Main = styled.main`
  padding: 56px 16px 40px;

  @media (max-width: ${mobileBp}px) {
    padding: 24px 16px 32px;
  }
`;
