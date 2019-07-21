import { ApolloServer, gql } from "apollo-server-micro";
import _ from "lodash";

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
      return [{ name: "Nextjs", id: _.random(20) }];
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
