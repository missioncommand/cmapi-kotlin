package org.cmapi.primitives

import multiplatform.expected.MpDate

open class GeoTimeSpan : IGeoTimeSpan
{
    override var begin: MpDate? = null
    override var end: MpDate? = null
}
