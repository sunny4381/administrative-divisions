var fs = require('fs');

var args = process.argv.slice(2);
fs.readFile(args[0], function(err, data) {
  if (err)
    throw err;

  var json = JSON.parse(data);
  var features = json['features'];

  var aggregate = {}
  features.forEach(function (feature, index, array) {
    if (feature['type'] != 'Feature')
      return;

    var properties = feature['properties'];
    var key = JSON.stringify(properties);
    if (!(key in aggregate))
      aggregate[key] = [];

    aggregate[key].push(feature['geometry']['coordinates']);
  });

  var aggregate_keys = Object.keys(aggregate);
  if (aggregate_keys.length == 0)
    return;

  console.log('{ "type":"FeatureCollection","features":[');
  aggregate_keys.forEach(function (key, index) {
    var coordinates = aggregate[key];
    var delim = (index + 1 == aggregate_keys.length ? '' : ',');
    console.log('  { "type":"Feature",');
    console.log('    "properties":' + key + ',');
    console.log('    "geometry":{');
    console.log('      "type":"MultiPolygon",');
    console.log('      "coordinates":[');
    coordinates.forEach(function (coordinate, index) {
      var coordinate_delim = (index + 1 == coordinates.length ? '' : ',');
      console.log('        ' + JSON.stringify(coordinate) + coordinate_delim);
    });
    console.log('      ]');
    console.log('    }');
    console.log('  }' + delim);
  });
  console.log(']}');
});
