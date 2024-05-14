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
    apparel: [Apparel]
}

type Mutation {
    login(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addApparel(category: [Number!], 
        product: [{ 
            productId: Number!,
            product_name: String!,
            stock: Number!,
            image: String!}], 
            
        tag: [{
            tagId: Number!,
            tag_name: String!}] ): User
    removeApparel(productId: ID!): User
}
`;

module.exports = typeDefs;
