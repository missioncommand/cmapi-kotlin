package org.cmapi.primitives.interfaces

interface IGeoLookAt : IGeoAltitudeMode, IGeoPosition {

    var tilt: Double

    var heading: Double

    var range: Double
}
