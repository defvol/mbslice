var argv = require('minimist')(process.argv.slice(2));
var mbslice = require('./index');

var usage = function() {
  var text = [];
  text.push('usage: node cli.js [options]');
  text.push('try: node cli.js --filter "highway" some.mbtiles');
  text.push('');
  text.push(' --filter return features meeting this condition');
  text.push(' --help prints this message');
  text.push('');
  return text.join('\n');
};

if (argv.filter) {
  console.log(mbslice.filter(argv.filter));
} else if (argv.help) {
  console.log(usage());
} else {
  console.log('Command not found. Try any of the following:');
  console.log(usage());
}
