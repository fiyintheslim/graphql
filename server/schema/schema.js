const {buildSchema, GraphQLObjectType, GraphQLString, GraphQLSchema} = require("graphql")

//dummy
let books = [
    {
        name:"Night of the wind",
        genre:"Fantasy",
        id:"1"
    },
    {
        name:"The Final empire",
        genre:"Fantasy",
        id:"2"
    },
    {
        name:"The long earth",
        genre:"Sci-Fi",
        id:"3"
    }
]

const BookType = new GraphQLObjectType({
    name:"Book",
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id: GraphQLString},
            resolve(parent, args){
                //fetch  result from db
            }
        }
    }
})
// const schema = buildSchema({})

module.exports = new GraphQLSchema({
    query: RootQuery
})