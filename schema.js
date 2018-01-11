const graphql = require('graphql')
const fruits = require('./fruits.json')

let vitaminsType = new graphql.GraphQLObjectType({
	name:'Vitamins',
	fields: {
		name: { type: graphql.GraphQLString },
		
	}
})

let fruitType = new graphql.GraphQLObjectType({
  	name: 'Fruit',
	fields: {
		id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
		name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
		color: { type: graphql.GraphQLString },
		vitamins: { type: new graphql.GraphQLList(vitaminsType) }
	}
})

let schema = new graphql.GraphQLSchema({
	query: new graphql.GraphQLObjectType({
	    	name: 'Query',
	    	fields: {
			fruit: {
				type: fruitType,
				args: {
				  id:{
				    type: graphql.GraphQLInt
				  }
				},
				resolve: function (_ , args) {
					let response = fruits.find(function (user){
						return (user.id === args.id)
					})
					return response
				}
			}
		}
	})
})

module.exports = schema