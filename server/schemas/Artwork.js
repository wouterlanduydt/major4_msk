const Joi = require(`joi`);

const schema = {

  image: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  painter: {
    type: String,
    required: true,
    validation: Joi.string().min(3)
  },

  name: {
    type: String,
    required: true,
    validation: Joi.string().min(3)
  },

  period: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  city: {
    type: String,
    required: true,
    validation: Joi.string().min(3)
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

  country: {
    type: Number,
    required: true,
    validation: Joi.string().min(2).max(3)
  },

  desc: {
    type: Number,
    required: true,
    validation: Joi.string().min(10)
  },

};

module.exports = {
  schema
};

// _id: 1,
// image: `1981-E`,
// painter: `Gustave de Smet`,
// name: `De groene koepelkerk in Amsterdam`,
// period: `1909`,
// city: `Amsterdam`,
// lon: 52.3746961,
// lat: 4.8285747,
// country: `NL`,
// desc:
