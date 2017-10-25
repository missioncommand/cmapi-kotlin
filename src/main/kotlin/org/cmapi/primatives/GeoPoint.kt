package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoIconStyle
import org.cmapi.primitives.interfaces.IGeoPoint

class GeoPoint : GeoRenderable(), IGeoPoint {
    override var iconStyle: IGeoIconStyle = GeoIconStyle()
    override var iconURI: String = ""
}
