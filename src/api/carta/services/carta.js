'use strict';

/**
 * carta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carta.carta');
