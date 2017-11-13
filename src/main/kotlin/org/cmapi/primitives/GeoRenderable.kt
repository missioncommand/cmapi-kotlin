package org.cmapi.primitives

import multiplatform.expected.MpDate


open class GeoRenderable : GeoContainer(), IGeoRenderable
{
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode = IGeoAltitudeMode.AltitudeMode.UNKNOWN
    override var positions: List<IGeoPosition> = arrayListOf()
    override var timeStamp: MpDate = MpDate()
    override var timeSpans: List<IGeoTimeSpan> = arrayListOf()
    override var labelStyle: IGeoLabelStyle = GeoLabelStyle()
    override var strokeStyle: IGeoStrokeStyle = GeoStrokeStyle()
    override var fillStyle: IGeoFillStyle = GeoFillStyle()
    override var extrude = false
    override var tessellate = true
    override var buffer = 0.0
    override var azimuth = 0.0
    override var pathType: IGeoRenderable.PathType = IGeoRenderable.PathType.GREAT_CIRCLE

    init
    {
        this.pathType = IGeoRenderable.PathType.GREAT_CIRCLE
    }
}
