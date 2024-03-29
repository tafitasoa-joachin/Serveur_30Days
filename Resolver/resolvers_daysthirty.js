const { addDaysThirty } = require('../mutation/daysThirty/addDaysThirty.js');
const { updateDaysThirty } = require('../mutation/daysThirty/updateDaysThirty.js');
const { supprimerDaysThirty } = require('../mutation/daysThirty/deleteDaysThirty.js');
const { findOne30jours } = require('../query/trentreJours/findOne30jours.js');
const { findMany30jours } = require('../query/trentreJours/findMany30jours.js');

const resolvers_daysthirty = {
  Query : {
    findOne30jours,
    findMany30jours
  },
  Mutation : {
    addDaysThirty,
    updateDaysThirty,
    supprimerDaysThirty
  }
}

module.exports = resolvers_daysthirty 
