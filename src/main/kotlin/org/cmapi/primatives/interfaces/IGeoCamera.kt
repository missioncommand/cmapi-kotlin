package org.cmapi.primitives.interfaces

interface IGeoCamera : IGeoAltitudeMode, IGeoPosition {

    var tilt: Double

    var roll: Double

    var heading: Double
}
