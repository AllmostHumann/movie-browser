import {
  PageCounter,
  ButtonText,
  ArrowIconPrevious,
  Wrapper,
  PageNumbers,
  Button,
  ArrowIconNext,
} from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <ArrowIconPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <PageNumbers>1</PageNumbers>
        of
        <PageNumbers>500</PageNumbers>
      </PageCounter>
      <Button>
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <ArrowIconNext />
        <ArrowIconNext mobile="true" />
      </Button>
    </Wrapper>
  );
};
