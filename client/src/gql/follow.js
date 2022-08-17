import { gql } from "@apollo/client";

export const IS_FOLLOW = gql`
query isFollow($username: String!) {
isFollow(username: $username)
}
`;