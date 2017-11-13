package org.cmapi.primitives

interface IGeoAltitudeMode
{

    var altitudeMode: AltitudeMode

    enum class AltitudeMode
    {
        UNKNOWN,
        CLAMP_TO_GROUND,
        RELATIVE_TO_GROUND,
        ABSOLUTE
    }
}
