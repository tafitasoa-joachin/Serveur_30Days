const { PrismaClient } = require('@prisma/client');
const shortid = require('shortid');
const constantes = require("../../constantes");
const { autorisation } = require("./../utilisateur/verifierAuth");
const { GraphQLError } = require("graphql");

const prisma = new PrismaClient();

const addDaysThirty = async (parent, args, context) => {
  try {
    const {  
      titre, 
      date, 
      days,
      contenu,       
      bible,      
      references,   
      priere,    
      autres,  
      image,  
      id_sujet 
    } = args;

    const utilisateurId = await autorisation(context.token);
    if (utilisateurId === 0) {
      return new GraphQLError(constantes.CONNECTION_REFUSE);
    }

    const id_days = shortid.generate();

    const contenuExist = await prisma.daysThirty.findFirst({
      where: {
        titre: titre,
      },
    });

    if (contenuExist) {
      return new Error("Déjà enregistré");
    }

    const nouveldaysthirty = await prisma.daysThirty.create({
      data: {
        id_days,
        titre, 
        date, 
        days,
        contenu,       
        bible,      
        references,   
        priere,    
        autres,  
        image,  
        id_sujet
      },
    });    

    return nouveldaysthirty;

  } catch (error) {
    // Gestion des erreurs
    console.error(error);
    throw new Error("erreur lors du création du contenu");
  }
};

module.exports = { addDaysThirty };
