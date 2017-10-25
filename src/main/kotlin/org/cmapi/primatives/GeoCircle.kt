package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoBase
import org.cmapi.primitives.interfaces.IGeoCircle

class GeoCircle : GeoRenderable(), IGeoCircle {
    override var children: List<IGeoBase> = arrayListOf()
    override var timeStamp: MpDate = MpDate()
    override var radius = 100.0
}
