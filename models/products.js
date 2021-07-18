const db = require('./db');
const DEFAULT_LIMIT = 20;

module.exports = {
  /**
   * 
   * @param {barcode: string, limit: string} params 
   */
  getByBarcode : async (params) => {
    try {
      const results = await db.any(
        `SELECT product_name, barcode, category, unit_of_measure 
        FROM main_products 
        WHERE barcode = $1
        AND is_active = 1
        LIMIT $2`
      , [params.barcode, params.limit || DEFAULT_LIMIT]);
      if (results.length === 0) {
        return [];
      } else {
        return results;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  /**
   * 
   * @param {productName: string, limit: string} params 
   */
  getByProductName : async (params) => {
    try {
      const results = await db.any(
        `SELECT product_name, barcode, category, unit_of_measure 
        FROM main_products 
        WHERE product_name LIKE $1
        AND is_active = 1
        LIMIT $2`
        , [`%${params.productName}%`, params.limit || DEFAULT_LIMIT]);
      if (results.length === 0) {
        return [];
      } else {
        return results;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  checkBarcodeExists : async (params) => {
    try {
      const results = await db.any(
        `SELECT count(*) 
        FROM main_products 
        WHERE barcode = $1
        AND is_active = 1`
      , [params.barcode]);
      return (results.count > 0) ? true : false; 
    } catch (error) {
      console.log(error);
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