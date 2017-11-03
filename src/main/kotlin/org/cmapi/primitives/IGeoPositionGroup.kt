package org.cmapi.primitives

import multiplatform.expected.MpDate

interface IGeoPositionGroup : IGeoAltitudeMode
{
    var positions: MutableList<IGeoPosition>

    var timeStamp: MpDate

    var timeSpans: MutableList<IGeoTimeSpan>
}
