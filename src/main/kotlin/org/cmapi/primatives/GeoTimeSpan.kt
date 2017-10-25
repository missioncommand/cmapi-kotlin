package org.cmapi.primitives

import multiplatform.expected.MpDate
import org.cmapi.primitives.interfaces.IGeoTimeSpan

class GeoTimeSpan : IGeoTimeSpan {
    override var begin: MpDate = MpDate()
    override var end: MpDate = MpDate()
}
