import styled from "styled-components";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const SectionTitle = styled.h1`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${mobileBp}px) {
    margin: 0 0 12px 0;
    max-width: 1368px;
    font-size: 18px;
  }
`;
