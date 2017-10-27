package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoClusterPointStyle
import org.cmapi.primitives.interfaces.IGeoColor

open class GeoClusterPointStyle : IGeoClusterPointStyle
{
    override var color: IGeoColor = GeoColor()
    override var radius: Double = 6.0
}