const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input bookInfo {
        author: [String]
        description: String
        title: String
        bookId: ID!
        image: String
        link: String
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInfo): User
        removeBook(bookId: ID!): User
    }`;

module.exports = typeDefs;
