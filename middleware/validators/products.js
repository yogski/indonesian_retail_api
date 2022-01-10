const Joi = require('joi');

module.exports = {
  newSingleProduct: (obj) => {
    const schema = Joi.object({
      barcode : [Joi.string().required(), Joi.number().integer().required()],
      product_name : Joi.string().required,
      category : Joi.string(),
      unit_of_measure : Joi.string(),
      uom_count : Joi.number().integer(),
      is_active : Joi.number().valid(0,1).required(),
      mui_cert : [Joi.string(), Joi.number()],
      bpom_cert : [Joi.string(), Joi.number()],
      manufacturer : Joi.string(),
      netto : Joi.number(),
      netto_unit : Joi.string(),
      pirt_cert : [Joi.string(), Joi.number()],
      kemenkes_cert : [Joi.string(), Joi.number()],
      reg_no_cert : [Joi.string(), Joi.number()],
      brand : Joi.string()
    });

    const match = schema.validate(obj);
    return match.error;
  }
}