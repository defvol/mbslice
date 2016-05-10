const tileReduce = require('tile-reduce');

var features = [];

/**
 * Spins up a TileReduce job to slice a MBTiles file
 * @param {params} a config object, with at least mbtiles and filters
 * @return {} outputs to stdout a New line delimited JSON
 */
module.exports.slice = function (params) {

  tileReduce({
    bbox: (params.bbox ? JSON.parse(params.bbox) : [-180, -85, 180, 85]),
    // TODO: get these values from MBTiles.info
    map: __dirname + '/map.js',
    mapOptions: {
      filters: JSON.parse(params.filters)
    },
    // TODO: make it source agnostic
    sources: [
      {
        layers: ['osm'],
        mbtiles: params.mbtiles || 'latest.planet.mbtiles',
        name: 'osmqa'
      }
    ],
    zoom: params.zoom || 12
  })
  .on('reduce', function(partial) {
    features = features.concat(partial);
  })
  .on('end', function(error) {
    // TODO: callback?
    features.forEach(function (f) {
      console.log(JSON.stringify(f));
    });
  });

};
