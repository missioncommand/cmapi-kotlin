package org.cmapi.primitives

interface IGeoRenderable : IGeoContainer, IGeoPositionGroup
{
    var labelStyle: IGeoLabelStyle

    var strokeStyle: IGeoStrokeStyle

    var fillStyle: IGeoFillStyle

    var extrude: Boolean

    var tessellate: Boolean

    var buffer: Double

    var azimuth: Double

    var pathType: PathType

    enum class PathType
    {
        GREAT_CIRCLE,
        LINEAR,
        RHUMB_LINE
    }
}
