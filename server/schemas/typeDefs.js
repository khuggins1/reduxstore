const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    email: String
    orders: [Order]
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    Category: Category
  }

  type Query {
      categories: [Category]
      products(category: ID, name: String): [Product]
      product(_id: ID!): Product
      user: User
      order(_id: ID!): Order
      checkout(products: [ID]!): Checkout
    
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
      session: ID
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addOrder(products: [ID]!): Order
  }
`;
//add firstname and lastname products etc
module.exports = typeDefs;
