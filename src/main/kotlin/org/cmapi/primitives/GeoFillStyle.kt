package org.cmapi.primitives

open class GeoFillStyle : IGeoFillStyle
{
    override var description : String? = null
    override var fillColor: IGeoColor = GeoColor()
    override var fillPattern: IGeoFillStyle.FillPattern? = null

    init
    {
        this.fillPattern = IGeoFillStyle.FillPattern.solid
    }
}
