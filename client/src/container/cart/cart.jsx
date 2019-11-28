import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_CART = gql`
    query GetCart {
        getCart @client {
            id
            name
            price
            description
        }
    }
`;

// const GET_ALL_CART = gql`
//     {
//         shops(after: "10", pageSize: 20) {
//             cursor,
//             hasMore,
//             products{
//                 name,
//                 price,
//                 inventory,
//                 putawayer,
//                 description,
//                 createTime
//             }
//         }
//     }
// `;

const ADD_CART = gql`
    mutation AddCart($id: string!, $name: string!, $price: int!, $description: string ) {
        addcart @client(id: $id, name: $name, price: $price, description: $description) {
            id,
            name,
            price,
            description,
        }
    }
`;

function Cart() {
  const { data, loading, error } = useQuery(GET_ALL_CART);

  console.log('data: ', data, loading, error);
  return <div>
    1234566724
  </div>
}

export default Cart;
