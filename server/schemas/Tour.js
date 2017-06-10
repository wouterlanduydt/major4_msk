const Joi = require(`Joi`);

const schema = {

  map: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  title: {
    type: String,
    required: true,
    validation: Joi.string().min(2).max(25)
  },

  desc: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {
  schema
};
