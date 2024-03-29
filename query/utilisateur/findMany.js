const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const utilisateurs = async (parent,args) => {
    return await prisma.utilisateur.findMany();
  }

module.exports = {utilisateurs};