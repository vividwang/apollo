import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const  GET_COMMODITY = gql`
    {
        shops(after: "10", pageSize: 20) {
            cursor,
            hasMore,
            products{
                name,
                price,
                inventory,
                putawayer,
                description,
                createTime
            }
        }
    }
`;

function Index() {
  const {loading, error, data} = useQuery(GET_COMMODITY);

  console.log('data', data);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;
  return <>
    {
      data.shops.products.map((v, i) => {
        return <div key={v.name}>
          {v.name} - {v.price} - {v.inventory} - {v.description} - {v.putawayer}
        </div>
      })
    }
  </>
}

export default Index;