package org.cmapi.primitives

import multiplatform.expected.MpDate;

open class GeoPositionGroup : GeoAltitudeMode(), IGeoPositionGroup
{
    override var positions: MutableList<IGeoPosition>? = ArrayList()
    override var timeStamp: MpDate? = null
    override var timeSpans: MutableList<IGeoTimeSpan>? = ArrayList()
}
