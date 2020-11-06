import React, { useState }  from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"


function Home() {
  const [searchValue, setSearchValue] = useState(null);
  return (
    <>
    <Jumbotron >
      <Container>
      <Row>
        <Col>
        <h1 className="display-4" >Find Issues on Github/Facabook/React: </h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <SearchBar setSearchValue={setSearchValue} />
        </Col>
      </Row>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <SearchResults searchValue={searchValue} />
      </Row>
    </Container>
    </>
  );
}

export default Home;
