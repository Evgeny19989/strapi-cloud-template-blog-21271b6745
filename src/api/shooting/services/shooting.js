'use strict';

/**
 * shooting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shooting.shooting');
