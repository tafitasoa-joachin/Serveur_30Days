const { PrismaClient } = require('@prisma/client');
const shortid = require('shortid');
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");

const prisma = new PrismaClient();

const ajoutSujetAnnee = async (parent, args, context) => {
  try {
    const {  
      titre,
      image,
      date,
      description,
      autres,
    } = args;

    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    const id_sujet = shortid.generate();

    const contenuExist = await prisma.sujetAnnee.findFirst({
      where: {
        titre: titre,
      },
    });

    if (contenuExist) {
      return new Error("Déjà enregistré");
    }

    const nouvelSujetAnnee = await prisma.sujetAnnee.create({
      data: {
        id_sujet,
        titre,
        image,
        date,
        description,
        autres,
      },
    });    

    return nouvelSujetAnnee;

  } catch (error) {
    // Gestion des erreurs
    console.error(error);
    throw new Error("erreur lors du création de sujet");
  }
};

module.exports = { ajoutSujetAnnee };
