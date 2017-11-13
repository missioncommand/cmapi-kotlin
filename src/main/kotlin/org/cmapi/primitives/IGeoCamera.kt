package org.cmapi.primitives

interface IGeoCamera : IGeoAltitudeMode, IGeoPosition, IGeoBase
{
    var tilt: Double

    var roll: Double

    var heading: Double
}
