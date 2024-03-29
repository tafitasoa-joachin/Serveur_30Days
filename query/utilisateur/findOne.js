const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

  // aficher un seul utilisateur (avec prisma on utilise findUnique) article true
  const  utilisateur = async (parent, { id }) => {
    return await prisma.utilisateur.findUnique({
      where: { id_utilisateur: id },
    });
  };

module.exports = {utilisateur};

