package org.cmapi.primitives

interface IGeoAirControlMeasure : IGeoRenderable {

    var acmType: AcmType

    var attributes: HashMap<Attribute, String>

    enum class Attribute private constructor() {
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

    enum class AcmType private constructor() {
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
