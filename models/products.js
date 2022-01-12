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
  createNewProduct : async (payload) => {
    try {
      const create = await db.oneOrNone(
        `INSERT INTO main_products
          (
          barcode,
          product_name,
          category,
          unit_of_measure,
          uom_count,
          is_active,
          created_at,
          updated_at,
          mui_cert,
          bpom_cert,
          manufacturer,
          netto,
          netto_unit,
          pirt_cert,
          kemenkes_cert,
          reg_no_cert,
          brand)
        VALUES($1, $2, $3, $4, $5, 1, NOW(), NOW(), $6,
        $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *`
        , [
          payload.barcode,
          payload.product_name,
          payload.category,
          payload.unit_of_measure,
          payload.uom_count,
          payload.mui_cert,
          payload.bpom_cert,
          payload.manufacturer,
          payload.netto,
          payload.netto_unit,
          payload.pirt_cert,
          payload.kemenkes_cert,
          payload.reg_no_cert,
          payload.brand
        ]
      )
      return create;
    } catch (error) {
      throw new Error(error);      
    }
  }
}