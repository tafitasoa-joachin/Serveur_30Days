const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const  findOne30jours = async (parent, { id }) => {
    return await prisma.daysThirty.findUnique({
        where: { id_days: id },
    });
};

module.exports = { findOne30jours };

