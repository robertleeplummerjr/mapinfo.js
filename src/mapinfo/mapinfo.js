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

    }
  };

  return MapInfo;
})();