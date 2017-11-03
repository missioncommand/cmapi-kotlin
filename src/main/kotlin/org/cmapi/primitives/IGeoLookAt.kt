package org.cmapi.primitives

interface IGeoLookAt : IGeoAltitudeMode, IGeoPosition, IGeoBase {

    var tilt: Double

    var heading: Double

    var range: Double
}
