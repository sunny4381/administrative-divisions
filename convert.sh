#!/bin/bash
base_dir=$(cd "$(dirname "$0")" && pwd)

for i in $base_dir/downloads/*.zip
do
  basename "$i"
  "$base_dir/node_modules/.bin/shp2json" "$i" \
    "$base_dir/geojsons/$(basename "${i%.zip}").geojson"
done

for i in $base_dir/geojsons/*.geojson
do
  basename "$i"
  /usr/bin/env node "$base_dir/aggregate.js" "$i" \
    > "$base_dir/multipolygons/$(basename "$i")"
done
