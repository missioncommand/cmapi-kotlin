package org.cmapi.primitives

import multiplatform.expected.MpDate

open class GeoTimeSpan : IGeoTimeSpan
{
    override var begin: MpDate = MpDate()
    override var end: MpDate = MpDate()
}
