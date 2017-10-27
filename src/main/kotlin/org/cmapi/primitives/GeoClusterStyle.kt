package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoClusterPointStyle
import org.cmapi.primitives.interfaces.IGeoClusterStyle
import org.cmapi.primitives.interfaces.IGeoIconStyle

open class GeoClusterStyle : IGeoClusterStyle
{
    override var label: String = ""
    override var title: String = ""
    override var summary: String = ""
    override var pointStyle: IGeoClusterPointStyle = GeoClusterPointStyle()
    override var iconStyle: IGeoIconStyle = GeoIconStyle()
}