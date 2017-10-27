package org.cmapi.primitives.interfaces

interface IGeoCamera : IGeoAltitudeMode, IGeoPosition, IGeoBase {

    var tilt: Double

    var roll: Double

    var heading: Double
}
