'use strict';

/**
 * personality service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personality.personality');
