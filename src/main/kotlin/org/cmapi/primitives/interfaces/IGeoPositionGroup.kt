package org.cmapi.primitives.interfaces

import multiplatform.expected.MpDate

interface IGeoPositionGroup : IGeoAltitudeMode
{
    var positions: MutableList<IGeoPosition>

    var timeStamp: MpDate

    var timeSpans: MutableList<IGeoTimeSpan>
}
