import { Header, Loader, Wrapper } from "./styled";

export const LoadingPage = ({ content }) => {
  return (
    <>
      <Wrapper>
        <Header>{content}</Header>
        <Loader />
      </Wrapper>
    </>
  );
};
