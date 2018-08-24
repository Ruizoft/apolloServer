import { gql } from 'apollo-server';

export default gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Usuario {
    id_usuario: Int
    usuario: String
    pwd: String
    nombre: String
    apellido: String
    correo_e: String
    pais: String
    telefono: String
    creado_por: Int
  }

  type Query {
    usuario: Usuario
  }

  # # The "Query" type is the root of all GraphQL queries.
  # # (A "Mutation" type will be covered later on.)
  # type Query {
  #   documents: [Document]
  # }

  # type Mutation {
  #   addDocument(title: String, author: String): [Document]
  # }
`;