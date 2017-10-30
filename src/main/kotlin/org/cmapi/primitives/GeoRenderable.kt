package org.cmapi.primitives

import multiplatform.expected.MpDate


open class GeoRenderable : GeoContainer(), IGeoRenderable
{
    override var altitudeMode: IGeoAltitudeMode.AltitudeMode? = null
    override var positions: MutableList<IGeoPosition> = ArrayList()
    override var timeStamp: MpDate = MpDate()
    override var timeSpans: MutableList<IGeoTimeSpan> = ArrayList()
    override var labelStyle: IGeoLabelStyle? = GeoLabelStyle()
    override var strokeStyle: IGeoStrokeStyle? = GeoStrokeStyle()
    override var fillStyle: IGeoFillStyle? = GeoFillStyle()
    override var extrude = false
    override var tessellate = true
    override var buffer = 0.0
    override var azimuth = 0.0
    override var pathType: IGeoRenderable.PathType = IGeoRenderable.PathType.LINEAR

    init
    {
        this.pathType = IGeoRenderable.PathType.GREAT_CIRCLE
    }
}
