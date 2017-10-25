package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoEllipse

class GeoEllipse : GeoRenderable(), IGeoEllipse {
    override var timeStamp: MpDate = MpDate()
    override var semiMajor = 150.0
    override var semiMinor = 75.0
}
