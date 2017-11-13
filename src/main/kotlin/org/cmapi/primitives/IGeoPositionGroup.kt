package org.cmapi.primitives

import multiplatform.expected.MpDate

interface IGeoPositionGroup : IGeoAltitudeMode
{
    var positions: List<IGeoPosition>

    var timeStamp: MpDate

    var timeSpans: List<IGeoTimeSpan>
}
