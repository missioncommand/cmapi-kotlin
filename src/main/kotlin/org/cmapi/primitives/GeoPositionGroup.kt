package org.cmapi.primitives

import multiplatform.expected.MpDate;

open class GeoPositionGroup : GeoAltitudeMode(), IGeoPositionGroup
{
    override var positions: List<IGeoPosition> = ArrayList()
    override var timeStamp: MpDate = MpDate()
    override var timeSpans: List<IGeoTimeSpan> = ArrayList()
}
