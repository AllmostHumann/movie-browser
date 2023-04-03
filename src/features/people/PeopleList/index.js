import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { PeopleList, StyledLink } from "./styled";
import { PersonTile } from "../PersonTile";
import { fetchPeopleLoading, selectPopularPeople, selectPopularPeopleStatus } from "../popularPeopleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";

const PopularPeople = () => {
    const dispatch = useDispatch();
    const people = useSelector(selectPopularPeople);
    const stateOfLoading = useSelector(selectPopularPeopleStatus);

    useEffect(() => {
        dispatch(fetchPeopleLoading());
    }, [dispatch]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <Container>
                    <section>
                        <SectionTitle>Popular People</SectionTitle>
                        {people && people.length > 0 && (
                            <PeopleList>
                                {people.map(({ profile_path, id, name }) => (
                                    <StyledLink to={`/profile/${id}`}>
                                    <PersonTile
                                        key={id}
                                        id={id}
                                        profile_path={profile_path}
                                        name={name}
                                    />
                                    </StyledLink>
                                ))}
                            </PeopleList>)}
                    </section>
                </Container>
            )}
        </>
    );
};

export default PopularPeople;



