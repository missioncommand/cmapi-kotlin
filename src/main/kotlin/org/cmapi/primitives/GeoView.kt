package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoBounds
import org.cmapi.primitives.interfaces.IGeoCamera
import org.cmapi.primitives.interfaces.IGeoLookAt
import org.cmapi.primitives.interfaces.IGeoView

open class GeoView : IGeoView
{
    override var camera: IGeoCamera = GeoCamera()
    override var lookAt: IGeoLookAt = GeoLookAt()
    override var bounds: IGeoBounds = GeoBounds()
    override var scale: Double = 0.0
}
