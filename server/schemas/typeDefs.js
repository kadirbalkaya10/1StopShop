const typeDefs = `
type User {
    _id:ID
    firstName:String
    LastName:String
    email:String
}

type Query {
    user:User
}
`;

module.exports = typeDefs;
