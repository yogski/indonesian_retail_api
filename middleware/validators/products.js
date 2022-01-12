const Joi = require('joi');

module.exports = {
  newSingleProduct: (obj) => {
    const schema = Joi.object({
      barcode : [Joi.string().required(), Joi.number().integer().required()],
      product_name : Joi.string().required(),
      category : Joi.string().allow(null),
      unit_of_measure : Joi.string().allow(null),
      uom_count : Joi.number().integer().allow(null),
      mui_cert : [Joi.string().allow(null), Joi.number().allow(null)],
      bpom_cert : [Joi.string().allow(null), Joi.number().allow(null)],
      manufacturer : Joi.string().allow(null),
      netto : Joi.number().allow(null),
      netto_unit : Joi.string().allow(null),
      pirt_cert : [Joi.string().allow(null), Joi.number().allow(null)],
      kemenkes_cert : [Joi.string().allow(null), Joi.number().allow(null)],
      reg_no_cert : [Joi.string().allow(null), Joi.number().allow(null)],
      brand : Joi.string().allow(null)
    });

    const match = schema.validate(obj);
    return match.error;
  }
}