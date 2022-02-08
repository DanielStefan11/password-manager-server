'use strict';

/**
 * password service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::password.password');
