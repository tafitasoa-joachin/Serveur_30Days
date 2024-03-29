const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findMany30jours = async (parent,args) => {
    return await prisma.daysThirty.findMany();
  }

module.exports = { findMany30jours };