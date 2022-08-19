import { gql } from "@apollo/client";

export const IS_FOLLOW = gql`
query isFollow($username: String!) {
isFollow(username: $username)
}
`;

export const FOLLOW = gql`
 mutation follow($username: String!) {
  follow(username: $username)
 }
`;

export const UN_FOLLOW = gql`
mutation unFollow($username: String!){
      unFollow(username: $username)
      }
      `;