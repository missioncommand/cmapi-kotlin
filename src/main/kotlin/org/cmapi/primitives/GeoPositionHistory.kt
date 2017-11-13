package org.cmapi.primitives


open class GeoPositionHistory : IGeoPositionHistory
{
    override var positionHistory: List<IGeoPositionGroup> = ArrayList()
}
