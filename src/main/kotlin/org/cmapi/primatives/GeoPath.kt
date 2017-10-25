package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoPath

class GeoPath : GeoRenderable(), IGeoPath {
    override var timeStamp: MpDate = MpDate()
}
