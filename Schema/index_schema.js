const fs = require('fs');

const utilisateur = fs.readFileSync('./Schema/Utilisateur.graphql',{encoding:'utf-8'});
const daysThirty = fs.readFileSync('./Schema/DaysThirty.graphql', {encoding: 'utf-8'});
const sujetAnnee = fs.readFileSync('./Schema/SujetAnnee.graphql', {encoding: 'utf-8'});

// par ailleurs ça aura des erreurs sans ./Schema
const typeDefs = utilisateur + daysThirty + sujetAnnee;

// console.log // commentaire debug(typeDefs);

module.exports = typeDefs
