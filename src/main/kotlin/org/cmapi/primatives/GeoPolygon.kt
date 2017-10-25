package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoPolygon

class GeoPolygon : GeoRenderable(), IGeoPolygon {
    override var timeStamp: MpDate = MpDate()
}
