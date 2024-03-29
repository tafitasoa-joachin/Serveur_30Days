const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const  findOneSujetAnnee = async (parent, { id }) => {
    return await prisma.sujetAnnee.findUnique({
        where: { id_sujet: id },
        include: { daysthirty: true },
    });
};

module.exports = { findOneSujetAnnee };

