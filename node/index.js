(function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  GeoContainer.prototype = Object.create(GeoBase.prototype);
  GeoContainer.prototype.constructor = GeoContainer;
  GeoRenderable.prototype = Object.create(GeoContainer.prototype);
  GeoRenderable.prototype.constructor = GeoRenderable;
  GeoAirControlMeasure.prototype = Object.create(GeoRenderable.prototype);
  GeoAirControlMeasure.prototype.constructor = GeoAirControlMeasure;
  GeoCamera.prototype = Object.create(GeoBase.prototype);
  GeoCamera.prototype.constructor = GeoCamera;
  GeoCircle.prototype = Object.create(GeoRenderable.prototype);
  GeoCircle.prototype.constructor = GeoCircle;
  GeoDocument.prototype = Object.create(GeoBase.prototype);
  GeoDocument.prototype.constructor = GeoDocument;
  GeoEllipse.prototype = Object.create(GeoRenderable.prototype);
  GeoEllipse.prototype.constructor = GeoEllipse;
  GeoImageOverlay.prototype = Object.create(GeoRenderable.prototype);
  GeoImageOverlay.prototype.constructor = GeoImageOverlay;
  GeoLookAt.prototype = Object.create(GeoBase.prototype);
  GeoLookAt.prototype.constructor = GeoLookAt;
  GeoMilSymbol.prototype = Object.create(GeoRenderable.prototype);
  GeoMilSymbol.prototype.constructor = GeoMilSymbol;
  GeoPath.prototype = Object.create(GeoRenderable.prototype);
  GeoPath.prototype.constructor = GeoPath;
  GeoPoint.prototype = Object.create(GeoRenderable.prototype);
  GeoPoint.prototype.constructor = GeoPoint;
  GeoPolygon.prototype = Object.create(GeoRenderable.prototype);
  GeoPolygon.prototype.constructor = GeoPolygon;
  GeoPositionGroup.prototype = Object.create(GeoAltitudeMode.prototype);
  GeoPositionGroup.prototype.constructor = GeoPositionGroup;
  GeoRectangle.prototype = Object.create(GeoRenderable.prototype);
  GeoRectangle.prototype.constructor = GeoRectangle;
  GeoSquare.prototype = Object.create(GeoRenderable.prototype);
  GeoSquare.prototype.constructor = GeoSquare;
  GeoText.prototype = Object.create(GeoRenderable.prototype);
  GeoText.prototype.constructor = GeoText;
  IGeoAirControlMeasure$Attribute.prototype = Object.create(Enum.prototype);
  IGeoAirControlMeasure$Attribute.prototype.constructor = IGeoAirControlMeasure$Attribute;
  IGeoAirControlMeasure$AcmType.prototype = Object.create(Enum.prototype);
  IGeoAirControlMeasure$AcmType.prototype.constructor = IGeoAirControlMeasure$AcmType;
  IGeoAltitudeMode$AltitudeMode.prototype = Object.create(Enum.prototype);
  IGeoAltitudeMode$AltitudeMode.prototype.constructor = IGeoAltitudeMode$AltitudeMode;
  IGeoFillStyle$FillPattern.prototype = Object.create(Enum.prototype);
  IGeoFillStyle$FillPattern.prototype.constructor = IGeoFillStyle$FillPattern;
  IGeoLabelStyle$Typeface.prototype = Object.create(Enum.prototype);
  IGeoLabelStyle$Typeface.prototype.constructor = IGeoLabelStyle$Typeface;
  IGeoLabelStyle$Justification.prototype = Object.create(Enum.prototype);
  IGeoLabelStyle$Justification.prototype.constructor = IGeoLabelStyle$Justification;
  IGeoMilSymbol$Modifier.prototype = Object.create(Enum.prototype);
  IGeoMilSymbol$Modifier.prototype.constructor = IGeoMilSymbol$Modifier;
  IGeoMilSymbol$SymbolStandard.prototype = Object.create(Enum.prototype);
  IGeoMilSymbol$SymbolStandard.prototype.constructor = IGeoMilSymbol$SymbolStandard;
  IGeoRenderable$PathType.prototype = Object.create(Enum.prototype);
  IGeoRenderable$PathType.prototype.constructor = IGeoRenderable$PathType;
  function GetUUIDFunction() {
    GetUUIDFunction_instance = this;
  }
  GetUUIDFunction.prototype.randomUUID = function () {
    function s(n) {
      return h(Math.random() * (1 << (n << 2)) ^ Date.now()).slice(-n);
    }
    function h(n) {
      return (n | 0).toString(16);
    }
    return [s(4) + s(4), s(4), '4' + s(3), h(8 | Math.random() * 4) + s(3), Date.now().toString(16).slice(-10) + s(2)].join('-');
  };
  GetUUIDFunction.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GetUUIDFunction',
    interfaces: []
  };
  var GetUUIDFunction_instance = null;
  function GetUUIDFunction_getInstance() {
    if (GetUUIDFunction_instance === null) {
      new GetUUIDFunction();
    }
    return GetUUIDFunction_instance;
  }
  function GeoAirControlMeasure() {
    GeoRenderable.call(this);
    this.acmType_6kx4hb$_0 = IGeoAirControlMeasure$AcmType$UNKNOWN_getInstance();
    this.attributes_giuhah$_0 = HashMap_init();
  }
  Object.defineProperty(GeoAirControlMeasure.prototype, 'acmType', {
    get: function () {
      return this.acmType_6kx4hb$_0;
    },
    set: function (acmType) {
      this.acmType_6kx4hb$_0 = acmType;
    }
  });
  Object.defineProperty(GeoAirControlMeasure.prototype, 'attributes', {
    get: function () {
      return this.attributes_giuhah$_0;
    },
    set: function (attributes) {
      this.attributes_giuhah$_0 = attributes;
    }
  });
  GeoAirControlMeasure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoAirControlMeasure',
    interfaces: [IGeoAirControlMeasure, GeoRenderable]
  };
  function GeoAltitudeMode() {
    this.altitudeMode_xc64hp$_0 = IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance();
  }
  Object.defineProperty(GeoAltitudeMode.prototype, 'altitudeMode', {
    get: function () {
      return this.altitudeMode_xc64hp$_0;
    },
    set: function (altitudeMode) {
      this.altitudeMode_xc64hp$_0 = altitudeMode;
    }
  });
  GeoAltitudeMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoAltitudeMode',
    interfaces: [IGeoAltitudeMode]
  };
  function GeoBase() {
    this.name_nam85l$_0 = '';
    this.geoId_8kx0xg$_0 = GetUUIDFunction_getInstance().randomUUID();
    this.dataProviderId_b15mgy$_0 = '';
    this.description_syxwhw$_0 = '';
    this.properties_1hnzc1$_0 = HashMap_init();
  }
  Object.defineProperty(GeoBase.prototype, 'name', {
    get: function () {
      return this.name_nam85l$_0;
    },
    set: function (name) {
      this.name_nam85l$_0 = name;
    }
  });
  Object.defineProperty(GeoBase.prototype, 'geoId', {
    get: function () {
      return this.geoId_8kx0xg$_0;
    },
    set: function (geoId) {
      this.geoId_8kx0xg$_0 = geoId;
    }
  });
  Object.defineProperty(GeoBase.prototype, 'dataProviderId', {
    get: function () {
      return this.dataProviderId_b15mgy$_0;
    },
    set: function (dataProviderId) {
      this.dataProviderId_b15mgy$_0 = dataProviderId;
    }
  });
  Object.defineProperty(GeoBase.prototype, 'description', {
    get: function () {
      return this.description_syxwhw$_0;
    },
    set: function (description) {
      this.description_syxwhw$_0 = description;
    }
  });
  Object.defineProperty(GeoBase.prototype, 'properties', {
    get: function () {
      return this.properties_1hnzc1$_0;
    }
  });
  GeoBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoBase',
    interfaces: [IGeoBase]
  };
  function GeoBounds() {
    this.west_2jae6h$_0 = 0;
    this.east_29bjjv$_0 = 0;
    this.north_3gww53$_0 = 0;
    this.south_5u6x2n$_0 = 0;
  }
  Object.defineProperty(GeoBounds.prototype, 'west', {
    get: function () {
      return this.west_2jae6h$_0;
    },
    set: function (west) {
      this.west_2jae6h$_0 = west;
    }
  });
  Object.defineProperty(GeoBounds.prototype, 'east', {
    get: function () {
      return this.east_29bjjv$_0;
    },
    set: function (east) {
      this.east_29bjjv$_0 = east;
    }
  });
  Object.defineProperty(GeoBounds.prototype, 'north', {
    get: function () {
      return this.north_3gww53$_0;
    },
    set: function (north) {
      this.north_3gww53$_0 = north;
    }
  });
  Object.defineProperty(GeoBounds.prototype, 'south', {
    get: function () {
      return this.south_5u6x2n$_0;
    },
    set: function (south) {
      this.south_5u6x2n$_0 = south;
    }
  });
  GeoBounds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoBounds',
    interfaces: [IGeoBounds]
  };
  function GeoCamera() {
    GeoBase.call(this);
    this.altitudeMode_vpfkxv$_0 = IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance();
    this.latitude_i32nq4$_0 = 0.0;
    this.longitude_5ojzrx$_0 = 0.0;
    this.altitude_oo5mau$_0 = 0.0;
    this.tilt_2ntk6j$_0 = 0.0;
    this.roll_2mtsq3$_0 = 0.0;
    this.heading_upedna$_0 = 0.0;
  }
  Object.defineProperty(GeoCamera.prototype, 'altitudeMode', {
    get: function () {
      return this.altitudeMode_vpfkxv$_0;
    },
    set: function (altitudeMode) {
      this.altitudeMode_vpfkxv$_0 = altitudeMode;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'latitude', {
    get: function () {
      return this.latitude_i32nq4$_0;
    },
    set: function (latitude) {
      this.latitude_i32nq4$_0 = latitude;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'longitude', {
    get: function () {
      return this.longitude_5ojzrx$_0;
    },
    set: function (longitude) {
      this.longitude_5ojzrx$_0 = longitude;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'altitude', {
    get: function () {
      return this.altitude_oo5mau$_0;
    },
    set: function (altitude) {
      this.altitude_oo5mau$_0 = altitude;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'tilt', {
    get: function () {
      return this.tilt_2ntk6j$_0;
    },
    set: function (tilt) {
      this.tilt_2ntk6j$_0 = tilt;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'roll', {
    get: function () {
      return this.roll_2mtsq3$_0;
    },
    set: function (roll) {
      this.roll_2mtsq3$_0 = roll;
    }
  });
  Object.defineProperty(GeoCamera.prototype, 'heading', {
    get: function () {
      return this.heading_upedna$_0;
    },
    set: function (heading) {
      this.heading_upedna$_0 = heading;
    }
  });
  GeoCamera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoCamera',
    interfaces: [IGeoCamera, GeoBase]
  };
  function GeoCircle() {
    GeoRenderable.call(this);
    this.radius_u8i07z$_0 = 100.0;
  }
  Object.defineProperty(GeoCircle.prototype, 'radius', {
    get: function () {
      return this.radius_u8i07z$_0;
    },
    set: function (radius) {
      this.radius_u8i07z$_0 = radius;
    }
  });
  GeoCircle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoCircle',
    interfaces: [IGeoCircle, GeoRenderable]
  };
  function GeoColor() {
    this.red_3zhymj$_0 = 0;
    this.green_a1wkdj$_0 = 0;
    this.blue_iqf5gi$_0 = 0;
    this.alpha_cz9zj6$_0 = 0.8;
  }
  Object.defineProperty(GeoColor.prototype, 'red', {
    get: function () {
      return this.red_3zhymj$_0;
    },
    set: function (red) {
      this.red_3zhymj$_0 = red;
    }
  });
  Object.defineProperty(GeoColor.prototype, 'green', {
    get: function () {
      return this.green_a1wkdj$_0;
    },
    set: function (green) {
      this.green_a1wkdj$_0 = green;
    }
  });
  Object.defineProperty(GeoColor.prototype, 'blue', {
    get: function () {
      return this.blue_iqf5gi$_0;
    },
    set: function (blue) {
      this.blue_iqf5gi$_0 = blue;
    }
  });
  Object.defineProperty(GeoColor.prototype, 'alpha', {
    get: function () {
      return this.alpha_cz9zj6$_0;
    },
    set: function (alpha) {
      this.alpha_cz9zj6$_0 = alpha;
    }
  });
  GeoColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoColor',
    interfaces: [IGeoColor]
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function GeoContainer() {
    GeoBase.call(this);
    this.children_k4sy47$_0 = ArrayList_init();
    this.readOnly_314cz8$_0 = false;
  }
  Object.defineProperty(GeoContainer.prototype, 'children', {
    get: function () {
      return this.children_k4sy47$_0;
    }
  });
  Object.defineProperty(GeoContainer.prototype, 'readOnly', {
    get: function () {
      return this.readOnly_314cz8$_0;
    },
    set: function (readOnly) {
      this.readOnly_314cz8$_0 = readOnly;
    }
  });
  GeoContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoContainer',
    interfaces: [IGeoContainer, GeoBase]
  };
  function GeoDocument() {
    GeoBase.call(this);
    this.documentURI_8o6f0b$_0 = '';
    this.documentMIMEType_t968c5$_0 = '';
  }
  Object.defineProperty(GeoDocument.prototype, 'documentURI', {
    get: function () {
      return this.documentURI_8o6f0b$_0;
    },
    set: function (documentURI) {
      this.documentURI_8o6f0b$_0 = documentURI;
    }
  });
  Object.defineProperty(GeoDocument.prototype, 'documentMIMEType', {
    get: function () {
      return this.documentMIMEType_t968c5$_0;
    },
    set: function (documentMIMEType) {
      this.documentMIMEType_t968c5$_0 = documentMIMEType;
    }
  });
  GeoDocument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoDocument',
    interfaces: [IGeoDocument, GeoBase]
  };
  function GeoEllipse() {
    GeoRenderable.call(this);
    this.semiMajor_qumnkm$_0 = 150.0;
    this.semiMinor_qz3k9m$_0 = 75.0;
  }
  Object.defineProperty(GeoEllipse.prototype, 'semiMajor', {
    get: function () {
      return this.semiMajor_qumnkm$_0;
    },
    set: function (semiMajor) {
      this.semiMajor_qumnkm$_0 = semiMajor;
    }
  });
  Object.defineProperty(GeoEllipse.prototype, 'semiMinor', {
    get: function () {
      return this.semiMinor_qz3k9m$_0;
    },
    set: function (semiMinor) {
      this.semiMinor_qz3k9m$_0 = semiMinor;
    }
  });
  GeoEllipse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoEllipse',
    interfaces: [IGeoEllipse, GeoRenderable]
  };
  function GeoFillStyle() {
    this.description_744ms5$_0 = '';
    this.fillColor_u62fw1$_0 = new GeoColor();
    this.fillPattern_snnbq4$_0 = IGeoFillStyle$FillPattern$solid_getInstance();
    this.fillPattern = IGeoFillStyle$FillPattern$solid_getInstance();
  }
  Object.defineProperty(GeoFillStyle.prototype, 'description', {
    get: function () {
      return this.description_744ms5$_0;
    },
    set: function (description) {
      this.description_744ms5$_0 = description;
    }
  });
  Object.defineProperty(GeoFillStyle.prototype, 'fillColor', {
    get: function () {
      return this.fillColor_u62fw1$_0;
    },
    set: function (fillColor) {
      this.fillColor_u62fw1$_0 = fillColor;
    }
  });
  Object.defineProperty(GeoFillStyle.prototype, 'fillPattern', {
    get: function () {
      return this.fillPattern_snnbq4$_0;
    },
    set: function (fillPattern) {
      this.fillPattern_snnbq4$_0 = fillPattern;
    }
  });
  GeoFillStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoFillStyle',
    interfaces: [IGeoFillStyle]
  };
  function GeoIconStyle() {
    this.size_s6vh7w$_0 = 32.0;
    this.offSetX_bd249u$_0 = 0.0;
    this.offSetY_bd24ap$_0 = 0.0;
  }
  Object.defineProperty(GeoIconStyle.prototype, 'size', {
    get: function () {
      return this.size_s6vh7w$_0;
    },
    set: function (size) {
      this.size_s6vh7w$_0 = size;
    }
  });
  Object.defineProperty(GeoIconStyle.prototype, 'offSetX', {
    get: function () {
      return this.offSetX_bd249u$_0;
    },
    set: function (offSetX) {
      this.offSetX_bd249u$_0 = offSetX;
    }
  });
  Object.defineProperty(GeoIconStyle.prototype, 'offSetY', {
    get: function () {
      return this.offSetY_bd24ap$_0;
    },
    set: function (offSetY) {
      this.offSetY_bd24ap$_0 = offSetY;
    }
  });
  GeoIconStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoIconStyle',
    interfaces: [IGeoIconStyle]
  };
  function GeoImageOverlay() {
    GeoRenderable.call(this);
    this.imageURI_qc0tw9$_0 = '';
  }
  Object.defineProperty(GeoImageOverlay.prototype, 'imageURI', {
    get: function () {
      return this.imageURI_qc0tw9$_0;
    },
    set: function (imageURI) {
      this.imageURI_qc0tw9$_0 = imageURI;
    }
  });
  GeoImageOverlay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoImageOverlay',
    interfaces: [IGeoImageOverlay, GeoRenderable]
  };
  function GeoLabelStyle() {
    this.size_w7nk0v$_0 = 12.0;
    this.color_3byeof$_0 = new GeoColor();
    this.outlineColor_d4nl0h$_0 = new GeoColor();
    this.justification_kmuta$_0 = IGeoLabelStyle$Justification$LEFT_getInstance();
    this.fontFamily_vsu4kz$_0 = '';
    this.typeface_aeyxc9$_0 = IGeoLabelStyle$Typeface$REGULAR_getInstance();
    this.justification = IGeoLabelStyle$Justification$LEFT_getInstance();
    this.typeface = IGeoLabelStyle$Typeface$REGULAR_getInstance();
  }
  Object.defineProperty(GeoLabelStyle.prototype, 'size', {
    get: function () {
      return this.size_w7nk0v$_0;
    },
    set: function (size) {
      this.size_w7nk0v$_0 = size;
    }
  });
  Object.defineProperty(GeoLabelStyle.prototype, 'color', {
    get: function () {
      return this.color_3byeof$_0;
    },
    set: function (color) {
      this.color_3byeof$_0 = color;
    }
  });
  Object.defineProperty(GeoLabelStyle.prototype, 'outlineColor', {
    get: function () {
      return this.outlineColor_d4nl0h$_0;
    },
    set: function (outlineColor) {
      this.outlineColor_d4nl0h$_0 = outlineColor;
    }
  });
  Object.defineProperty(GeoLabelStyle.prototype, 'justification', {
    get: function () {
      return this.justification_kmuta$_0;
    },
    set: function (justification) {
      this.justification_kmuta$_0 = justification;
    }
  });
  Object.defineProperty(GeoLabelStyle.prototype, 'fontFamily', {
    get: function () {
      return this.fontFamily_vsu4kz$_0;
    },
    set: function (fontFamily) {
      this.fontFamily_vsu4kz$_0 = fontFamily;
    }
  });
  Object.defineProperty(GeoLabelStyle.prototype, 'typeface', {
    get: function () {
      return this.typeface_aeyxc9$_0;
    },
    set: function (typeface) {
      this.typeface_aeyxc9$_0 = typeface;
    }
  });
  GeoLabelStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoLabelStyle',
    interfaces: [IGeoLabelStyle]
  };
  function GeoLookAt() {
    GeoBase.call(this);
    this.altitudeMode_h9n6k0$_0 = IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance();
    this.latitude_28qmax$_0 = 0.0;
    this.longitude_brz5io$_0 = 0.0;
    this.altitude_8ttkvn$_0 = 0.0;
    this.tilt_8qjgaw$_0 = 0.0;
    this.heading_hgvegz$_0 = 0.0;
    this.range_c78mea$_0 = 1000000.0;
  }
  Object.defineProperty(GeoLookAt.prototype, 'altitudeMode', {
    get: function () {
      return this.altitudeMode_h9n6k0$_0;
    },
    set: function (altitudeMode) {
      this.altitudeMode_h9n6k0$_0 = altitudeMode;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'latitude', {
    get: function () {
      return this.latitude_28qmax$_0;
    },
    set: function (latitude) {
      this.latitude_28qmax$_0 = latitude;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'longitude', {
    get: function () {
      return this.longitude_brz5io$_0;
    },
    set: function (longitude) {
      this.longitude_brz5io$_0 = longitude;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'altitude', {
    get: function () {
      return this.altitude_8ttkvn$_0;
    },
    set: function (altitude) {
      this.altitude_8ttkvn$_0 = altitude;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'tilt', {
    get: function () {
      return this.tilt_8qjgaw$_0;
    },
    set: function (tilt) {
      this.tilt_8qjgaw$_0 = tilt;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'heading', {
    get: function () {
      return this.heading_hgvegz$_0;
    },
    set: function (heading) {
      this.heading_hgvegz$_0 = heading;
    }
  });
  Object.defineProperty(GeoLookAt.prototype, 'range', {
    get: function () {
      return this.range_c78mea$_0;
    },
    set: function (range) {
      this.range_c78mea$_0 = range;
    }
  });
  GeoLookAt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoLookAt',
    interfaces: [IGeoLookAt, GeoBase]
  };
  function GeoMilSymbol() {
    GeoRenderable.call(this);
    this.symbolStandard_2vpq48$_0 = IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance();
    this.symbolCode_qbt5bc$_0 = '';
    this.modifiers_9z1naz$_0 = HashMap_init();
    this.symbolStandard = IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance();
    this.symbolCode = 'SUGP-----------';
    this.modifiers = HashMap_init();
  }
  Object.defineProperty(GeoMilSymbol.prototype, 'symbolStandard', {
    get: function () {
      return this.symbolStandard_2vpq48$_0;
    },
    set: function (symbolStandard) {
      this.symbolStandard_2vpq48$_0 = symbolStandard;
    }
  });
  Object.defineProperty(GeoMilSymbol.prototype, 'symbolCode', {
    get: function () {
      return this.symbolCode_qbt5bc$_0;
    },
    set: function (symbolCode) {
      this.symbolCode_qbt5bc$_0 = symbolCode;
    }
  });
  Object.defineProperty(GeoMilSymbol.prototype, 'modifiers', {
    get: function () {
      return this.modifiers_9z1naz$_0;
    },
    set: function (modifiers) {
      this.modifiers_9z1naz$_0 = modifiers;
    }
  });
  GeoMilSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoMilSymbol',
    interfaces: [IGeoMilSymbol, GeoRenderable]
  };
  function GeoPath() {
    GeoRenderable.call(this);
  }
  GeoPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPath',
    interfaces: [IGeoPath, GeoRenderable]
  };
  function GeoPoint() {
    GeoRenderable.call(this);
    this.iconStyle_ifuj5j$_0 = new GeoIconStyle();
    this.iconURI_xy1wv0$_0 = '';
  }
  Object.defineProperty(GeoPoint.prototype, 'iconStyle', {
    get: function () {
      return this.iconStyle_ifuj5j$_0;
    },
    set: function (iconStyle) {
      this.iconStyle_ifuj5j$_0 = iconStyle;
    }
  });
  Object.defineProperty(GeoPoint.prototype, 'iconURI', {
    get: function () {
      return this.iconURI_xy1wv0$_0;
    },
    set: function (iconURI) {
      this.iconURI_xy1wv0$_0 = iconURI;
    }
  });
  GeoPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPoint',
    interfaces: [IGeoPoint, GeoRenderable]
  };
  function GeoPolygon() {
    GeoRenderable.call(this);
  }
  GeoPolygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPolygon',
    interfaces: [IGeoPolygon, GeoRenderable]
  };
  function GeoPosition() {
    this.latitude_y20f6o$_0 = 0.0;
    this.longitude_3ju97d$_0 = 0.0;
    this.altitude_ue0o7q$_0 = 0.0;
  }
  Object.defineProperty(GeoPosition.prototype, 'latitude', {
    get: function () {
      return this.latitude_y20f6o$_0;
    },
    set: function (latitude) {
      this.latitude_y20f6o$_0 = latitude;
    }
  });
  Object.defineProperty(GeoPosition.prototype, 'longitude', {
    get: function () {
      return this.longitude_3ju97d$_0;
    },
    set: function (longitude) {
      this.longitude_3ju97d$_0 = longitude;
    }
  });
  Object.defineProperty(GeoPosition.prototype, 'altitude', {
    get: function () {
      return this.altitude_ue0o7q$_0;
    },
    set: function (altitude) {
      this.altitude_ue0o7q$_0 = altitude;
    }
  });
  GeoPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPosition',
    interfaces: [IGeoPosition]
  };
  function GeoPositionGroup() {
    GeoAltitudeMode.call(this);
    this.positions_42zv27$_0 = ArrayList_init();
    this.timeStamp_5n8jrh$_0 = new Date();
    this.timeSpans_5pfpbn$_0 = ArrayList_init();
  }
  Object.defineProperty(GeoPositionGroup.prototype, 'positions', {
    get: function () {
      return this.positions_42zv27$_0;
    },
    set: function (positions) {
      this.positions_42zv27$_0 = positions;
    }
  });
  Object.defineProperty(GeoPositionGroup.prototype, 'timeStamp', {
    get: function () {
      return this.timeStamp_5n8jrh$_0;
    },
    set: function (timeStamp) {
      this.timeStamp_5n8jrh$_0 = timeStamp;
    }
  });
  Object.defineProperty(GeoPositionGroup.prototype, 'timeSpans', {
    get: function () {
      return this.timeSpans_5pfpbn$_0;
    },
    set: function (timeSpans) {
      this.timeSpans_5pfpbn$_0 = timeSpans;
    }
  });
  GeoPositionGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPositionGroup',
    interfaces: [IGeoPositionGroup, GeoAltitudeMode]
  };
  function GeoPositionHistory() {
    this.positionHistory_l0s33d$_0 = ArrayList_init();
  }
  Object.defineProperty(GeoPositionHistory.prototype, 'positionHistory', {
    get: function () {
      return this.positionHistory_l0s33d$_0;
    },
    set: function (positionHistory) {
      this.positionHistory_l0s33d$_0 = positionHistory;
    }
  });
  GeoPositionHistory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoPositionHistory',
    interfaces: [IGeoPositionHistory]
  };
  function GeoRectangle() {
    GeoRenderable.call(this);
    this.width_jxlqc6$_0 = 150.0;
    this.height_cg0xvh$_0 = 75.0;
  }
  Object.defineProperty(GeoRectangle.prototype, 'width', {
    get: function () {
      return this.width_jxlqc6$_0;
    },
    set: function (width) {
      this.width_jxlqc6$_0 = width;
    }
  });
  Object.defineProperty(GeoRectangle.prototype, 'height', {
    get: function () {
      return this.height_cg0xvh$_0;
    },
    set: function (height) {
      this.height_cg0xvh$_0 = height;
    }
  });
  GeoRectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoRectangle',
    interfaces: [IGeoRectangle, GeoRenderable]
  };
  function GeoRenderable() {
    GeoContainer.call(this);
    this.altitudeMode_5q5vle$_0 = IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance();
    this.positions_s88rb$_0 = ArrayList_init();
    this.timeStamp_8y062d$_0 = new Date();
    this.timeSpans_907bmj$_0 = ArrayList_init();
    this.labelStyle_rm0rbq$_0 = new GeoLabelStyle();
    this.strokeStyle_wyi0eg$_0 = new GeoStrokeStyle();
    this.fillStyle_vknxrh$_0 = new GeoFillStyle();
    this.extrude_4ibidg$_0 = false;
    this.tessellate_7d7awl$_0 = true;
    this.buffer_g1oj6b$_0 = 0.0;
    this.azimuth_op59kb$_0 = 0.0;
    this.pathType_8wumk$_0 = IGeoRenderable$PathType$GREAT_CIRCLE_getInstance();
    this.pathType = IGeoRenderable$PathType$GREAT_CIRCLE_getInstance();
  }
  Object.defineProperty(GeoRenderable.prototype, 'altitudeMode', {
    get: function () {
      return this.altitudeMode_5q5vle$_0;
    },
    set: function (altitudeMode) {
      this.altitudeMode_5q5vle$_0 = altitudeMode;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'positions', {
    get: function () {
      return this.positions_s88rb$_0;
    },
    set: function (positions) {
      this.positions_s88rb$_0 = positions;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'timeStamp', {
    get: function () {
      return this.timeStamp_8y062d$_0;
    },
    set: function (timeStamp) {
      this.timeStamp_8y062d$_0 = timeStamp;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'timeSpans', {
    get: function () {
      return this.timeSpans_907bmj$_0;
    },
    set: function (timeSpans) {
      this.timeSpans_907bmj$_0 = timeSpans;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'labelStyle', {
    get: function () {
      return this.labelStyle_rm0rbq$_0;
    },
    set: function (labelStyle) {
      this.labelStyle_rm0rbq$_0 = labelStyle;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'strokeStyle', {
    get: function () {
      return this.strokeStyle_wyi0eg$_0;
    },
    set: function (strokeStyle) {
      this.strokeStyle_wyi0eg$_0 = strokeStyle;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'fillStyle', {
    get: function () {
      return this.fillStyle_vknxrh$_0;
    },
    set: function (fillStyle) {
      this.fillStyle_vknxrh$_0 = fillStyle;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'extrude', {
    get: function () {
      return this.extrude_4ibidg$_0;
    },
    set: function (extrude) {
      this.extrude_4ibidg$_0 = extrude;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'tessellate', {
    get: function () {
      return this.tessellate_7d7awl$_0;
    },
    set: function (tessellate) {
      this.tessellate_7d7awl$_0 = tessellate;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'buffer', {
    get: function () {
      return this.buffer_g1oj6b$_0;
    },
    set: function (buffer) {
      this.buffer_g1oj6b$_0 = buffer;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'azimuth', {
    get: function () {
      return this.azimuth_op59kb$_0;
    },
    set: function (azimuth) {
      this.azimuth_op59kb$_0 = azimuth;
    }
  });
  Object.defineProperty(GeoRenderable.prototype, 'pathType', {
    get: function () {
      return this.pathType_8wumk$_0;
    },
    set: function (pathType) {
      this.pathType_8wumk$_0 = pathType;
    }
  });
  GeoRenderable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoRenderable',
    interfaces: [IGeoRenderable, GeoContainer]
  };
  function GeoSquare() {
    GeoRenderable.call(this);
    this.width_20vhke$_0 = 100.0;
  }
  Object.defineProperty(GeoSquare.prototype, 'width', {
    get: function () {
      return this.width_20vhke$_0;
    },
    set: function (width) {
      this.width_20vhke$_0 = width;
    }
  });
  GeoSquare.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoSquare',
    interfaces: [IGeoSquare, GeoRenderable]
  };
  function GeoStrokeStyle() {
    this.strokeColor_vm7u3p$_0 = new GeoColor();
    this.stipplingPattern_nz67dw$_0 = 0;
    this.stipplingFactor_ckyza1$_0 = 0;
    this.strokeWidth_m8r67c$_0 = 3.0;
  }
  Object.defineProperty(GeoStrokeStyle.prototype, 'strokeColor', {
    get: function () {
      return this.strokeColor_vm7u3p$_0;
    },
    set: function (strokeColor) {
      this.strokeColor_vm7u3p$_0 = strokeColor;
    }
  });
  Object.defineProperty(GeoStrokeStyle.prototype, 'stipplingPattern', {
    get: function () {
      return this.stipplingPattern_nz67dw$_0;
    },
    set: function (stipplingPattern) {
      this.stipplingPattern_nz67dw$_0 = stipplingPattern;
    }
  });
  Object.defineProperty(GeoStrokeStyle.prototype, 'stipplingFactor', {
    get: function () {
      return this.stipplingFactor_ckyza1$_0;
    },
    set: function (stipplingFactor) {
      this.stipplingFactor_ckyza1$_0 = stipplingFactor;
    }
  });
  Object.defineProperty(GeoStrokeStyle.prototype, 'strokeWidth', {
    get: function () {
      return this.strokeWidth_m8r67c$_0;
    },
    set: function (strokeWidth) {
      this.strokeWidth_m8r67c$_0 = strokeWidth;
    }
  });
  GeoStrokeStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoStrokeStyle',
    interfaces: [IGeoStrokeStyle]
  };
  function GeoText() {
    GeoRenderable.call(this);
  }
  GeoText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoText',
    interfaces: [IGeoText, GeoRenderable]
  };
  function GeoTimeSpan() {
    this.begin_yv3769$_0 = new Date();
    this.end_a0il7l$_0 = new Date();
  }
  Object.defineProperty(GeoTimeSpan.prototype, 'begin', {
    get: function () {
      return this.begin_yv3769$_0;
    },
    set: function (begin) {
      this.begin_yv3769$_0 = begin;
    }
  });
  Object.defineProperty(GeoTimeSpan.prototype, 'end', {
    get: function () {
      return this.end_a0il7l$_0;
    },
    set: function (end) {
      this.end_a0il7l$_0 = end;
    }
  });
  GeoTimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoTimeSpan',
    interfaces: [IGeoTimeSpan]
  };
  function GeoView() {
    this.camera_f00vr7$_0 = new GeoCamera();
    this.lookAt_bp6gk6$_0 = new GeoLookAt();
    this.bounds_72t4qb$_0 = new GeoBounds();
    this.scale_nzsk9q$_0 = 0.0;
  }
  Object.defineProperty(GeoView.prototype, 'camera', {
    get: function () {
      return this.camera_f00vr7$_0;
    },
    set: function (camera) {
      this.camera_f00vr7$_0 = camera;
    }
  });
  Object.defineProperty(GeoView.prototype, 'lookAt', {
    get: function () {
      return this.lookAt_bp6gk6$_0;
    },
    set: function (lookAt) {
      this.lookAt_bp6gk6$_0 = lookAt;
    }
  });
  Object.defineProperty(GeoView.prototype, 'bounds', {
    get: function () {
      return this.bounds_72t4qb$_0;
    },
    set: function (bounds) {
      this.bounds_72t4qb$_0 = bounds;
    }
  });
  Object.defineProperty(GeoView.prototype, 'scale', {
    get: function () {
      return this.scale_nzsk9q$_0;
    },
    set: function (scale) {
      this.scale_nzsk9q$_0 = scale;
    }
  });
  GeoView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeoView',
    interfaces: [IGeoView]
  };
  function IGeoAirControlMeasure() {
  }
  function IGeoAirControlMeasure$Attribute(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoAirControlMeasure$Attribute_initFields() {
    IGeoAirControlMeasure$Attribute_initFields = function () {
    };
    IGeoAirControlMeasure$Attribute$RADIUS_instance = new IGeoAirControlMeasure$Attribute('RADIUS', 0);
    IGeoAirControlMeasure$Attribute$INNER_RADIUS_instance = new IGeoAirControlMeasure$Attribute('INNER_RADIUS', 1);
    IGeoAirControlMeasure$Attribute$TURN_instance = new IGeoAirControlMeasure$Attribute('TURN', 2);
    IGeoAirControlMeasure$Attribute$MIN_ALT_instance = new IGeoAirControlMeasure$Attribute('MIN_ALT', 3);
    IGeoAirControlMeasure$Attribute$MAX_ALT_instance = new IGeoAirControlMeasure$Attribute('MAX_ALT', 4);
    IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_instance = new IGeoAirControlMeasure$Attribute('LEFT_AZIMUTH', 5);
    IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_instance = new IGeoAirControlMeasure$Attribute('RIGHT_AZIMUTH', 6);
    IGeoAirControlMeasure$Attribute$WIDTH_instance = new IGeoAirControlMeasure$Attribute('WIDTH', 7);
    IGeoAirControlMeasure$Attribute$LEFT_WIDTH_instance = new IGeoAirControlMeasure$Attribute('LEFT_WIDTH', 8);
    IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_instance = new IGeoAirControlMeasure$Attribute('RIGHT_WIDTH', 9);
  }
  var IGeoAirControlMeasure$Attribute$RADIUS_instance;
  function IGeoAirControlMeasure$Attribute$RADIUS_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$RADIUS_instance;
  }
  var IGeoAirControlMeasure$Attribute$INNER_RADIUS_instance;
  function IGeoAirControlMeasure$Attribute$INNER_RADIUS_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$INNER_RADIUS_instance;
  }
  var IGeoAirControlMeasure$Attribute$TURN_instance;
  function IGeoAirControlMeasure$Attribute$TURN_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$TURN_instance;
  }
  var IGeoAirControlMeasure$Attribute$MIN_ALT_instance;
  function IGeoAirControlMeasure$Attribute$MIN_ALT_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$MIN_ALT_instance;
  }
  var IGeoAirControlMeasure$Attribute$MAX_ALT_instance;
  function IGeoAirControlMeasure$Attribute$MAX_ALT_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$MAX_ALT_instance;
  }
  var IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_instance;
  function IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_instance;
  }
  var IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_instance;
  function IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_instance;
  }
  var IGeoAirControlMeasure$Attribute$WIDTH_instance;
  function IGeoAirControlMeasure$Attribute$WIDTH_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$WIDTH_instance;
  }
  var IGeoAirControlMeasure$Attribute$LEFT_WIDTH_instance;
  function IGeoAirControlMeasure$Attribute$LEFT_WIDTH_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$LEFT_WIDTH_instance;
  }
  var IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_instance;
  function IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_getInstance() {
    IGeoAirControlMeasure$Attribute_initFields();
    return IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_instance;
  }
  IGeoAirControlMeasure$Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: [Enum]
  };
  function IGeoAirControlMeasure$Attribute$values() {
    return [IGeoAirControlMeasure$Attribute$RADIUS_getInstance(), IGeoAirControlMeasure$Attribute$INNER_RADIUS_getInstance(), IGeoAirControlMeasure$Attribute$TURN_getInstance(), IGeoAirControlMeasure$Attribute$MIN_ALT_getInstance(), IGeoAirControlMeasure$Attribute$MAX_ALT_getInstance(), IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_getInstance(), IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_getInstance(), IGeoAirControlMeasure$Attribute$WIDTH_getInstance(), IGeoAirControlMeasure$Attribute$LEFT_WIDTH_getInstance(), IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_getInstance()];
  }
  IGeoAirControlMeasure$Attribute.values = IGeoAirControlMeasure$Attribute$values;
  function IGeoAirControlMeasure$Attribute$valueOf(name) {
    switch (name) {
      case 'RADIUS':
        return IGeoAirControlMeasure$Attribute$RADIUS_getInstance();
      case 'INNER_RADIUS':
        return IGeoAirControlMeasure$Attribute$INNER_RADIUS_getInstance();
      case 'TURN':
        return IGeoAirControlMeasure$Attribute$TURN_getInstance();
      case 'MIN_ALT':
        return IGeoAirControlMeasure$Attribute$MIN_ALT_getInstance();
      case 'MAX_ALT':
        return IGeoAirControlMeasure$Attribute$MAX_ALT_getInstance();
      case 'LEFT_AZIMUTH':
        return IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_getInstance();
      case 'RIGHT_AZIMUTH':
        return IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_getInstance();
      case 'WIDTH':
        return IGeoAirControlMeasure$Attribute$WIDTH_getInstance();
      case 'LEFT_WIDTH':
        return IGeoAirControlMeasure$Attribute$LEFT_WIDTH_getInstance();
      case 'RIGHT_WIDTH':
        return IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoAirControlMeasure.Attribute.' + name);
    }
  }
  IGeoAirControlMeasure$Attribute.valueOf_61zpoe$ = IGeoAirControlMeasure$Attribute$valueOf;
  function IGeoAirControlMeasure$AcmType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoAirControlMeasure$AcmType_initFields() {
    IGeoAirControlMeasure$AcmType_initFields = function () {
    };
    IGeoAirControlMeasure$AcmType$UNKNOWN_instance = new IGeoAirControlMeasure$AcmType('UNKNOWN', 0);
    IGeoAirControlMeasure$AcmType$ROUTE_instance = new IGeoAirControlMeasure$AcmType('ROUTE', 1);
    IGeoAirControlMeasure$AcmType$CYLINDER_instance = new IGeoAirControlMeasure$AcmType('CYLINDER', 2);
    IGeoAirControlMeasure$AcmType$ORBIT_instance = new IGeoAirControlMeasure$AcmType('ORBIT', 3);
    IGeoAirControlMeasure$AcmType$POLYGON_instance = new IGeoAirControlMeasure$AcmType('POLYGON', 4);
    IGeoAirControlMeasure$AcmType$RADARC_instance = new IGeoAirControlMeasure$AcmType('RADARC', 5);
    IGeoAirControlMeasure$AcmType$POLYARC_instance = new IGeoAirControlMeasure$AcmType('POLYARC', 6);
    IGeoAirControlMeasure$AcmType$TRACK_instance = new IGeoAirControlMeasure$AcmType('TRACK', 7);
    IGeoAirControlMeasure$AcmType$CURTAIN_instance = new IGeoAirControlMeasure$AcmType('CURTAIN', 8);
  }
  var IGeoAirControlMeasure$AcmType$UNKNOWN_instance;
  function IGeoAirControlMeasure$AcmType$UNKNOWN_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$UNKNOWN_instance;
  }
  var IGeoAirControlMeasure$AcmType$ROUTE_instance;
  function IGeoAirControlMeasure$AcmType$ROUTE_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$ROUTE_instance;
  }
  var IGeoAirControlMeasure$AcmType$CYLINDER_instance;
  function IGeoAirControlMeasure$AcmType$CYLINDER_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$CYLINDER_instance;
  }
  var IGeoAirControlMeasure$AcmType$ORBIT_instance;
  function IGeoAirControlMeasure$AcmType$ORBIT_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$ORBIT_instance;
  }
  var IGeoAirControlMeasure$AcmType$POLYGON_instance;
  function IGeoAirControlMeasure$AcmType$POLYGON_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$POLYGON_instance;
  }
  var IGeoAirControlMeasure$AcmType$RADARC_instance;
  function IGeoAirControlMeasure$AcmType$RADARC_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$RADARC_instance;
  }
  var IGeoAirControlMeasure$AcmType$POLYARC_instance;
  function IGeoAirControlMeasure$AcmType$POLYARC_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$POLYARC_instance;
  }
  var IGeoAirControlMeasure$AcmType$TRACK_instance;
  function IGeoAirControlMeasure$AcmType$TRACK_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$TRACK_instance;
  }
  var IGeoAirControlMeasure$AcmType$CURTAIN_instance;
  function IGeoAirControlMeasure$AcmType$CURTAIN_getInstance() {
    IGeoAirControlMeasure$AcmType_initFields();
    return IGeoAirControlMeasure$AcmType$CURTAIN_instance;
  }
  IGeoAirControlMeasure$AcmType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AcmType',
    interfaces: [Enum]
  };
  function IGeoAirControlMeasure$AcmType$values() {
    return [IGeoAirControlMeasure$AcmType$UNKNOWN_getInstance(), IGeoAirControlMeasure$AcmType$ROUTE_getInstance(), IGeoAirControlMeasure$AcmType$CYLINDER_getInstance(), IGeoAirControlMeasure$AcmType$ORBIT_getInstance(), IGeoAirControlMeasure$AcmType$POLYGON_getInstance(), IGeoAirControlMeasure$AcmType$RADARC_getInstance(), IGeoAirControlMeasure$AcmType$POLYARC_getInstance(), IGeoAirControlMeasure$AcmType$TRACK_getInstance(), IGeoAirControlMeasure$AcmType$CURTAIN_getInstance()];
  }
  IGeoAirControlMeasure$AcmType.values = IGeoAirControlMeasure$AcmType$values;
  function IGeoAirControlMeasure$AcmType$valueOf(name) {
    switch (name) {
      case 'UNKNOWN':
        return IGeoAirControlMeasure$AcmType$UNKNOWN_getInstance();
      case 'ROUTE':
        return IGeoAirControlMeasure$AcmType$ROUTE_getInstance();
      case 'CYLINDER':
        return IGeoAirControlMeasure$AcmType$CYLINDER_getInstance();
      case 'ORBIT':
        return IGeoAirControlMeasure$AcmType$ORBIT_getInstance();
      case 'POLYGON':
        return IGeoAirControlMeasure$AcmType$POLYGON_getInstance();
      case 'RADARC':
        return IGeoAirControlMeasure$AcmType$RADARC_getInstance();
      case 'POLYARC':
        return IGeoAirControlMeasure$AcmType$POLYARC_getInstance();
      case 'TRACK':
        return IGeoAirControlMeasure$AcmType$TRACK_getInstance();
      case 'CURTAIN':
        return IGeoAirControlMeasure$AcmType$CURTAIN_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoAirControlMeasure.AcmType.' + name);
    }
  }
  IGeoAirControlMeasure$AcmType.valueOf_61zpoe$ = IGeoAirControlMeasure$AcmType$valueOf;
  IGeoAirControlMeasure.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoAirControlMeasure',
    interfaces: [IGeoRenderable]
  };
  function IGeoAltitudeMode() {
  }
  function IGeoAltitudeMode$AltitudeMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoAltitudeMode$AltitudeMode_initFields() {
    IGeoAltitudeMode$AltitudeMode_initFields = function () {
    };
    IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_instance = new IGeoAltitudeMode$AltitudeMode('CLAMP_TO_GROUND', 0);
    IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_instance = new IGeoAltitudeMode$AltitudeMode('RELATIVE_TO_GROUND', 1);
    IGeoAltitudeMode$AltitudeMode$ABSOLUTE_instance = new IGeoAltitudeMode$AltitudeMode('ABSOLUTE', 2);
  }
  var IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_instance;
  function IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_getInstance() {
    IGeoAltitudeMode$AltitudeMode_initFields();
    return IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_instance;
  }
  var IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_instance;
  function IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance() {
    IGeoAltitudeMode$AltitudeMode_initFields();
    return IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_instance;
  }
  var IGeoAltitudeMode$AltitudeMode$ABSOLUTE_instance;
  function IGeoAltitudeMode$AltitudeMode$ABSOLUTE_getInstance() {
    IGeoAltitudeMode$AltitudeMode_initFields();
    return IGeoAltitudeMode$AltitudeMode$ABSOLUTE_instance;
  }
  IGeoAltitudeMode$AltitudeMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AltitudeMode',
    interfaces: [Enum]
  };
  function IGeoAltitudeMode$AltitudeMode$values() {
    return [IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_getInstance(), IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance(), IGeoAltitudeMode$AltitudeMode$ABSOLUTE_getInstance()];
  }
  IGeoAltitudeMode$AltitudeMode.values = IGeoAltitudeMode$AltitudeMode$values;
  function IGeoAltitudeMode$AltitudeMode$valueOf(name) {
    switch (name) {
      case 'CLAMP_TO_GROUND':
        return IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_getInstance();
      case 'RELATIVE_TO_GROUND':
        return IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance();
      case 'ABSOLUTE':
        return IGeoAltitudeMode$AltitudeMode$ABSOLUTE_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoAltitudeMode.AltitudeMode.' + name);
    }
  }
  IGeoAltitudeMode$AltitudeMode.valueOf_61zpoe$ = IGeoAltitudeMode$AltitudeMode$valueOf;
  IGeoAltitudeMode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoAltitudeMode',
    interfaces: []
  };
  function IGeoBase() {
  }
  IGeoBase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoBase',
    interfaces: []
  };
  function IGeoBounds() {
  }
  IGeoBounds.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoBounds',
    interfaces: []
  };
  function IGeoCamera() {
  }
  IGeoCamera.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoCamera',
    interfaces: [IGeoBase, IGeoPosition, IGeoAltitudeMode]
  };
  function IGeoCircle() {
  }
  IGeoCircle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoCircle',
    interfaces: [IGeoRenderable]
  };
  function IGeoColor() {
  }
  IGeoColor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoColor',
    interfaces: []
  };
  function IGeoContainer() {
  }
  IGeoContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoContainer',
    interfaces: [IGeoBase]
  };
  function IGeoDocument() {
  }
  IGeoDocument.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoDocument',
    interfaces: [IGeoBase]
  };
  function IGeoEllipse() {
  }
  IGeoEllipse.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoEllipse',
    interfaces: [IGeoRenderable]
  };
  function IGeoFillStyle() {
  }
  function IGeoFillStyle$FillPattern(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoFillStyle$FillPattern_initFields() {
    IGeoFillStyle$FillPattern_initFields = function () {
    };
    IGeoFillStyle$FillPattern$solid_instance = new IGeoFillStyle$FillPattern('solid', 0);
    IGeoFillStyle$FillPattern$hatched_instance = new IGeoFillStyle$FillPattern('hatched', 1);
    IGeoFillStyle$FillPattern$crossHatched_instance = new IGeoFillStyle$FillPattern('crossHatched', 2);
  }
  var IGeoFillStyle$FillPattern$solid_instance;
  function IGeoFillStyle$FillPattern$solid_getInstance() {
    IGeoFillStyle$FillPattern_initFields();
    return IGeoFillStyle$FillPattern$solid_instance;
  }
  var IGeoFillStyle$FillPattern$hatched_instance;
  function IGeoFillStyle$FillPattern$hatched_getInstance() {
    IGeoFillStyle$FillPattern_initFields();
    return IGeoFillStyle$FillPattern$hatched_instance;
  }
  var IGeoFillStyle$FillPattern$crossHatched_instance;
  function IGeoFillStyle$FillPattern$crossHatched_getInstance() {
    IGeoFillStyle$FillPattern_initFields();
    return IGeoFillStyle$FillPattern$crossHatched_instance;
  }
  IGeoFillStyle$FillPattern.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FillPattern',
    interfaces: [Enum]
  };
  function IGeoFillStyle$FillPattern$values() {
    return [IGeoFillStyle$FillPattern$solid_getInstance(), IGeoFillStyle$FillPattern$hatched_getInstance(), IGeoFillStyle$FillPattern$crossHatched_getInstance()];
  }
  IGeoFillStyle$FillPattern.values = IGeoFillStyle$FillPattern$values;
  function IGeoFillStyle$FillPattern$valueOf(name) {
    switch (name) {
      case 'solid':
        return IGeoFillStyle$FillPattern$solid_getInstance();
      case 'hatched':
        return IGeoFillStyle$FillPattern$hatched_getInstance();
      case 'crossHatched':
        return IGeoFillStyle$FillPattern$crossHatched_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoFillStyle.FillPattern.' + name);
    }
  }
  IGeoFillStyle$FillPattern.valueOf_61zpoe$ = IGeoFillStyle$FillPattern$valueOf;
  IGeoFillStyle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoFillStyle',
    interfaces: []
  };
  function IGeoIconStyle() {
  }
  IGeoIconStyle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoIconStyle',
    interfaces: []
  };
  function IGeoImageOverlay() {
  }
  IGeoImageOverlay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoImageOverlay',
    interfaces: [IGeoRenderable]
  };
  function IGeoLabelStyle() {
  }
  function IGeoLabelStyle$Typeface(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoLabelStyle$Typeface_initFields() {
    IGeoLabelStyle$Typeface_initFields = function () {
    };
    IGeoLabelStyle$Typeface$REGULAR_instance = new IGeoLabelStyle$Typeface('REGULAR', 0);
    IGeoLabelStyle$Typeface$BOLD_instance = new IGeoLabelStyle$Typeface('BOLD', 1);
    IGeoLabelStyle$Typeface$ITALIC_instance = new IGeoLabelStyle$Typeface('ITALIC', 2);
    IGeoLabelStyle$Typeface$BOLDITALIC_instance = new IGeoLabelStyle$Typeface('BOLDITALIC', 3);
  }
  var IGeoLabelStyle$Typeface$REGULAR_instance;
  function IGeoLabelStyle$Typeface$REGULAR_getInstance() {
    IGeoLabelStyle$Typeface_initFields();
    return IGeoLabelStyle$Typeface$REGULAR_instance;
  }
  var IGeoLabelStyle$Typeface$BOLD_instance;
  function IGeoLabelStyle$Typeface$BOLD_getInstance() {
    IGeoLabelStyle$Typeface_initFields();
    return IGeoLabelStyle$Typeface$BOLD_instance;
  }
  var IGeoLabelStyle$Typeface$ITALIC_instance;
  function IGeoLabelStyle$Typeface$ITALIC_getInstance() {
    IGeoLabelStyle$Typeface_initFields();
    return IGeoLabelStyle$Typeface$ITALIC_instance;
  }
  var IGeoLabelStyle$Typeface$BOLDITALIC_instance;
  function IGeoLabelStyle$Typeface$BOLDITALIC_getInstance() {
    IGeoLabelStyle$Typeface_initFields();
    return IGeoLabelStyle$Typeface$BOLDITALIC_instance;
  }
  IGeoLabelStyle$Typeface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Typeface',
    interfaces: [Enum]
  };
  function IGeoLabelStyle$Typeface$values() {
    return [IGeoLabelStyle$Typeface$REGULAR_getInstance(), IGeoLabelStyle$Typeface$BOLD_getInstance(), IGeoLabelStyle$Typeface$ITALIC_getInstance(), IGeoLabelStyle$Typeface$BOLDITALIC_getInstance()];
  }
  IGeoLabelStyle$Typeface.values = IGeoLabelStyle$Typeface$values;
  function IGeoLabelStyle$Typeface$valueOf(name) {
    switch (name) {
      case 'REGULAR':
        return IGeoLabelStyle$Typeface$REGULAR_getInstance();
      case 'BOLD':
        return IGeoLabelStyle$Typeface$BOLD_getInstance();
      case 'ITALIC':
        return IGeoLabelStyle$Typeface$ITALIC_getInstance();
      case 'BOLDITALIC':
        return IGeoLabelStyle$Typeface$BOLDITALIC_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoLabelStyle.Typeface.' + name);
    }
  }
  IGeoLabelStyle$Typeface.valueOf_61zpoe$ = IGeoLabelStyle$Typeface$valueOf;
  function IGeoLabelStyle$Justification(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoLabelStyle$Justification_initFields() {
    IGeoLabelStyle$Justification_initFields = function () {
    };
    IGeoLabelStyle$Justification$LEFT_instance = new IGeoLabelStyle$Justification('LEFT', 0);
    IGeoLabelStyle$Justification$CENTER_instance = new IGeoLabelStyle$Justification('CENTER', 1);
    IGeoLabelStyle$Justification$RIGHT_instance = new IGeoLabelStyle$Justification('RIGHT', 2);
  }
  var IGeoLabelStyle$Justification$LEFT_instance;
  function IGeoLabelStyle$Justification$LEFT_getInstance() {
    IGeoLabelStyle$Justification_initFields();
    return IGeoLabelStyle$Justification$LEFT_instance;
  }
  var IGeoLabelStyle$Justification$CENTER_instance;
  function IGeoLabelStyle$Justification$CENTER_getInstance() {
    IGeoLabelStyle$Justification_initFields();
    return IGeoLabelStyle$Justification$CENTER_instance;
  }
  var IGeoLabelStyle$Justification$RIGHT_instance;
  function IGeoLabelStyle$Justification$RIGHT_getInstance() {
    IGeoLabelStyle$Justification_initFields();
    return IGeoLabelStyle$Justification$RIGHT_instance;
  }
  IGeoLabelStyle$Justification.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Justification',
    interfaces: [Enum]
  };
  function IGeoLabelStyle$Justification$values() {
    return [IGeoLabelStyle$Justification$LEFT_getInstance(), IGeoLabelStyle$Justification$CENTER_getInstance(), IGeoLabelStyle$Justification$RIGHT_getInstance()];
  }
  IGeoLabelStyle$Justification.values = IGeoLabelStyle$Justification$values;
  function IGeoLabelStyle$Justification$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return IGeoLabelStyle$Justification$LEFT_getInstance();
      case 'CENTER':
        return IGeoLabelStyle$Justification$CENTER_getInstance();
      case 'RIGHT':
        return IGeoLabelStyle$Justification$RIGHT_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoLabelStyle.Justification.' + name);
    }
  }
  IGeoLabelStyle$Justification.valueOf_61zpoe$ = IGeoLabelStyle$Justification$valueOf;
  IGeoLabelStyle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoLabelStyle',
    interfaces: []
  };
  function IGeoLookAt() {
  }
  IGeoLookAt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoLookAt',
    interfaces: [IGeoBase, IGeoPosition, IGeoAltitudeMode]
  };
  function IGeoMessage() {
  }
  IGeoMessage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoMessage',
    interfaces: []
  };
  function IGeoMilSymbol() {
  }
  function IGeoMilSymbol$Modifier(name, ordinal, value) {
    Enum.call(this);
    this.value_xgblh4$_0 = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoMilSymbol$Modifier_initFields() {
    IGeoMilSymbol$Modifier_initFields = function () {
    };
    IGeoMilSymbol$Modifier$SYMBOL_ICON_instance = new IGeoMilSymbol$Modifier('SYMBOL_ICON', 0, 'A');
    IGeoMilSymbol$Modifier$ECHELON_instance = new IGeoMilSymbol$Modifier('ECHELON', 1, 'B');
    IGeoMilSymbol$Modifier$QUANTITY_instance = new IGeoMilSymbol$Modifier('QUANTITY', 2, 'C');
    IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_instance = new IGeoMilSymbol$Modifier('TASK_FORCE_INDICATOR', 3, 'D');
    IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_instance = new IGeoMilSymbol$Modifier('FRAME_SHAPE_MODIFIER', 4, 'E');
    IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_instance = new IGeoMilSymbol$Modifier('REDUCED_OR_REINFORCED', 5, 'F');
    IGeoMilSymbol$Modifier$STAFF_COMMENTS_instance = new IGeoMilSymbol$Modifier('STAFF_COMMENTS', 6, 'G');
    IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_instance = new IGeoMilSymbol$Modifier('ADDITIONAL_INFO_1', 7, 'H');
    IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_instance = new IGeoMilSymbol$Modifier('ADDITIONAL_INFO_2', 8, 'H1');
    IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_instance = new IGeoMilSymbol$Modifier('ADDITIONAL_INFO_3', 9, 'H2');
    IGeoMilSymbol$Modifier$EVALUATION_RATING_instance = new IGeoMilSymbol$Modifier('EVALUATION_RATING', 10, 'J');
    IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_instance = new IGeoMilSymbol$Modifier('COMBAT_EFFECTIVENESS', 11, 'K');
    IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_instance = new IGeoMilSymbol$Modifier('SIGNATURE_EQUIPMENT', 12, 'L');
    IGeoMilSymbol$Modifier$HIGHER_FORMATION_instance = new IGeoMilSymbol$Modifier('HIGHER_FORMATION', 13, 'M');
    IGeoMilSymbol$Modifier$HOSTILE_instance = new IGeoMilSymbol$Modifier('HOSTILE', 14, 'N');
    IGeoMilSymbol$Modifier$IFF_SIF_instance = new IGeoMilSymbol$Modifier('IFF_SIF', 15, 'P');
    IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_instance = new IGeoMilSymbol$Modifier('DIRECTION_OF_MOVEMENT', 16, 'Q');
    IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_instance = new IGeoMilSymbol$Modifier('MOBILITY_INDICATOR', 17, 'R');
    IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_instance = new IGeoMilSymbol$Modifier('SIGINT_MOBILITY_INDICATOR', 18, 'R2');
    IGeoMilSymbol$Modifier$OFFSET_INDICATOR_instance = new IGeoMilSymbol$Modifier('OFFSET_INDICATOR', 19, 'S');
    IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_instance = new IGeoMilSymbol$Modifier('UNIQUE_DESIGNATOR_1', 20, 'T');
    IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_instance = new IGeoMilSymbol$Modifier('UNIQUE_DESIGNATOR_2', 21, 'T1');
    IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_instance = new IGeoMilSymbol$Modifier('EQUIPMENT_TYPE', 22, 'V');
    IGeoMilSymbol$Modifier$DATE_TIME_GROUP_instance = new IGeoMilSymbol$Modifier('DATE_TIME_GROUP', 23, 'W');
    IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_instance = new IGeoMilSymbol$Modifier('DATE_TIME_GROUP_2', 24, 'W1');
    IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_instance = new IGeoMilSymbol$Modifier('ALTITUDE_DEPTH', 25, 'X');
    IGeoMilSymbol$Modifier$LOCATION_instance = new IGeoMilSymbol$Modifier('LOCATION', 26, 'Y');
    IGeoMilSymbol$Modifier$SPEED_instance = new IGeoMilSymbol$Modifier('SPEED', 27, 'Z');
    IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_instance = new IGeoMilSymbol$Modifier('SPECIAL_C2_HEADQUARTERS', 28, 'AA');
    IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_instance = new IGeoMilSymbol$Modifier('FEINT_DUMMY_INDICATOR', 29, 'AB');
    IGeoMilSymbol$Modifier$INSTALLATION_instance = new IGeoMilSymbol$Modifier('INSTALLATION', 30, 'AC');
    IGeoMilSymbol$Modifier$PLATFORM_TYPE_instance = new IGeoMilSymbol$Modifier('PLATFORM_TYPE', 31, 'AD');
    IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_instance = new IGeoMilSymbol$Modifier('EQUIPMENT_TEARDOWN_TIME', 32, 'AE');
    IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_instance = new IGeoMilSymbol$Modifier('COMMON_IDENTIFIER', 33, 'AF');
    IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_instance = new IGeoMilSymbol$Modifier('AUXILIARY_EQUIPMENT_INDICATOR', 34, 'AG');
    IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_instance = new IGeoMilSymbol$Modifier('AREA_OF_UNCERTAINTY', 35, 'AH');
    IGeoMilSymbol$Modifier$DEAD_RECKONING_instance = new IGeoMilSymbol$Modifier('DEAD_RECKONING', 36, 'AI');
    IGeoMilSymbol$Modifier$SPEED_LEADER_instance = new IGeoMilSymbol$Modifier('SPEED_LEADER', 37, 'AJ');
    IGeoMilSymbol$Modifier$PAIRING_LINE_instance = new IGeoMilSymbol$Modifier('PAIRING_LINE', 38, 'AK');
    IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_instance = new IGeoMilSymbol$Modifier('OPERATIONAL_CONDITION', 39, 'AL');
    IGeoMilSymbol$Modifier$DISTANCE_instance = new IGeoMilSymbol$Modifier('DISTANCE', 40, 'AM');
    IGeoMilSymbol$Modifier$AZIMUTH_instance = new IGeoMilSymbol$Modifier('AZIMUTH', 41, 'AN');
    IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_instance = new IGeoMilSymbol$Modifier('ENGAGEMENT_BAR', 42, 'AO');
    IGeoMilSymbol$Modifier$COUNTRY_CODE_instance = new IGeoMilSymbol$Modifier('COUNTRY_CODE', 43, 'CC');
    IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_instance = new IGeoMilSymbol$Modifier('SONAR_CLASSIFICATION_CONFIDENCE', 44, 'SCC');
  }
  var IGeoMilSymbol$Modifier$SYMBOL_ICON_instance;
  function IGeoMilSymbol$Modifier$SYMBOL_ICON_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SYMBOL_ICON_instance;
  }
  var IGeoMilSymbol$Modifier$ECHELON_instance;
  function IGeoMilSymbol$Modifier$ECHELON_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ECHELON_instance;
  }
  var IGeoMilSymbol$Modifier$QUANTITY_instance;
  function IGeoMilSymbol$Modifier$QUANTITY_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$QUANTITY_instance;
  }
  var IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_instance;
  function IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_instance;
  }
  var IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_instance;
  function IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_instance;
  }
  var IGeoMilSymbol$Modifier$STAFF_COMMENTS_instance;
  function IGeoMilSymbol$Modifier$STAFF_COMMENTS_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$STAFF_COMMENTS_instance;
  }
  var IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_instance;
  function IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_instance;
  }
  var IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_instance;
  function IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_instance;
  }
  var IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_instance;
  function IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_instance;
  }
  var IGeoMilSymbol$Modifier$EVALUATION_RATING_instance;
  function IGeoMilSymbol$Modifier$EVALUATION_RATING_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$EVALUATION_RATING_instance;
  }
  var IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_instance;
  function IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_instance;
  }
  var IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_instance;
  function IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_instance;
  }
  var IGeoMilSymbol$Modifier$HIGHER_FORMATION_instance;
  function IGeoMilSymbol$Modifier$HIGHER_FORMATION_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$HIGHER_FORMATION_instance;
  }
  var IGeoMilSymbol$Modifier$HOSTILE_instance;
  function IGeoMilSymbol$Modifier$HOSTILE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$HOSTILE_instance;
  }
  var IGeoMilSymbol$Modifier$IFF_SIF_instance;
  function IGeoMilSymbol$Modifier$IFF_SIF_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$IFF_SIF_instance;
  }
  var IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_instance;
  function IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_instance;
  }
  var IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$OFFSET_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$OFFSET_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$OFFSET_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_instance;
  function IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_instance;
  }
  var IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_instance;
  function IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_instance;
  }
  var IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_instance;
  function IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_instance;
  }
  var IGeoMilSymbol$Modifier$DATE_TIME_GROUP_instance;
  function IGeoMilSymbol$Modifier$DATE_TIME_GROUP_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$DATE_TIME_GROUP_instance;
  }
  var IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_instance;
  function IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_instance;
  }
  var IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_instance;
  function IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_instance;
  }
  var IGeoMilSymbol$Modifier$LOCATION_instance;
  function IGeoMilSymbol$Modifier$LOCATION_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$LOCATION_instance;
  }
  var IGeoMilSymbol$Modifier$SPEED_instance;
  function IGeoMilSymbol$Modifier$SPEED_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SPEED_instance;
  }
  var IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_instance;
  function IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_instance;
  }
  var IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$INSTALLATION_instance;
  function IGeoMilSymbol$Modifier$INSTALLATION_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$INSTALLATION_instance;
  }
  var IGeoMilSymbol$Modifier$PLATFORM_TYPE_instance;
  function IGeoMilSymbol$Modifier$PLATFORM_TYPE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$PLATFORM_TYPE_instance;
  }
  var IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_instance;
  function IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_instance;
  }
  var IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_instance;
  function IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_instance;
  }
  var IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_instance;
  function IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_instance;
  }
  var IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_instance;
  function IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_instance;
  }
  var IGeoMilSymbol$Modifier$DEAD_RECKONING_instance;
  function IGeoMilSymbol$Modifier$DEAD_RECKONING_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$DEAD_RECKONING_instance;
  }
  var IGeoMilSymbol$Modifier$SPEED_LEADER_instance;
  function IGeoMilSymbol$Modifier$SPEED_LEADER_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SPEED_LEADER_instance;
  }
  var IGeoMilSymbol$Modifier$PAIRING_LINE_instance;
  function IGeoMilSymbol$Modifier$PAIRING_LINE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$PAIRING_LINE_instance;
  }
  var IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_instance;
  function IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_instance;
  }
  var IGeoMilSymbol$Modifier$DISTANCE_instance;
  function IGeoMilSymbol$Modifier$DISTANCE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$DISTANCE_instance;
  }
  var IGeoMilSymbol$Modifier$AZIMUTH_instance;
  function IGeoMilSymbol$Modifier$AZIMUTH_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$AZIMUTH_instance;
  }
  var IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_instance;
  function IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_instance;
  }
  var IGeoMilSymbol$Modifier$COUNTRY_CODE_instance;
  function IGeoMilSymbol$Modifier$COUNTRY_CODE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$COUNTRY_CODE_instance;
  }
  var IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_instance;
  function IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_getInstance() {
    IGeoMilSymbol$Modifier_initFields();
    return IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_instance;
  }
  IGeoMilSymbol$Modifier.prototype.valueOf = function () {
    return this.value_xgblh4$_0;
  };
  IGeoMilSymbol$Modifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Modifier',
    interfaces: [Enum]
  };
  function IGeoMilSymbol$Modifier$values() {
    return [IGeoMilSymbol$Modifier$SYMBOL_ICON_getInstance(), IGeoMilSymbol$Modifier$ECHELON_getInstance(), IGeoMilSymbol$Modifier$QUANTITY_getInstance(), IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_getInstance(), IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_getInstance(), IGeoMilSymbol$Modifier$STAFF_COMMENTS_getInstance(), IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_getInstance(), IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_getInstance(), IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_getInstance(), IGeoMilSymbol$Modifier$EVALUATION_RATING_getInstance(), IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_getInstance(), IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_getInstance(), IGeoMilSymbol$Modifier$HIGHER_FORMATION_getInstance(), IGeoMilSymbol$Modifier$HOSTILE_getInstance(), IGeoMilSymbol$Modifier$IFF_SIF_getInstance(), IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_getInstance(), IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$OFFSET_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_getInstance(), IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_getInstance(), IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_getInstance(), IGeoMilSymbol$Modifier$DATE_TIME_GROUP_getInstance(), IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_getInstance(), IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_getInstance(), IGeoMilSymbol$Modifier$LOCATION_getInstance(), IGeoMilSymbol$Modifier$SPEED_getInstance(), IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_getInstance(), IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$INSTALLATION_getInstance(), IGeoMilSymbol$Modifier$PLATFORM_TYPE_getInstance(), IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_getInstance(), IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_getInstance(), IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_getInstance(), IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_getInstance(), IGeoMilSymbol$Modifier$DEAD_RECKONING_getInstance(), IGeoMilSymbol$Modifier$SPEED_LEADER_getInstance(), IGeoMilSymbol$Modifier$PAIRING_LINE_getInstance(), IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_getInstance(), IGeoMilSymbol$Modifier$DISTANCE_getInstance(), IGeoMilSymbol$Modifier$AZIMUTH_getInstance(), IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_getInstance(), IGeoMilSymbol$Modifier$COUNTRY_CODE_getInstance(), IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_getInstance()];
  }
  IGeoMilSymbol$Modifier.values = IGeoMilSymbol$Modifier$values;
  function IGeoMilSymbol$Modifier$valueOf(name) {
    switch (name) {
      case 'SYMBOL_ICON':
        return IGeoMilSymbol$Modifier$SYMBOL_ICON_getInstance();
      case 'ECHELON':
        return IGeoMilSymbol$Modifier$ECHELON_getInstance();
      case 'QUANTITY':
        return IGeoMilSymbol$Modifier$QUANTITY_getInstance();
      case 'TASK_FORCE_INDICATOR':
        return IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_getInstance();
      case 'FRAME_SHAPE_MODIFIER':
        return IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_getInstance();
      case 'REDUCED_OR_REINFORCED':
        return IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_getInstance();
      case 'STAFF_COMMENTS':
        return IGeoMilSymbol$Modifier$STAFF_COMMENTS_getInstance();
      case 'ADDITIONAL_INFO_1':
        return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_getInstance();
      case 'ADDITIONAL_INFO_2':
        return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_getInstance();
      case 'ADDITIONAL_INFO_3':
        return IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_getInstance();
      case 'EVALUATION_RATING':
        return IGeoMilSymbol$Modifier$EVALUATION_RATING_getInstance();
      case 'COMBAT_EFFECTIVENESS':
        return IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_getInstance();
      case 'SIGNATURE_EQUIPMENT':
        return IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_getInstance();
      case 'HIGHER_FORMATION':
        return IGeoMilSymbol$Modifier$HIGHER_FORMATION_getInstance();
      case 'HOSTILE':
        return IGeoMilSymbol$Modifier$HOSTILE_getInstance();
      case 'IFF_SIF':
        return IGeoMilSymbol$Modifier$IFF_SIF_getInstance();
      case 'DIRECTION_OF_MOVEMENT':
        return IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_getInstance();
      case 'MOBILITY_INDICATOR':
        return IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_getInstance();
      case 'SIGINT_MOBILITY_INDICATOR':
        return IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_getInstance();
      case 'OFFSET_INDICATOR':
        return IGeoMilSymbol$Modifier$OFFSET_INDICATOR_getInstance();
      case 'UNIQUE_DESIGNATOR_1':
        return IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_getInstance();
      case 'UNIQUE_DESIGNATOR_2':
        return IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_getInstance();
      case 'EQUIPMENT_TYPE':
        return IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_getInstance();
      case 'DATE_TIME_GROUP':
        return IGeoMilSymbol$Modifier$DATE_TIME_GROUP_getInstance();
      case 'DATE_TIME_GROUP_2':
        return IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_getInstance();
      case 'ALTITUDE_DEPTH':
        return IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_getInstance();
      case 'LOCATION':
        return IGeoMilSymbol$Modifier$LOCATION_getInstance();
      case 'SPEED':
        return IGeoMilSymbol$Modifier$SPEED_getInstance();
      case 'SPECIAL_C2_HEADQUARTERS':
        return IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_getInstance();
      case 'FEINT_DUMMY_INDICATOR':
        return IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_getInstance();
      case 'INSTALLATION':
        return IGeoMilSymbol$Modifier$INSTALLATION_getInstance();
      case 'PLATFORM_TYPE':
        return IGeoMilSymbol$Modifier$PLATFORM_TYPE_getInstance();
      case 'EQUIPMENT_TEARDOWN_TIME':
        return IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_getInstance();
      case 'COMMON_IDENTIFIER':
        return IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_getInstance();
      case 'AUXILIARY_EQUIPMENT_INDICATOR':
        return IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_getInstance();
      case 'AREA_OF_UNCERTAINTY':
        return IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_getInstance();
      case 'DEAD_RECKONING':
        return IGeoMilSymbol$Modifier$DEAD_RECKONING_getInstance();
      case 'SPEED_LEADER':
        return IGeoMilSymbol$Modifier$SPEED_LEADER_getInstance();
      case 'PAIRING_LINE':
        return IGeoMilSymbol$Modifier$PAIRING_LINE_getInstance();
      case 'OPERATIONAL_CONDITION':
        return IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_getInstance();
      case 'DISTANCE':
        return IGeoMilSymbol$Modifier$DISTANCE_getInstance();
      case 'AZIMUTH':
        return IGeoMilSymbol$Modifier$AZIMUTH_getInstance();
      case 'ENGAGEMENT_BAR':
        return IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_getInstance();
      case 'COUNTRY_CODE':
        return IGeoMilSymbol$Modifier$COUNTRY_CODE_getInstance();
      case 'SONAR_CLASSIFICATION_CONFIDENCE':
        return IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoMilSymbol.Modifier.' + name);
    }
  }
  IGeoMilSymbol$Modifier.valueOf_61zpoe$ = IGeoMilSymbol$Modifier$valueOf;
  function IGeoMilSymbol$SymbolStandard(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoMilSymbol$SymbolStandard_initFields() {
    IGeoMilSymbol$SymbolStandard_initFields = function () {
    };
    IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_instance = new IGeoMilSymbol$SymbolStandard('MIL_STD_2525C', 0);
    IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_instance = new IGeoMilSymbol$SymbolStandard('MIL_STD_2525B', 1);
  }
  var IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_instance;
  function IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance() {
    IGeoMilSymbol$SymbolStandard_initFields();
    return IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_instance;
  }
  var IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_instance;
  function IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_getInstance() {
    IGeoMilSymbol$SymbolStandard_initFields();
    return IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_instance;
  }
  IGeoMilSymbol$SymbolStandard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolStandard',
    interfaces: [Enum]
  };
  function IGeoMilSymbol$SymbolStandard$values() {
    return [IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance(), IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_getInstance()];
  }
  IGeoMilSymbol$SymbolStandard.values = IGeoMilSymbol$SymbolStandard$values;
  function IGeoMilSymbol$SymbolStandard$valueOf(name) {
    switch (name) {
      case 'MIL_STD_2525C':
        return IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance();
      case 'MIL_STD_2525B':
        return IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoMilSymbol.SymbolStandard.' + name);
    }
  }
  IGeoMilSymbol$SymbolStandard.valueOf_61zpoe$ = IGeoMilSymbol$SymbolStandard$valueOf;
  IGeoMilSymbol.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoMilSymbol',
    interfaces: [IGeoRenderable]
  };
  function IGeoPath() {
  }
  IGeoPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPath',
    interfaces: [IGeoRenderable]
  };
  function IGeoPoint() {
  }
  IGeoPoint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPoint',
    interfaces: [IGeoRenderable]
  };
  function IGeoPolygon() {
  }
  IGeoPolygon.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPolygon',
    interfaces: [IGeoRenderable]
  };
  function IGeoPosition() {
  }
  IGeoPosition.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPosition',
    interfaces: []
  };
  function IGeoPositionGroup() {
  }
  IGeoPositionGroup.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPositionGroup',
    interfaces: [IGeoAltitudeMode]
  };
  function IGeoPositionHistory() {
  }
  IGeoPositionHistory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoPositionHistory',
    interfaces: []
  };
  function IGeoRectangle() {
  }
  IGeoRectangle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoRectangle',
    interfaces: [IGeoRenderable]
  };
  function IGeoRenderable() {
  }
  function IGeoRenderable$PathType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function IGeoRenderable$PathType_initFields() {
    IGeoRenderable$PathType_initFields = function () {
    };
    IGeoRenderable$PathType$GREAT_CIRCLE_instance = new IGeoRenderable$PathType('GREAT_CIRCLE', 0);
    IGeoRenderable$PathType$LINEAR_instance = new IGeoRenderable$PathType('LINEAR', 1);
    IGeoRenderable$PathType$RHUMB_LINE_instance = new IGeoRenderable$PathType('RHUMB_LINE', 2);
  }
  var IGeoRenderable$PathType$GREAT_CIRCLE_instance;
  function IGeoRenderable$PathType$GREAT_CIRCLE_getInstance() {
    IGeoRenderable$PathType_initFields();
    return IGeoRenderable$PathType$GREAT_CIRCLE_instance;
  }
  var IGeoRenderable$PathType$LINEAR_instance;
  function IGeoRenderable$PathType$LINEAR_getInstance() {
    IGeoRenderable$PathType_initFields();
    return IGeoRenderable$PathType$LINEAR_instance;
  }
  var IGeoRenderable$PathType$RHUMB_LINE_instance;
  function IGeoRenderable$PathType$RHUMB_LINE_getInstance() {
    IGeoRenderable$PathType_initFields();
    return IGeoRenderable$PathType$RHUMB_LINE_instance;
  }
  IGeoRenderable$PathType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathType',
    interfaces: [Enum]
  };
  function IGeoRenderable$PathType$values() {
    return [IGeoRenderable$PathType$GREAT_CIRCLE_getInstance(), IGeoRenderable$PathType$LINEAR_getInstance(), IGeoRenderable$PathType$RHUMB_LINE_getInstance()];
  }
  IGeoRenderable$PathType.values = IGeoRenderable$PathType$values;
  function IGeoRenderable$PathType$valueOf(name) {
    switch (name) {
      case 'GREAT_CIRCLE':
        return IGeoRenderable$PathType$GREAT_CIRCLE_getInstance();
      case 'LINEAR':
        return IGeoRenderable$PathType$LINEAR_getInstance();
      case 'RHUMB_LINE':
        return IGeoRenderable$PathType$RHUMB_LINE_getInstance();
      default:throwISE('No enum constant org.cmapi.primitives.IGeoRenderable.PathType.' + name);
    }
  }
  IGeoRenderable$PathType.valueOf_61zpoe$ = IGeoRenderable$PathType$valueOf;
  IGeoRenderable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoRenderable',
    interfaces: [IGeoPositionGroup, IGeoContainer]
  };
  function IGeoSquare() {
  }
  IGeoSquare.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoSquare',
    interfaces: [IGeoRenderable]
  };
  function IGeoStrokeStyle() {
  }
  IGeoStrokeStyle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoStrokeStyle',
    interfaces: []
  };
  function IGeoText() {
  }
  IGeoText.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoText',
    interfaces: [IGeoRenderable]
  };
  function IGeoTimeSpan() {
  }
  IGeoTimeSpan.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoTimeSpan',
    interfaces: []
  };
  function IGeoView() {
  }
  IGeoView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGeoView',
    interfaces: []
  };
  var package$multiplatform = _.multiplatform || (_.multiplatform = {});
  var package$expected = package$multiplatform.expected || (package$multiplatform.expected = {});
  Object.defineProperty(package$expected, 'GetUUIDFunction', {
    get: GetUUIDFunction_getInstance
  });
  var package$org = _.org || (_.org = {});
  var package$cmapi = package$org.cmapi || (package$org.cmapi = {});
  var package$primitives = package$cmapi.primitives || (package$cmapi.primitives = {});
  package$primitives.GeoAirControlMeasure = GeoAirControlMeasure;
  package$primitives.GeoAltitudeMode = GeoAltitudeMode;
  package$primitives.GeoBase = GeoBase;
  package$primitives.GeoBounds = GeoBounds;
  package$primitives.GeoCamera = GeoCamera;
  package$primitives.GeoCircle = GeoCircle;
  package$primitives.GeoColor = GeoColor;
  package$primitives.GeoContainer = GeoContainer;
  package$primitives.GeoDocument = GeoDocument;
  package$primitives.GeoEllipse = GeoEllipse;
  package$primitives.GeoFillStyle = GeoFillStyle;
  package$primitives.GeoIconStyle = GeoIconStyle;
  package$primitives.GeoImageOverlay = GeoImageOverlay;
  package$primitives.GeoLabelStyle = GeoLabelStyle;
  package$primitives.GeoLookAt = GeoLookAt;
  package$primitives.GeoMilSymbol = GeoMilSymbol;
  package$primitives.GeoPath = GeoPath;
  package$primitives.GeoPoint = GeoPoint;
  package$primitives.GeoPolygon = GeoPolygon;
  package$primitives.GeoPosition = GeoPosition;
  package$primitives.GeoPositionGroup = GeoPositionGroup;
  package$primitives.GeoPositionHistory = GeoPositionHistory;
  package$primitives.GeoRectangle = GeoRectangle;
  package$primitives.GeoRenderable = GeoRenderable;
  package$primitives.GeoSquare = GeoSquare;
  package$primitives.GeoStrokeStyle = GeoStrokeStyle;
  package$primitives.GeoText = GeoText;
  package$primitives.GeoTimeSpan = GeoTimeSpan;
  package$primitives.GeoView = GeoView;
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'RADIUS', {
    get: IGeoAirControlMeasure$Attribute$RADIUS_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'INNER_RADIUS', {
    get: IGeoAirControlMeasure$Attribute$INNER_RADIUS_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'TURN', {
    get: IGeoAirControlMeasure$Attribute$TURN_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'MIN_ALT', {
    get: IGeoAirControlMeasure$Attribute$MIN_ALT_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'MAX_ALT', {
    get: IGeoAirControlMeasure$Attribute$MAX_ALT_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'LEFT_AZIMUTH', {
    get: IGeoAirControlMeasure$Attribute$LEFT_AZIMUTH_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'RIGHT_AZIMUTH', {
    get: IGeoAirControlMeasure$Attribute$RIGHT_AZIMUTH_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'WIDTH', {
    get: IGeoAirControlMeasure$Attribute$WIDTH_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'LEFT_WIDTH', {
    get: IGeoAirControlMeasure$Attribute$LEFT_WIDTH_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$Attribute, 'RIGHT_WIDTH', {
    get: IGeoAirControlMeasure$Attribute$RIGHT_WIDTH_getInstance
  });
  IGeoAirControlMeasure.Attribute = IGeoAirControlMeasure$Attribute;
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'UNKNOWN', {
    get: IGeoAirControlMeasure$AcmType$UNKNOWN_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'ROUTE', {
    get: IGeoAirControlMeasure$AcmType$ROUTE_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'CYLINDER', {
    get: IGeoAirControlMeasure$AcmType$CYLINDER_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'ORBIT', {
    get: IGeoAirControlMeasure$AcmType$ORBIT_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'POLYGON', {
    get: IGeoAirControlMeasure$AcmType$POLYGON_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'RADARC', {
    get: IGeoAirControlMeasure$AcmType$RADARC_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'POLYARC', {
    get: IGeoAirControlMeasure$AcmType$POLYARC_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'TRACK', {
    get: IGeoAirControlMeasure$AcmType$TRACK_getInstance
  });
  Object.defineProperty(IGeoAirControlMeasure$AcmType, 'CURTAIN', {
    get: IGeoAirControlMeasure$AcmType$CURTAIN_getInstance
  });
  IGeoAirControlMeasure.AcmType = IGeoAirControlMeasure$AcmType;
  package$primitives.IGeoAirControlMeasure = IGeoAirControlMeasure;
  Object.defineProperty(IGeoAltitudeMode$AltitudeMode, 'CLAMP_TO_GROUND', {
    get: IGeoAltitudeMode$AltitudeMode$CLAMP_TO_GROUND_getInstance
  });
  Object.defineProperty(IGeoAltitudeMode$AltitudeMode, 'RELATIVE_TO_GROUND', {
    get: IGeoAltitudeMode$AltitudeMode$RELATIVE_TO_GROUND_getInstance
  });
  Object.defineProperty(IGeoAltitudeMode$AltitudeMode, 'ABSOLUTE', {
    get: IGeoAltitudeMode$AltitudeMode$ABSOLUTE_getInstance
  });
  IGeoAltitudeMode.AltitudeMode = IGeoAltitudeMode$AltitudeMode;
  package$primitives.IGeoAltitudeMode = IGeoAltitudeMode;
  package$primitives.IGeoBase = IGeoBase;
  package$primitives.IGeoBounds = IGeoBounds;
  package$primitives.IGeoCamera = IGeoCamera;
  package$primitives.IGeoCircle = IGeoCircle;
  package$primitives.IGeoColor = IGeoColor;
  package$primitives.IGeoContainer = IGeoContainer;
  package$primitives.IGeoDocument = IGeoDocument;
  package$primitives.IGeoEllipse = IGeoEllipse;
  Object.defineProperty(IGeoFillStyle$FillPattern, 'solid', {
    get: IGeoFillStyle$FillPattern$solid_getInstance
  });
  Object.defineProperty(IGeoFillStyle$FillPattern, 'hatched', {
    get: IGeoFillStyle$FillPattern$hatched_getInstance
  });
  Object.defineProperty(IGeoFillStyle$FillPattern, 'crossHatched', {
    get: IGeoFillStyle$FillPattern$crossHatched_getInstance
  });
  IGeoFillStyle.FillPattern = IGeoFillStyle$FillPattern;
  package$primitives.IGeoFillStyle = IGeoFillStyle;
  package$primitives.IGeoIconStyle = IGeoIconStyle;
  package$primitives.IGeoImageOverlay = IGeoImageOverlay;
  Object.defineProperty(IGeoLabelStyle$Typeface, 'REGULAR', {
    get: IGeoLabelStyle$Typeface$REGULAR_getInstance
  });
  Object.defineProperty(IGeoLabelStyle$Typeface, 'BOLD', {
    get: IGeoLabelStyle$Typeface$BOLD_getInstance
  });
  Object.defineProperty(IGeoLabelStyle$Typeface, 'ITALIC', {
    get: IGeoLabelStyle$Typeface$ITALIC_getInstance
  });
  Object.defineProperty(IGeoLabelStyle$Typeface, 'BOLDITALIC', {
    get: IGeoLabelStyle$Typeface$BOLDITALIC_getInstance
  });
  IGeoLabelStyle.Typeface = IGeoLabelStyle$Typeface;
  Object.defineProperty(IGeoLabelStyle$Justification, 'LEFT', {
    get: IGeoLabelStyle$Justification$LEFT_getInstance
  });
  Object.defineProperty(IGeoLabelStyle$Justification, 'CENTER', {
    get: IGeoLabelStyle$Justification$CENTER_getInstance
  });
  Object.defineProperty(IGeoLabelStyle$Justification, 'RIGHT', {
    get: IGeoLabelStyle$Justification$RIGHT_getInstance
  });
  IGeoLabelStyle.Justification = IGeoLabelStyle$Justification;
  package$primitives.IGeoLabelStyle = IGeoLabelStyle;
  package$primitives.IGeoLookAt = IGeoLookAt;
  package$primitives.IGeoMessage = IGeoMessage;
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SYMBOL_ICON', {
    get: IGeoMilSymbol$Modifier$SYMBOL_ICON_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ECHELON', {
    get: IGeoMilSymbol$Modifier$ECHELON_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'QUANTITY', {
    get: IGeoMilSymbol$Modifier$QUANTITY_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'TASK_FORCE_INDICATOR', {
    get: IGeoMilSymbol$Modifier$TASK_FORCE_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'FRAME_SHAPE_MODIFIER', {
    get: IGeoMilSymbol$Modifier$FRAME_SHAPE_MODIFIER_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'REDUCED_OR_REINFORCED', {
    get: IGeoMilSymbol$Modifier$REDUCED_OR_REINFORCED_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'STAFF_COMMENTS', {
    get: IGeoMilSymbol$Modifier$STAFF_COMMENTS_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ADDITIONAL_INFO_1', {
    get: IGeoMilSymbol$Modifier$ADDITIONAL_INFO_1_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ADDITIONAL_INFO_2', {
    get: IGeoMilSymbol$Modifier$ADDITIONAL_INFO_2_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ADDITIONAL_INFO_3', {
    get: IGeoMilSymbol$Modifier$ADDITIONAL_INFO_3_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'EVALUATION_RATING', {
    get: IGeoMilSymbol$Modifier$EVALUATION_RATING_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'COMBAT_EFFECTIVENESS', {
    get: IGeoMilSymbol$Modifier$COMBAT_EFFECTIVENESS_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SIGNATURE_EQUIPMENT', {
    get: IGeoMilSymbol$Modifier$SIGNATURE_EQUIPMENT_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'HIGHER_FORMATION', {
    get: IGeoMilSymbol$Modifier$HIGHER_FORMATION_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'HOSTILE', {
    get: IGeoMilSymbol$Modifier$HOSTILE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'IFF_SIF', {
    get: IGeoMilSymbol$Modifier$IFF_SIF_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'DIRECTION_OF_MOVEMENT', {
    get: IGeoMilSymbol$Modifier$DIRECTION_OF_MOVEMENT_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'MOBILITY_INDICATOR', {
    get: IGeoMilSymbol$Modifier$MOBILITY_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SIGINT_MOBILITY_INDICATOR', {
    get: IGeoMilSymbol$Modifier$SIGINT_MOBILITY_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'OFFSET_INDICATOR', {
    get: IGeoMilSymbol$Modifier$OFFSET_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'UNIQUE_DESIGNATOR_1', {
    get: IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_1_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'UNIQUE_DESIGNATOR_2', {
    get: IGeoMilSymbol$Modifier$UNIQUE_DESIGNATOR_2_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'EQUIPMENT_TYPE', {
    get: IGeoMilSymbol$Modifier$EQUIPMENT_TYPE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'DATE_TIME_GROUP', {
    get: IGeoMilSymbol$Modifier$DATE_TIME_GROUP_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'DATE_TIME_GROUP_2', {
    get: IGeoMilSymbol$Modifier$DATE_TIME_GROUP_2_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ALTITUDE_DEPTH', {
    get: IGeoMilSymbol$Modifier$ALTITUDE_DEPTH_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'LOCATION', {
    get: IGeoMilSymbol$Modifier$LOCATION_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SPEED', {
    get: IGeoMilSymbol$Modifier$SPEED_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SPECIAL_C2_HEADQUARTERS', {
    get: IGeoMilSymbol$Modifier$SPECIAL_C2_HEADQUARTERS_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'FEINT_DUMMY_INDICATOR', {
    get: IGeoMilSymbol$Modifier$FEINT_DUMMY_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'INSTALLATION', {
    get: IGeoMilSymbol$Modifier$INSTALLATION_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'PLATFORM_TYPE', {
    get: IGeoMilSymbol$Modifier$PLATFORM_TYPE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'EQUIPMENT_TEARDOWN_TIME', {
    get: IGeoMilSymbol$Modifier$EQUIPMENT_TEARDOWN_TIME_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'COMMON_IDENTIFIER', {
    get: IGeoMilSymbol$Modifier$COMMON_IDENTIFIER_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'AUXILIARY_EQUIPMENT_INDICATOR', {
    get: IGeoMilSymbol$Modifier$AUXILIARY_EQUIPMENT_INDICATOR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'AREA_OF_UNCERTAINTY', {
    get: IGeoMilSymbol$Modifier$AREA_OF_UNCERTAINTY_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'DEAD_RECKONING', {
    get: IGeoMilSymbol$Modifier$DEAD_RECKONING_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SPEED_LEADER', {
    get: IGeoMilSymbol$Modifier$SPEED_LEADER_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'PAIRING_LINE', {
    get: IGeoMilSymbol$Modifier$PAIRING_LINE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'OPERATIONAL_CONDITION', {
    get: IGeoMilSymbol$Modifier$OPERATIONAL_CONDITION_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'DISTANCE', {
    get: IGeoMilSymbol$Modifier$DISTANCE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'AZIMUTH', {
    get: IGeoMilSymbol$Modifier$AZIMUTH_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'ENGAGEMENT_BAR', {
    get: IGeoMilSymbol$Modifier$ENGAGEMENT_BAR_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'COUNTRY_CODE', {
    get: IGeoMilSymbol$Modifier$COUNTRY_CODE_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$Modifier, 'SONAR_CLASSIFICATION_CONFIDENCE', {
    get: IGeoMilSymbol$Modifier$SONAR_CLASSIFICATION_CONFIDENCE_getInstance
  });
  IGeoMilSymbol.Modifier = IGeoMilSymbol$Modifier;
  Object.defineProperty(IGeoMilSymbol$SymbolStandard, 'MIL_STD_2525C', {
    get: IGeoMilSymbol$SymbolStandard$MIL_STD_2525C_getInstance
  });
  Object.defineProperty(IGeoMilSymbol$SymbolStandard, 'MIL_STD_2525B', {
    get: IGeoMilSymbol$SymbolStandard$MIL_STD_2525B_getInstance
  });
  IGeoMilSymbol.SymbolStandard = IGeoMilSymbol$SymbolStandard;
  package$primitives.IGeoMilSymbol = IGeoMilSymbol;
  package$primitives.IGeoPath = IGeoPath;
  package$primitives.IGeoPoint = IGeoPoint;
  package$primitives.IGeoPolygon = IGeoPolygon;
  package$primitives.IGeoPosition = IGeoPosition;
  package$primitives.IGeoPositionGroup = IGeoPositionGroup;
  package$primitives.IGeoPositionHistory = IGeoPositionHistory;
  package$primitives.IGeoRectangle = IGeoRectangle;
  Object.defineProperty(IGeoRenderable$PathType, 'GREAT_CIRCLE', {
    get: IGeoRenderable$PathType$GREAT_CIRCLE_getInstance
  });
  Object.defineProperty(IGeoRenderable$PathType, 'LINEAR', {
    get: IGeoRenderable$PathType$LINEAR_getInstance
  });
  Object.defineProperty(IGeoRenderable$PathType, 'RHUMB_LINE', {
    get: IGeoRenderable$PathType$RHUMB_LINE_getInstance
  });
  IGeoRenderable.PathType = IGeoRenderable$PathType;
  package$primitives.IGeoRenderable = IGeoRenderable;
  package$primitives.IGeoSquare = IGeoSquare;
  package$primitives.IGeoStrokeStyle = IGeoStrokeStyle;
  package$primitives.IGeoText = IGeoText;
  package$primitives.IGeoTimeSpan = IGeoTimeSpan;
  package$primitives.IGeoView = IGeoView;
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));
