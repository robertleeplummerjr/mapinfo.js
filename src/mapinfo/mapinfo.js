var MapInfo = (function() {

  function MapInfo(settings) {
    settings = settings || {};
    this.midString = settings.midString;
    this.mid = null;
    this.mifString = settings.mifString;
    this.mif = null;
  }

  MapInfo.prototype = {
    parse: function() {
      this.parseMid();
      this.parseMif();
      return this;
    },
    parseMid: function() {
      /*mid*/var parser;/**/

      return this.mid = parser.parse(this.midString.replace(/\r/g, ''));
    },
    parseMif: function() {
      /*mif*/var parser;/**/

      return this.mif = parser.parse(this.mifString.replace(/\r/g, ''));
    },
    toGeoJSON: function() {
      this.parse();

      var mifRegions = this.mif.regions
        , features   = []
        , i          = 0
        , iMax       = mifRegions.length
        , mifRegion
        , lines
        , line
        , coordinates
        , properties
        , j
        , jMax
        ;

      for (; i < iMax; i++) {
        mifRegion  = mifRegions[i];
        lines = mifRegion.lines;
        jMax = lines.length;
        coordinates = [];
        properties = getGeoJsonProperties(this, i);
        for (j = 0; j < jMax; j++) {
          line = lines[j];
          if (line.hasOwnProperty('lon') && line.hasOwnProperty('lan')) {
            coordinates.push([line.lon, line.lat]);
          }
        }
        features.push(newPolygon(coordinates, properties));
      }

      return newGeoJson(features);
    }
  };

  function getGeoJsonProperties(self, regionIndex) {
    var properties = {}
      , midRow     = self.mid[regionIndex]
      , columns    = self.mif.columns
      , i          = 0
      , max        = columns.length
      ;

    for (; i < max; i++) {
      properties[columns[i]] = midRow[i];
    }

    return properties;
  }

  function newPolygon(coordinates, properties) {
    return {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: coordinates
      },
      properties: properties
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

if (typeof module !== 'undefined') module.exports = MapInfo;