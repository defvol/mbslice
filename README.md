# mbslice

Cut a slice of features from MBTiles.

Filters conform to the [Mapbox GL Style Reference](https://www.mapbox.com/mapbox-gl-style-spec/#filter).

```bash
% mbslice osmqa.mbtiles --filters '["has","highway"]'
{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-117.01981781981885,32.542629002499666],[-117.01971053145826,32.54278953898458],[-117.01983382925391,32.542816742541845],[-117.02062516473234,32.5428822430212]]},"properties":{"_osm_way_id":314010977,"_version":1,"_changeset":26958824,"_uid":2167889,"_user":"Map King","_timestamp":1416684807,"highway":"residential"}}
{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-117.0189228001982,32.54331975956073],[-117.01942085288465,32.54328026162737]]},"properties":{"_osm_way_id":314010978,"_version":1,"_changeset":26958824,"_uid":2167889,"_user":"Map King","_timestamp":1416684807,"name":"Via de la Juventud Oriente","highway":"residential","surface":"paved"}}
{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-117.0189228001982,32.54331975956073],[-117.01889782212675,32.543090332145084],[-117.0189085509628,32.54298173017354],[-117.01894341968,32.54286641550952],[-117.01905330643058,32.542692312697014],[-117.01913855038583,32.542514959241345]]},"properties":{"_osm_way_id":31582583,"_version":21,"_changeset":26958824,"_uid":2167889,"_user":"Map King","_timestamp":1416684810,"name":"Cañón Otay","highway":"residential"}}
% mbslice osmqa.mbtiles --filters '["==","landuse","residential"]'
...
```

### PoC
[Baja](https://en.wikipedia.org/wiki/Baja_California) highways:

```bash
✗ node cli.js --quiet --bbox '[-118.13,22.02,-109.03,32.95]' --filters '["has","highway"]' mexico.mbtiles > baja-highways.json
Starting up 4 workers... Job started.
Processing 14910 tiles.
14910 tiles processed in 8s.
✗ tippecanoe -o baja-highways.mbtiles baja-highways.json

For layer 0, using name "bajahighways"
Sorting 98077 features
98077 features, 4650207 bytes of geometry, 3612648 bytes of metadata, 1786436 bytes of string pool
tile 3/1/3 size is 630568 with detail 12, >500000
tile 4/3/6 size is 529065 with detail 12, >500000
tile 5/6/13 size is 694951 with detail 12, >500000
tile 5/6/13 size is 521546 with detail 11, >500000
tile 6/11/25 size is 558106 with detail 12, >500000
tile 6/12/26 size is 593155 with detail 12, >500000
tile 7/22/51 size is 523741 with detail 12, >500000
  100.4%  14/3200/6688
✗ mbview --mbtiles baja-highways.mbtiles
*** Reading from baja-highways.mbtiles
*** Metadata found in the MBTiles
{ scheme: 'tms',
  basename: 'baja-highways.mbtiles',
```

Works great with [tippecanoe](https://github.com/mapbox/tippecanoe) and [mbview](https://github.com/mapbox/mbview).

![demo](https://raw.githubusercontent.com/rodowi/mbslice/master/screenshot.jpg)
