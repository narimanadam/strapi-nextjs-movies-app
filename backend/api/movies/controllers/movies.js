const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
var sizeOf = require("image-size");
var path = require("path");
const { dirname } = require("path");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.movies.create(data, { files });
    } else {
      entity = await strapi.services.movies.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.movies });
  },

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.movies.search(ctx.query);
    } else {
      entities = await strapi.services.movies.find(ctx.query);
    }

    return entities.map((entity) => {
      const movie = sanitizeEntity(entity, { model: strapi.models.movies });
      if (movie.poster !== null) {
        const dimensions = sizeOf(
          path.resolve(__dirname, "../../../public" + movie.poster.url)
        );
        movie.poster.width = dimensions.width;
        movie.poster.height = dimensions.height;
      }
      return movie;
    });
  },
};
