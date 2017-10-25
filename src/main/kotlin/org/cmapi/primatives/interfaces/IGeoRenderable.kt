package org.cmapi.primitives.interfaces

interface IGeoRenderable : IGeoContainer, IGeoPositionGroup {

    var labelStyle: IGeoLabelStyle

    var strokeStyle: IGeoStrokeStyle

    var fillStyle: IGeoFillStyle

    var extrude: Boolean

    var tessellate: Boolean

    var buffer: Double

    var azimuth: Double

    var pathType: IGeoRenderable.PathType

    enum class PathType private constructor() {
        GREAT_CIRCLE,
        LINEAR,
        RHUMB_LINE
    }
}
