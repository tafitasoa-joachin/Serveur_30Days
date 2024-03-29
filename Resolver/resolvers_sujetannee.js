
const { findAllSujetAnnee } = require('../query/sujetAnnee/findAllSujetAnnee');
const { findOneSujetAnnee } = require('../query/sujetAnnee/findOneSujetAnnee');
const { ajoutSujetAnnee } = require('../mutation/sujetAnnee/ajoutSujetAnnee');
const { modifieSujetAnnee } = require('../mutation/sujetAnnee/modifieSujetAnnee');
const { supprimerSujetAnnee } = require('../mutation/sujetAnnee/supprimerSujetAnnee');

const resolvers_utilisateur = {
  Query : {
    // findMany
    findAllSujetAnnee,
    //findOne
    findOneSujetAnnee,
  },
  Mutation : {
    ajoutSujetAnnee,
    modifieSujetAnnee,
    supprimerSujetAnnee
  }
}

module.exports = resolvers_utilisateur 
