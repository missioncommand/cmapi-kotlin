package org.cmapi.primitives

import org.cmapi.primitives.interfaces.IGeoColor
import org.cmapi.primitives.interfaces.IGeoFillStyle

class GeoFillStyle : IGeoFillStyle {
    override var description: String = ""
    override var fillColor: IGeoColor = GeoColor()
    override var fillPattern: IGeoFillStyle.FillPattern = IGeoFillStyle.FillPattern.solid

    init {
        this.fillPattern = IGeoFillStyle.FillPattern.solid
    }
}
