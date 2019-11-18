const { gql } = require('apollo-server');

// type Query {
//   shops(
//     """
//       pagination
//     """
//     pageSize: Int

//     """
//       cursor
//     """
//     after: String
//   ): ShopsConnection!
// }

// type ShopsConnection {
//   cursor: String!
//   hasMore: Boolean!
//   products: [Category]!
// }

const defineSchema = gql `
  type Query {
    shops: [Category]!
  }

  type Category {
    id: ID!
    name: String!,
    price: Int!,
    inventory: Int!,
    description: String,
    putawayer: String!,
    createTime: String!,
  }
`

module.exports = defineSchema;