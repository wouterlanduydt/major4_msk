const Joi = require(`joi`);

const schema = {
  artwork: {
    type: String,
    validation: Joi.string()
  }
};

module.exports = {schema};
