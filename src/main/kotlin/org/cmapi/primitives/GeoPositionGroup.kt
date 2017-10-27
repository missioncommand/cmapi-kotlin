package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoPosition
import org.cmapi.primitives.interfaces.IGeoPositionGroup
import org.cmapi.primitives.interfaces.IGeoTimeSpan
import multiplatform.expected.MpDate;

open class GeoPositionGroup : GeoAltitudeMode(), IGeoPositionGroup
{
    override var positions: MutableList<IGeoPosition> = ArrayList()
    override var timeStamp: MpDate = MpDate()
    override var timeSpans: MutableList<IGeoTimeSpan> = ArrayList()
}
