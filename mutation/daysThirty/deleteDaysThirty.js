const { PrismaClient } = require("@prisma/client");
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");
require("dotenv").config();

const prisma = new PrismaClient();

const supprimerDaysThirty = async (parent, args, context) => {
  try {
    const { id_days } = args;

    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    // Vérifier si le contenu n' existe
    const trentrejours = await prisma.daysThirty.findUnique({
      where: { id_days },
    });
    if (!trentrejours) {
      throw new GraphQLError("Contenu non trouvé");
    }

    // Supprimer 
    await prisma.daysThirty.delete({
      where: { id_days },
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

module.exports = { supprimerDaysThirty };
