import gql from 'graphql-tag';

const GET_CART = gql`
    {
        cart @client {
            name
            price
            description
            inventory
        }
    }
`;

const resolvers = {
  Query: {
    async getCart(_root, params, { cache }) {
      let res = await cache.readQuery({ query: GET_CART });

      console.log('res', res);

      return res.cart;
    }
  },
  Mutation: {
    async addCart(_root, params, { cache }) {
      let { name, price, description, inventory } = params;
      let res = await cache.readQuery({ query: GET_CART });

      cache.writeQuery({
        query: GET_CART,
        data: res.concat({ name, price, description, inventory, __typename: 'cart' })
      });
      return null;
    }
  }
};

export default resolvers;
