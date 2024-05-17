const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

// Secret key for JWT
const secret = "mysecretsshhhhh";
// Expiration time for JWT
const expiration = "2h";

// Exporting module with defined functionalities
module.exports = {
  // Custom GraphQL error for authentication failure
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  // Middleware function for user authentication
  authMiddleware: function ({ req }) {
    //  Extracting token from request body, query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Parsing token from "Bearer <tokenvalue>" format
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      // If no token found, return the request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  // Function for signing JWT with user data
  signToken: function ({ firstName, email, _id }) {
    // Payload for JWT containing user data
    const payload = { firstName, email, _id };
    // Signing JWT with payload, secret key, and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
