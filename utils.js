var ff = require('feature-filter');

/**
 * Return features matching a set of filters following the Mapbox GL JS Spec
 * https://www.mapbox.com/mapbox-gl-style-spec/#types-filter
 * @param {Array} a set of GeoJSON features
 * @param {Array} a set of conditional statement following Mapbox GL JS Spec
 * @return {Array} a subset of features passed as parameter
 */
module.exports.filterFeaturesBy = function (features, filters) {
  var filterFun = ff(filters);
  return features.filter(function (feature) {
    return filterFun(feature);
  });
};
