import gql from 'graphql-tag';

// export const GET_FB_REACT_ISSUES = gql`
//     query($title) {
//         repository(name: "react", owner: "facebook") {
//             issues(first: 20, states: [OPEN], orderBy: {field: CREATED_AT, direction: DESC}) {
//                 nodes {
//                     title,
//                     bodyHTML,
//                     createdAt
//                 }
//             }
//         }
//     }
// `;

export const SEARCH_FOR_ISSUES = gql`
    query getIssues($query: String!){
        search(
            first: 100,
            query: $query
            type: ISSUE
        ){
            edges{
            cursor
            node{
                    ...on Issue{
                    title
                    }
                }
            }
        }
    }
`;

export const SEARCH_FOR_ISSUES_COMPLETE = gql`
    query($query: String!){
        search(
            first: 100,
            query: $query
            type: ISSUE
        ){
            edges{
                cursor
                node{

                    ...on Issue{
                        id
                        title   
                        bodyText
                        publishedAt   
                        author{
                            login
                            avatarUrl
                        }
                        labels(first: 100 ) {
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
            pageInfo{
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            }
            issueCount
        }
    }
`;
