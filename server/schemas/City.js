const Joi = require(`joi`);

const schema = {

  name: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  nPainters: {
    type: Number,
    required: true,
    validation: Joi.number()
  },

  nMusea: {
    type: Number,
    required: true,
    validation: Joi.number()
  },

  painters: {
    type: Array,
    required: true,
    validation: Joi.array()
  },

  distance: {
    type: Number,
    required: true,
    validation: Joi.number()
  },

  lon: {
    type: Number,
    required: true,
    validation: Joi.number()
  },

  lat: {
    type: Number,
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
  },

  loved: {
    type: Boolean,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {
  schema
};
