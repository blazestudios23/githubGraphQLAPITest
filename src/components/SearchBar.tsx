import React from "react";
import { useLazyQuery } from "@apollo/client";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { SEARCH_FOR_ISSUES } from "../graphql/queries";

const SearchBar = ({ setSearchValue }: { setSearchValue: Function }) => {
  const [getTitles, { loading, error, data }] = useLazyQuery(SEARCH_FOR_ISSUES);

  error && console.log(error);

  const typeAheadData = data
    ? data.search.edges.map(
        ({ node }: { node: { title: string } }) => node.title
      )
    : [];

  return (
    <AsyncTypeahead
      onSearch={(selected) => {
        !loading &&
          getTitles({
            variables: { query: `${selected} repo:facebook/react in:title` },
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
    />
  );
};

export default SearchBar;
