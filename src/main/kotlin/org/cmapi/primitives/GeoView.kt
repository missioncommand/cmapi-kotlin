package org.cmapi.primitives

open class GeoView : IGeoView
{
    override var camera: IGeoCamera = GeoCamera()
    override var lookAt: IGeoLookAt = GeoLookAt()
    override var bounds: IGeoBounds = GeoBounds()
    override var scale: Double = 0.0
}
