import { Wrapper, Title, NoSearchImage } from "./styled";

export const NoResult = () => {
  return (
    <Wrapper>
      <Title>Sorry, there are no results for “Muan”</Title>
      <NoSearchImage />
    </Wrapper>
  );
};
