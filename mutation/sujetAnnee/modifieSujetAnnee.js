const { PrismaClient } = require("@prisma/client");
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");
const prisma = new PrismaClient();

const modifieSujetAnnee = async (parent, args, context) => {
  try {
    const {
      id_sujet,
      titre,
      image,
      date,
      description,
      autres,
    } = args;

    // Vérifier si id_sujet est défini
    if (!id_sujet) {
        throw new Error("L'identifiant de sujet est requis.");
    }
    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    const updateTrenteJour = await prisma.sujetAnnee.update({
        where: {
          id_sujet: id_sujet
        },
        data: {
          titre,
          image,
          date,
          description,
          autres,
        }
    });

    return updateTrenteJour;
  } catch (error) {
    console.error(error);
    console.log("Erreur de modification :", error.message);
    throw new Error("Une erreur est survenue lors de la modification des sujets.");
  }
};

module.exports = { modifieSujetAnnee };
