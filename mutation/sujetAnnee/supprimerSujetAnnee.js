const { PrismaClient } = require("@prisma/client");
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");
require("dotenv").config();

const prisma = new PrismaClient();

const supprimerSujetAnnee = async (parent, args, context) => {
  try {
    const { id_sujet } = args;
    
    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    // Vérifier si le contenu n' existe
    const sujetAnnee = await prisma.sujetAnnee.findUnique({
      where: { id_sujet },
    });
    if (!sujetAnnee) {
      throw new GraphQLError("Sujet non trouvé");
    }
    
    // Supprimer le table lié
    await prisma.daysThirty.deleteMany({
      where: { id_sujet: id_sujet },
    });

    // Supprimer lui même
    await prisma.sujetAnnee.delete({
      where: { id_sujet },
    });

    return {
      message: "Suppression ok",
      success: true,
    };
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Erreur lors du suppression");
  }
}

module.exports = { supprimerSujetAnnee };
