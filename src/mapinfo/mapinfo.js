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

      return this.mid = parser.parse(this.midString);
    },
    parseMif: function() {
      /*mif*/var parser;/**/

      return this.mif = parser.parse(this.mifString);
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

if (typeof module !== 'undefined') module.exports = MapInfo;