import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_FOR_ISSUES_COMPLETE } from "../graphql/queries";
import Card from "./Card";
import { Issue } from "../generated/graphql";

const SearchResults = ({ searchValue }: { searchValue: string | null }) => {
  const [getIssues, { loading, error, data }] = useLazyQuery(
    SEARCH_FOR_ISSUES_COMPLETE
  );

  useEffect(() => {
    searchValue &&
      getIssues({
        variables: { query: `${searchValue} repo:facebook/react in:title` },
      });
  }, [searchValue]);

  if (loading) {
    return (
      <Spinner
        style={{ width: "3rem", height: "3rem" }}
        color="primary"
        type="grow"
      />
    );
  } else if (error) {
    return <div>{error.message}</div>;
  } else if (data) {
    return data.search.edges
      .filter((i: { node: Issue }) => i.node.id)
      .map((i: { node: Issue }) => <Card key={i.node.id} issue={i.node} />);
  }

  return null;
};

export default SearchResults;
