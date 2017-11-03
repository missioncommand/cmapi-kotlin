package org.cmapi.primitives

open class GeoFillStyle : IGeoFillStyle
{
    override var description : String = ""
    override var fillColor: IGeoColor = GeoColor()
    override var fillPattern: IGeoFillStyle.FillPattern = IGeoFillStyle.FillPattern.solid

    init
    {
        this.fillPattern = IGeoFillStyle.FillPattern.solid
    }
}