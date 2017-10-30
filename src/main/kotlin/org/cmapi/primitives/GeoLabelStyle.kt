package org.cmapi.primitives

open class GeoLabelStyle : IGeoLabelStyle
{
    override var size = 12.0
    override var color: IGeoColor = GeoColor()
    override var outlineColor: IGeoColor = GeoColor()
    override var justification: IGeoLabelStyle.Justification = IGeoLabelStyle.Justification.LEFT
    override var fontFamily: String = ""
    override var typeface: IGeoLabelStyle.Typeface = IGeoLabelStyle.Typeface.REGULAR

    init
    {
        this.justification = IGeoLabelStyle.Justification.LEFT
        this.typeface = IGeoLabelStyle.Typeface.REGULAR
    }
}
