const test = require('tape').test;
const utils = require('./utils');

const fixture = [
  { "properties": { "landuse": "residential", "bar": 40 } },
  { "properties": { "landuse": "commercial" } },
  { "properties": { "landuse": "residential", "foo": 42 } },
  { "properties": { "highway": "primary" } }
];

test('filterFeaturesBy', function (t) {
  var got = want = null;

  got = utils.filterFeaturesBy(fixture, ['==', 'landuse', 'residential']);
  t.equal(got.length, 2, 'founds 2 residential areas');
  t.deepEqual(got[0], fixture[0], 'returns a residential feature');

  got = utils.filterFeaturesBy(fixture, ['has', 'highway']);
  t.deepEqual(got[0], fixture[3], 'finds 1 highways');

  got = utils.filterFeaturesBy(fixture, ['has', 'landuse']);
  t.equal(got.length, 3, 'finds 3 features with the landuse property');

  got = utils.filterFeaturesBy(fixture, [
    'all',
    ['has', 'landuse'],
    ['==', 'foo', 42]
  ]);
  t.equal(got.length, 1, 'multiple filters and founds 1 residential foo');

  t.end();
});
