package org.cmapi.primitives

open class GeoStrokeStyle : IGeoStrokeStyle
{
    override var strokeColor: IGeoColor? = GeoColor()
    override var stipplingPattern: Short = 0
    override var stipplingFactor = 0
    override var strokeWidth = 3.0
}
