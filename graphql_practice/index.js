import { GraphQLServer} from 'graphql-yoga'
import { PubSub } from 'graphql-subscriptions';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Comment from './resolvers/Comment';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Subscription from './resolvers/Subscription';

const pubSub = new PubSub() 

const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers :{
        Query,
        Post,
        Comment,
        Mutation,
        User,
        Subscription  
    },
    context:{
        db,
        pubSub
    }
    
})

server.start(() => {
    console.log('The server is up!')
})

p
