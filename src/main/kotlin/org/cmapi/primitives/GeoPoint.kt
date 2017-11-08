package org.cmapi.primitives

open class GeoPoint : GeoRenderable(), IGeoPoint
{
    override var iconStyle: IGeoIconStyle = GeoIconStyle()
    override var iconURI: String? = null
}
