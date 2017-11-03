package org.cmapi.primitives


open class GeoPositionHistory : IGeoPositionHistory
{
    override var positionHistory: MutableList<IGeoPositionGroup> = ArrayList()
}
