'use strict';

/**
 * top-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-product.top-product');
