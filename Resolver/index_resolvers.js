const resolvers_utilisateur = require("./resolvers_utilisateur");
const resolvers_daysthirty = require("./resolvers_daysthirty");
const resolvers_sujetannee = require("./resolvers_sujetannee");

const resolvers = {
  Query: {},
  Mutation: {}
};

Object.assign(resolvers.Mutation, resolvers_utilisateur.Mutation, resolvers_daysthirty.Mutation, resolvers_sujetannee.Mutation);
Object.assign(resolvers.Query, resolvers_utilisateur.Query, resolvers_daysthirty.Query, resolvers_sujetannee.Query);

// console.log (resolvers); 

module.exports = resolvers;
