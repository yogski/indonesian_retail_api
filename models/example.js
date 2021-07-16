const db = require('./db');

module.exports = {
  getAll : async (params) => {
    try {
      const results = await db.any('select * from examples LIMIT $1', [params.limit]);
      if (results.length === 0) {
        return [];
      } else {
        return results;
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  create : async (payload) => {
    try {
      const create = await await db.none('INSERT INTO examples(column1, column2) VALUES($1, $2)', [payload.item_1, payload.item_2])
    } catch (error) {
      throw new Error(error);      
    }
  }
}