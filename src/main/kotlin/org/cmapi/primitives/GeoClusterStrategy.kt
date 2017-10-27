package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoClusterStrategy
import org.cmapi.primitives.interfaces.IGeoClusterStyle

open class GeoClusterStrategy : GeoBase(), IGeoClusterStrategy
{
    override var threshold: String = "2"
    override var distance: String = "50"
    override var clusterStyle: IGeoClusterStyle = GeoClusterStyle()
}