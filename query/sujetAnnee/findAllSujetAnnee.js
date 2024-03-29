const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findAllSujetAnnee = async (parent,args) => {
    return await prisma.sujetAnnee.findMany({
      include: { daysthirty: true },
    });
  }

module.exports = { findAllSujetAnnee };