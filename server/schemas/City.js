const Joi = require(`Joi`);

const schema = {

  name: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  nPainters: {
    type: String,
    required: true,
    validation: Joi.number()
  },

  nMusea: {
    type: String,
    required: true,
    validation: Joi.number()
  },

  painters: {
    type: String,
    required: true,
    validation: Joi.array()
  },

  distance: {
    type: String,
    required: true,
    validation: Joi.number()
  },

  lon: {
    type: String,
    required: true,
    validation: Joi.number()
  },

  lat: {
    type: String,
    required: true,
    validation: Joi.number()
  },

  artStyle: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  country: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {
  schema
};
