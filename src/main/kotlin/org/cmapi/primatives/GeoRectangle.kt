package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoRectangle

class GeoRectangle : GeoRenderable(), IGeoRectangle {
    override var timeStamp: MpDate = MpDate()
    override var width = 150.0
    override var height = 75.0
}
