var argv = require('minimist')(process.argv.slice(2));
var slice = require('./index').slice;

var usage = function() {
  var text = [];
  text.push('description: cut a slice of features from MBTiles.');
  text.push('usage: node cli.js [options]');
  text.push('try: node cli.js --filters ["has","highway"] some.mbtiles');
  text.push('');
  text.push(' --filters a set of filters following the Mapbox GL JS Spec');
  text.push(' --bbox define a bounding box to work on, e.g. "[-99,31,-98,32]"');
  text.push(' --quiet no logging, just results');
  text.push(' --zoom define a zoom level (defaults to 12)');
  text.push(' --help prints this message');
  text.push('');
  return text.join('\n');
};

const filters = argv.filters;
const mbtiles = argv._[0];

if (mbtiles && filters) {
  var params = {
    bbox: argv.bbox,
    filters: filters,
    mbtiles: mbtiles,
    zoom: argv.zoom
  };
  if (!argv.quiet) console.log('Slicing with the following params:', params);
  slice(params);
} else if (argv.help) {
  console.log(usage());
} else {
  console.log('Command not found. Try any of the following:');
  console.log(usage());
}
