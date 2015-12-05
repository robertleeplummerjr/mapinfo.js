# mapinfo.js
A mapinfo parser and converter in js


## Conversion Usage
```javascript
var mapInfo = new MapInfo({
      midString: midString,
      mifString: mifString
    })
  , geoJson = mapInfo.toGeoJson()
  ;
```

## Basic MID File Usage
```javascript
var mapInfo = new MapInfo({midString: midString})
  , mid     = mapInfo.parseMid()
  ;
```

## Basic MIF File Usage
```javascript
var mapInfo = new MapInfo({mifString: mifString})
  , mif     = mapInfo.parseMif()
  ;
```

## MID JSON
```javascript
[
  [
    "String",
    "String",
    ...
  ]
]
```

## MIF JSON
```javascript
{
  "properties": [
    {
      "name": "Version",
      "value": "400"
    },
    {
      "name": "Charset",
      "value": [
        "WindowsLatin1"
      ]
    },
    {
      "name": "Delimiter",
      "value": ","
    },
    {
      "name": "CoordSys",
      "value": [
        "Earth",
        "Projection",
        "1",
        "62"
      ]
    }
  ],
  "columns": [
    {
      "name": "Name",
      "type": "Char",
      "definition": "200"
    },
    {
      "name": "CNumber",
      "type": "Integer"
    },
    ...
  ],
  "regions": [
    {
      "id": "1",
      "lines": [
        "259",
        {
          "lon": "-123.123",
          "lat": "12.123"
        },
        {
          "lon": "-123.123",
          "lat": "12.123"
        },
        {
          "key": "Pen",
          "value": [
            "2",
            "26",
            "32768"
          ]
        },
        ...
      ]
    },
    ...
  ]
}
```