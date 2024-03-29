const { PrismaClient } = require("@prisma/client");
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");
const prisma = new PrismaClient();

const updateDaysThirty = async (parent, args, context) => {
  try {
    const {
      id_days, // Correction: changer 'id' en 'id_days'
      titre, 
      date, 
      days,
      contenu,       
      bible,      
      references,   
      priere,    
      autres,  
      image, 
    } = args;

    // Vérifier si id_days est défini
    if (!id_days) {
        throw new Error("L'identifiant des jours (id_days) est requis.");
    }
    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    const updateTrenteJour = await prisma.daysThirty.update({
        where: {
          id_days: id_days
        },
        data: {
            titre, 
            date, 
            days,
            contenu,       
            bible,      
            references,   
            priere,    
            autres,  
            image, 
        }
    });

    return updateTrenteJour;
  } catch (error) {
    console.error(error);
    console.log("Erreur de modification :", error.message);
    throw new Error("Une erreur est survenue lors de la modification des jours.");
  }
};

module.exports = { updateDaysThirty };
