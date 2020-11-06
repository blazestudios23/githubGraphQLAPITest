import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { SEARCH_FOR_ISSUES } from "../graphql/queries";
import { Button, Col, Row } from "reactstrap";

const SearchBar = ({ setSearchValue }: { setSearchValue: Function }) => {
  const [value, setValue] = useState("");
  const [getTitles, { loading, error, data }] = useLazyQuery(SEARCH_FOR_ISSUES);

  error && console.log(error);

  const typeAheadData = data
    ? data.search.edges.map(
        ({ node }: { node: { title: string } }) => node.title
      )
    : [];

  return (
    <Row>
      <Col>
        <AsyncTypeahead
          onSearch={(selected) => {
            !loading &&
              getTitles({
                variables: {
                  query: `${selected} repo:facebook/react in:title`,
                },
              });
          }}
          id={"Search"}
          searchText={"Searching ..."}
          delay={500}
          options={typeAheadData.filter((i: any) => i)}
          isLoading={loading}
          placeholder="Please type complete words..."
          minLength={2}
          clearButton
          onChange={(selected) => setSearchValue(selected[0])}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              setSearchValue(e.target.value);
            }
          }}
          onBlur={(e: any) => setValue(e.target.value)}
        />
      </Col>
      <Col sm={"2"}>
        <Button
          color="primary"
          onClick={() => {
            setSearchValue(value);
          }}
        >
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBar;
