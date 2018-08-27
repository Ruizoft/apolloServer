# Documentación Solinfo Server

## Server

**ApolloServer**

[Descargar repositorio](https://github.com/Ruizoft/apolloServer) 


    const server = new ApolloServer(
      { 
        typeDefs, 
        resolvers, 
      });
      
      server.listen()
      

[Ver documentación ApolloServer](https://www.apollographql.com/docs/apollo-server/)


**Correr la aplicación - Una vez que se configure el servidor** 

se necesita [Docker](https://www.docker.com/)

se necesita [Docker Compose](https://docs.docker.com/compose/)


    cd /PATH/TO/DIRECTORY
    docker-compose up

Con esto tendrás acceso a:

- localhost:4000 (GraphQL Server)
- Localhost:4001 (PGAdmin)
  - email: daniel.solinfo@gmail.com contraseña: solinfo123
- Localhost:5234 (PostgresQL)

