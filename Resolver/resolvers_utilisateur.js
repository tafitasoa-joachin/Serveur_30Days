
const { envoyerCodeVerification } = require('../mutation/utilisateur/mot_de_passe_oublié/envoiCodeVerification');
const { forgetpass } = require('../mutation/utilisateur/mot_de_passe_oublié/motDePasse');
const { deconnexion } = require('../mutation/utilisateur/deconnexion/deconnexion.js')
const { updateUtilisateur } = require('../mutation/utilisateur/updateUtilisateur')
const { authentification } = require('../mutation/utilisateur/authentification');
const { addUtilisateur } = require('../mutation/utilisateur/addUtilisateur');
const { utilisateurs } = require('../query/utilisateur/findMany.js');
const { utilisateur } = require('../query/utilisateur/findOne');
const { utilisateurExists } = require('../query/utilisateur/utilisateurExists');

const resolvers_utilisateur = {
  Query : {
    // findMany
    utilisateurs,
    //findOne
    utilisateur,

    utilisateurExists
  },
  Mutation : {
    // Ajouter un utilisateur
    addUtilisateur,
    // Authentification utilisateur
    authentification,
    // envoi code de vérification
    envoyerCodeVerification,
    // forgetpass ou mot de passe oublié
    forgetpass,
    // deconnexion
    deconnexion,
    // modifier Utilisateur
    updateUtilisateur
  }
}

module.exports = resolvers_utilisateur 
