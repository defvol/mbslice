const utils = require('./utils');

module.exports = function(data, tile, writeData, done) {
  var osmLayer = data.osmqa.osm;
  var filters = global.mapOptions.filters;
  var results = utils.filterFeaturesBy(osmLayer.features, filters);
  done(null, results);
};
