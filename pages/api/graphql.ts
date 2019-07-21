import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
    id: Int
  }
`;

const resolvers = {
  Query: {
    users(_parent, _args, _context) {
      const id = Math.floor(Math.random() * 50);
      return [{ name: "Nextjs", id }];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
