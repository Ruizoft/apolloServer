import usuario from './defaultState';

let user = usuario;

export default {

  Query: {
    usuario: () => user,
  }

    // Query: {
    //   documents: () => docs,
    // },
    // Mutation: {
    //   addDocument: (root, args) => {
    //     docs = [...documents, {author: args.author, title: args.title}];
    //     return docs;
    //   },
    //  }
  };
  