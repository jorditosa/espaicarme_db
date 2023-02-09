'use strict';

/**
 * vin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vin.vin');
