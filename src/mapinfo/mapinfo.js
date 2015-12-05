var MapInfo = (function() {

  function MapInfo(midString, mifString) {
    this.midString = midString;
    this.mid = null;
    this.mifString = mifString;
    this.mif = null;
  }

  MapInfo.prototype = {
    parse: function() {
      return this
          .parseMid()
          .parseMif();
    },
    parseMid: function() {
      var parser = 'MID_PARSER';
      this.mid = parser.parse(this.midString);

      return this;
    },
    parseMif: function() {
      var parser = 'MIF_PARSER';
      this.mif = parser.parse(this.mifString);

      return this;
    },
    toGeoJSON: function() {
      this.parse();

      var mifRegions = this.mif.regions,
          mifRegion,
          lines,
          line,
          coordinates,
          features = [],
          i = 0,
          iMax =  mifRegions.length,
          j,
          jMax;

      for (; i < iMax; i++) {
        mifRegion  = mifRegions[i];
        lines = mifRegion.lines;
        jMax = lines.length;
        coordinates = [];
        for (j = 0; j < jMax; j++) {
          line = lines[j];
          if (line.hasOwnProperty('lon') && line.hasOwnProperty('lan')) {
            coordinates.push([line.lon, line.lat]);
          }
        }
        features.push(newPolygon(coordinates));
      }

      return newGeoJson(features);
    }
  };

  function newPolygon(coordinates) {
    return {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: coordinates
      }
    }
  }

  function newGeoJson() {
    return {
      type: "FeatureCollection",
      features: []
    }
  }

  return MapInfo;
})();

module.exports = MapInfo;