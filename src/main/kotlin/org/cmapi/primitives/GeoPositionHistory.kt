package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoPositionGroup
import org.cmapi.primitives.interfaces.IGeoPositionHistory


open class GeoPositionHistory : IGeoPositionHistory
{
    override var positionHistory: List<IGeoPositionGroup> = ArrayList()
}
