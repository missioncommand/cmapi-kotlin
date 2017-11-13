package org.cmapi.primitives

interface IGeoAirControlMeasure : IGeoRenderable
{

    var acmType: AcmType

    var attributes: HashMap<Attribute, String>

    enum class Attribute
    {
        RADIUS,
        INNER_RADIUS,
        TURN,
        MIN_ALT,
        MAX_ALT,
        LEFT_AZIMUTH,
        RIGHT_AZIMUTH,
        WIDTH,
        LEFT_WIDTH,
        RIGHT_WIDTH
    }

    enum class AcmType
    {
        UNKNOWN,
        ROUTE,
        CYLINDER,
        ORBIT,
        POLYGON,
        RADARC,
        POLYARC,
        TRACK,
        CURTAIN
    }
}
