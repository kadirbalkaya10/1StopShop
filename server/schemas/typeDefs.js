const typeDefs = `
type User {
    _id:ID
    firstName:String
    LastName:String
    email:String
}

type Apparel {
   category: Number

   product: [{
    productId: Number
    product_name: String
    stock: Number
    image: String
   }] 

   tag: [{
    tagId: Number
    tag_name: String
   }]
}

type Query {
    user: User
    category: [category]
    product(_id: ID!): Product
}

type Mutation {
    login(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
