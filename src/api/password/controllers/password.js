'use strict';

/**
 *  password controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::password.password');
