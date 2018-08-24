import { ApolloServer } from 'apollo-server';
import typeDefs from './typedefs';
import resolvers from './resolvers';



// const server = new ApolloServer({ typeDefs, resolvers });


const server = new ApolloServer({ typeDefs, resolvers });


// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});