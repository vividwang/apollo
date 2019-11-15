const { gql } = require('apollo-server');

const defineSchema = gql`
  type Query {
    shops(
      """
        pagination
      """
      pageSize: Int

      """
        cursor
      """
      after: String
    ): ShopsConnection!
  }

  type ShopsConnection {
    cursor: String!
    hasMore: Boolean!
    products: [Category]!
  }

  type Category {
    id: ID!
    name: String!,
    price: Int!,
    inventory: Int!,
    description: String,
    putawayer: String,
    createTime: Date!,
  }
`

module.exports = defineSchema;